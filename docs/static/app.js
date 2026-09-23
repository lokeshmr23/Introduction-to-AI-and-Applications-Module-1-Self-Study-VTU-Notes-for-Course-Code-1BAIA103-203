(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  function show(view) {
    $$("main > section").forEach((el) => el.classList.add("hidden"));
    $("#view-" + view).classList.remove("hidden");
    $$("#nav button").forEach((b) => b.classList.toggle("active", b.dataset.view === view));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  $$("#nav button").forEach((b) => b.addEventListener("click", () => show(b.dataset.view)));
  $$("[data-go]").forEach((b) => b.addEventListener("click", () => show(b.dataset.go)));

  const topicList = $("#topicList");
  NOTES.forEach((n, i) => {
    const btn = document.createElement("button");
    btn.textContent = n.title;
    if (i === 0) btn.classList.add("on");
    btn.onclick = () => {
      $$("#topicList button").forEach((x) => x.classList.remove("on"));
      btn.classList.add("on");
      $("#noteBody").innerHTML = n.html;
    };
    topicList.appendChild(btn);
  });
  $("#noteBody").innerHTML = NOTES[0].html;

  window.openNote = function (id) {
    show("notes");
    const n = NOTES.find((x) => x.id === id) || NOTES[0];
    $("#noteBody").innerHTML = n.html;
    $$("#topicList button").forEach((b) => b.classList.toggle("on", b.textContent === n.title));
  };

  let currentQs = QUESTIONS.slice();
  let qi = 0;
  const papers = [...new Set(QUESTIONS.map((q) => q.paper))];
  papers.unshift("All papers");
  papers.forEach((p) => {
    const o = document.createElement("option");
    o.value = p;
    o.textContent = p;
    $("#paperSelect").appendChild(o);
  });

  function filtered() {
    const p = $("#paperSelect").value;
    const m = $("#markFilter").value;
    return QUESTIONS.filter((q) => (p === "All papers" || q.paper === p) && (m === "all" || String(q.marks) === m));
  }

  function renderNav() {
    currentQs = filtered();
    if (qi >= currentQs.length) qi = 0;
    $("#qNav").innerHTML = currentQs
      .map((q, i) => `<button class="btn ghost" style="margin:4px" onclick="loadQ(${i})">Q${i + 1} (${q.marks}M)</button>`)
      .join("");
    if (currentQs.length) loadQ(qi);
    else $("#qCard").innerHTML = "<p>No questions in this filter.</p>";
  }

  window.loadQ = function (i) {
    qi = i;
    const q = currentQs[i];
    $("#resultCard").classList.add("hidden");
    const badge = q.marks <= 2 ? "m2" : q.marks <= 6 ? "m6" : "m10";
    $("#qCard").innerHTML = `
      <div class="qmeta">
        <span class="badge ${badge}">${q.marks} Marks</span>
        <span class="badge">${q.paper}</span>
        <span class="badge">${q.module}</span>
      </div>
      <h3>${q.text}</h3>
      <p>Write as you would in the VTU booklet. Sketch Fig. 3.12–3.19 if asked.</p>
      <textarea id="ans" placeholder="Type your answer here..."></textarea>
      <div>
        <button class="btn" onclick="evaluateAns()">Compare with notes</button>
        <button class="btn ghost" onclick="loadQ(${(i + 1) % currentQs.length})">Next question</button>
      </div>`;
  };

  window.evaluateAns = function () {
    const q = currentQs[qi];
    const ans = ($("#ans").value || "").trim();
    const card = $("#resultCard");
    card.classList.remove("hidden");
    if (ans.length < 12) {
      card.innerHTML = `<p class="miss">Please write a fuller answer before comparison.</p>`;
      return;
    }
    const text = ans.toLowerCase();
    const hits = [];
    const miss = [];
    q.keywords.forEach((k) => {
      const parts = k.toLowerCase().split(" ");
      const ok = parts.every((p) => text.includes(p)) || text.includes(k.toLowerCase());
      (ok ? hits : miss).push(k);
    });
    const score = Math.round((hits.length / q.keywords.length) * 100);
    const markEst = Math.round((score / 100) * q.marks * 10) / 10;
    const noteLinks = q.notes
      .map((id) => {
        const n = NOTES.find((x) => x.id === id);
        return `<button class="btn ghost" onclick="openNote('${id}')">Notes: ${n.title}</button>`;
      })
      .join(" ");
    const slideIdx = NOTES.find((x) => x.id === q.notes[0])?.suggestSlides?.[0] ?? 0;
    card.innerHTML = `
      <h3>Comparison with classroom notes</h3>
      <p>Concept coverage <strong>${score}%</strong> · estimated <strong>${markEst} / ${q.marks}</strong></p>
      <div class="score-bar"><span style="width:${score}%"></span></div>
      <p><strong>Concepts present:</strong> ${hits.map((k) => `<span class="kw">${k}</span>`).join(" ") || "—"}</p>
      <p><strong>Revise:</strong> ${miss.map((k) => `<span class="kw miss">${k}</span>`).join(" ") || "None. Well done."}</p>
      <div class="cite"><strong>Model points:</strong> ${q.model}</div>
      <div class="suggest">
        ${noteLinks}
        <button class="btn" onclick="goSlide(${slideIdx})">Classroom slides</button>
        <button class="btn ghost" onclick="goVideo(${slideIdx})">Lecture video</button>
      </div>`;
    card.scrollIntoView({ behavior: "smooth" });
  };

  $("#paperSelect").onchange = renderNav;
  $("#markFilter").onchange = renderNav;
  renderNav();

  let si = 0;
  function drawSlide(el, i) {
    const s = SLIDES[i];
    el.innerHTML = `<p style="font-size:.8rem;color:#64748b">Slide ${i + 1} / ${SLIDES.length} · ${COURSE.code}</p><h2>${s.title}</h2>${s.body}`;
  }
  function renderSlide() {
    drawSlide($("#slideStage"), si);
    $("#slidePos").textContent = `${si + 1} / ${SLIDES.length}`;
  }
  $("#prevSlide").onclick = () => {
    si = (si + SLIDES.length - 1) % SLIDES.length;
    renderSlide();
  };
  $("#nextSlide").onclick = () => {
    si = (si + 1) % SLIDES.length;
    renderSlide();
  };
  window.goSlide = function (i) {
    si = i;
    show("slides");
    renderSlide();
  };
  renderSlide();

  /* Lecture: HTML5 audio files (work on GitHub Pages) + speechSynthesis fallback */
  let vi = 0;
  let speaking = false;
  let resumeTimer = null;
  window.__utt = null;
  const audioEl = document.createElement("audio");
  audioEl.preload = "auto";
  audioEl.setAttribute("playsinline", "true");
  $("#view-video .card").appendChild(audioEl);

  const chapters = $("#vidChapters");
  LECTURE.forEach((l, i) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="#" data-i="${i}">${l.title}</a>`;
    chapters.appendChild(li);
  });
  chapters.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;
    e.preventDefault();
    startFrom(+a.dataset.i);
  });

  function drawVid() {
    drawSlide($("#vidStage"), vi);
  }
  drawVid();

  function audioUrl(i) {
    const n = String(i).padStart(2, "0");
    return "static/audio/lec-" + n + ".mp3";
  }

  function stopAll() {
    speaking = false;
    if (resumeTimer) {
      clearInterval(resumeTimer);
      resumeTimer = null;
    }
    try {
      audioEl.pause();
      audioEl.removeAttribute("src");
    } catch (e) {}
    try {
      speechSynthesis.cancel();
    } catch (e) {}
  }

  function playFile(i, onend) {
    audioEl.onended = onend;
    audioEl.onerror = function () {
      speakSynth(i, onend);
    };
    audioEl.src = audioUrl(i);
    const p = audioEl.play();
    if (p && p.catch) p.catch(() => speakSynth(i, onend));
  }

  function pickVoice() {
    const voices = speechSynthesis.getVoices() || [];
    return (
      voices.find((v) => /en-IN/i.test(v.lang)) ||
      voices.find((v) => /en-GB/i.test(v.lang)) ||
      voices.find((v) => /^en/i.test(v.lang)) ||
      voices[0] ||
      null
    );
  }

  function speakSynth(i, onend) {
    try {
      speechSynthesis.cancel();
    } catch (e) {}
    const u = new SpeechSynthesisUtterance(LECTURE[i].speak);
    const v = pickVoice();
    if (v) {
      u.voice = v;
      u.lang = v.lang;
    } else {
      u.lang = "en-GB";
    }
    u.rate = 0.95;
    u.onend = function () {
      if (resumeTimer) {
        clearInterval(resumeTimer);
        resumeTimer = null;
      }
      if (onend) onend();
    };
    u.onerror = function () {
      $("#vidStatus").textContent = "Voice blocked. Click Play lecture again, or unmute the tab.";
    };
    window.__utt = u;
    if (resumeTimer) clearInterval(resumeTimer);
    resumeTimer = setInterval(function () {
      try {
        speechSynthesis.resume();
      } catch (e) {}
    }, 8000);
    setTimeout(function () {
      speechSynthesis.resume();
      speechSynthesis.speak(u);
    }, 120);
  }

  function playChain() {
    if (!speaking) return;
    drawVid();
    $("#vidStatus").textContent = "Playing: " + LECTURE[vi].title + " (turn the device volume up)";
    playFile(vi, function () {
      if (!speaking) return;
      if (vi < LECTURE.length - 1) {
        vi += 1;
        playChain();
      } else {
        speaking = false;
        $("#vidStatus").textContent = "Lecture finished. Click a chapter to replay.";
      }
    });
  }

  function startFrom(i) {
    stopAll();
    vi = i;
    speaking = true;
    if (speechSynthesis.getVoices().length === 0) {
      speechSynthesis.addEventListener("voiceschanged", function once() {
        speechSynthesis.removeEventListener("voiceschanged", once);
        playChain();
      });
      setTimeout(playChain, 400);
    } else {
      playChain();
    }
  }

  $("#playVid").onclick = () => startFrom(vi);
  $("#pauseVid").onclick = () => {
    speaking = false;
    audioEl.pause();
    speechSynthesis.pause();
    $("#vidStatus").textContent = "Paused. Click Play to continue from this slide.";
  };
  $("#stopVid").onclick = () => {
    stopAll();
    $("#vidStatus").textContent = "Stopped.";
  };
  window.goVideo = function (i) {
    show("video");
    $("#vidStatus").textContent = "Click Play lecture (the browser allows sound only after a click).";
    vi = i;
    drawVid();
  };

  try {
    speechSynthesis.getVoices();
  } catch (e) {}
})();
