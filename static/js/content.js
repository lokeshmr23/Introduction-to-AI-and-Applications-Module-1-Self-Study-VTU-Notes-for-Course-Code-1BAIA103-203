/* Content rewritten from Module 1 Part A textbook. Citations avoid plagiarism. */
const COURSE = {
  code: "1BAIA103",
  title: "Introduction to Artificial Intelligence and its Applications",
  module: "Module 1 — Part A",
  source: "Prescribed class textbook, Module 1 Part A (scanned notes supplied by faculty)"
};

const NOTES = [
  {
    id: "n1",
    title: "1.1 What is Artificial Intelligence?",
    suggestSlides: [0, 1],
    html: `
      <h2>1.1 What is Artificial Intelligence?</h2>
      <p class="cite">Paraphrased from Textbook §1.1. Do not copy this paragraph into answer scripts word-for-word; use your own sentences.</p>
      <p>John McCarthy (2004) described artificial intelligence as the science and engineering of making intelligent machines, especially intelligent computer programmes. Much earlier, in 1950, Alan Turing’s paper <em>Computing Machinery and Intelligence</em> asked “Can machines think?” and proposed the Turing Test: a human interrogator tries to tell apart a computer’s text replies from a human’s.</p>
      <p>From a layman’s view, AI is intelligence shown by machines that mimic human actions. Such systems learn from experience, adjust to new inputs and carry out human-like tasks. Popular languages for coding AI applications are R, Python and Java.</p>
      <p>From a researcher’s view, AI is a set of algorithms that produce results without being told every step, so that machines can think and act rationally and humanely. Chess programmes and self-driving cars lean heavily on deep learning and natural language processing.</p>
      <p><strong>NITI Aayog</strong> (National Strategy for Artificial Intelligence) defines AI as the ability of machines to perform cognitive tasks such as thinking, perceiving, learning, problem solving and decision-making. With better data, processing and compute, intelligent systems now take over many tasks, connect systems and raise productivity.</p>
      <div class="formula">Turing Test: Interrogator cannot reliably distinguish machine text from human text ⇒ machine exhibits intelligent behaviour.</div>
      <p class="cite">Cite in answers as: McCarthy (2004); Turing (1950); NITI Aayog National Strategy for AI — as summarised in Textbook §1.1.</p>
    `
  },
  {
    id: "n2",
    title: "1.1.1 How does AI work?",
    suggestSlides: [2],
    html: `
      <h2>1.1.1 How does AI work?</h2>
      <p class="cite">Textbook §1.1.1 — paraphrased.</p>
      <p>AI systems work well when they are fed a large amount of labelled training data. The data is analysed to find correlations and patterns; those patterns are then used to predict future states. Example: a chatbot trained on many text chats learns to converse with people.</p>
      <p>AI programming focuses on three cognitive skills:</p>
      <ol>
        <li><strong>Learning</strong> — acquire data and form rules (algorithms) that turn data into useful information.</li>
        <li><strong>Reasoning</strong> — choose the right algorithm to reach a desired outcome.</li>
        <li><strong>Self-correction</strong> — continually refine algorithms so that results stay accurate.</li>
      </ol>
      <div class="fig">
        <svg viewBox="0 0 640 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="40" width="140" height="70" rx="8" fill="#bbf7d0" stroke="#14532d"/>
          <text x="80" y="80" text-anchor="middle" font-size="14">Labelled data</text>
          <rect x="190" y="40" width="140" height="70" rx="8" fill="#bae6fd" stroke="#075985"/>
          <text x="260" y="80" text-anchor="middle" font-size="14">Find patterns</text>
          <rect x="370" y="40" width="140" height="70" rx="8" fill="#fde68a" stroke="#854d0e"/>
          <text x="440" y="80" text-anchor="middle" font-size="14">Predict</text>
          <rect x="550" y="40" width="80" height="70" rx="8" fill="#fecaca" stroke="#7f1d1d"/>
          <text x="590" y="80" text-anchor="middle" font-size="13">Act</text>
          <path d="M150 75 L190 75" stroke="#334155" marker-end="url(#a)" stroke-width="2"/>
        </svg>
        <div class="figcaption">Fig. 1.A (redrawn after Textbook Fig. 1.4 / 1.5): data → patterns → prediction. Cite Fig. 1.4 and Fig. 1.5 of the textbook.</div>
      </div>
    `
  },
  {
    id: "n3",
    title: "History of AI (milestones)",
    suggestSlides: [3, 4],
    html: `
      <h2>Brief history of Artificial Intelligence</h2>
      <p class="cite">Textbook history timeline (Module 1). Paraphrased; quote years in the examination.</p>
      <table>
        <thead><tr><th>Year / period</th><th>Event (cite textbook timeline)</th></tr></thead>
        <tbody>
          <tr><td>1950</td><td>Turing: <em>Computing Machinery and Intelligence</em>; Turing Test.</td></tr>
          <tr><td>1956</td><td>Dartmouth workshop — term “Artificial Intelligence” (McCarthy and others).</td></tr>
          <tr><td>1959</td><td>Arthur Samuel coins “machine learning”.</td></tr>
          <tr><td>1963</td><td>McCarthy starts the Stanford AI Lab.</td></tr>
          <tr><td>1960s</td><td>Weizenbaum’s ELIZA — early NLP chatbot.</td></tr>
          <tr><td>1969</td><td>Expert system for diagnosing blood infections (Stanford).</td></tr>
          <tr><td>1972</td><td>PROLOG created.</td></tr>
          <tr><td>1974–1980</td><td>First AI Winter — DARPA funding cuts.</td></tr>
          <tr><td>1980</td><td>DEC’s commercial expert system R1.</td></tr>
          <tr><td>1982</td><td>Japan’s Fifth Generation Computer Systems (FGCS) project.</td></tr>
          <tr><td>1987–1993</td><td>Second AI Winter; FGCS wound up (1992); US project ended 1993 (~$1 billion spent).</td></tr>
        </tbody>
      </table>
      <p>Remember both winters for 2-mark / 6-mark questions: loss of funding when results did not match the hype.</p>
    `
  },
  {
    id: "n4",
    title: "Types of AI (capability and functionality)",
    suggestSlides: [5, 6],
    html: `
      <h2>Types of Artificial Intelligence</h2>
      <p class="cite">Textbook §1.3 (capability-based and functionality-based). Paraphrased.</p>
      <h3>By capability</h3>
      <ul>
        <li><strong>Artificial Narrow Intelligence (ANI / Weak AI)</strong> — specialised at one task (face unlock, chess, recommendation).</li>
        <li><strong>Artificial General Intelligence (AGI / Strong AI)</strong> — human-level ability across many tasks; still research.</li>
        <li><strong>Artificial Super Intelligence (ASI)</strong> — hypothetically exceeds human intelligence.</li>
      </ul>
      <h3>By functionality (Kaplan / textbook classification)</h3>
      <ol>
        <li><strong>Reactive machines</strong> — no memory of the past; respond to the present (Deep Blue).</li>
        <li><strong>Limited memory</strong> — use recent data; most current ML systems (self-driving cars). Three ML ideas used here: reinforcement learning, LSTM, evolutionary GAN (E-GAN) as listed in the textbook.</li>
        <li><strong>Theory of Mind</strong> — would model other agents’ beliefs, intents and emotions (not fully achieved).</li>
        <li><strong>Self-aware AI</strong> — would possess consciousness; theoretical only.</li>
      </ol>
      <p class="cite">Cite Textbook §1.3.5 for Theory of Mind. Limited-memory models: RL, LSTM, E-GAN as in the textbook list.</p>
    `
  },
  {
    id: "n5",
    title: "Machine learning versus traditional programming",
    suggestSlides: [7, 8],
    html: `
      <h2>Machine learning and traditional programming</h2>
      <p class="cite">Textbook discussion around Table 1.2 and Fig. 1.4. Table redrawn; do not photocopy the book table.</p>
      <p>Machine learning is an application of AI that lets machines improve from experience without being explicitly programmed for every case. Teaching a machine is often described in three structural steps (Textbook Fig. 1.5): present data, let the model learn a mapping, then use the mapping on new data.</p>
      <p><strong>Case study (textbook):</strong> filtering Amna’s photographs from 100 images is hard with hand-written pixel rules, but straightforward if a learning model is shown many photos of Amna.</p>
      <table>
        <thead><tr><th>Aspect</th><th>Traditional programming</th><th>Machine learning</th></tr></thead>
        <tbody>
          <tr><td>Input</td><td>Data + explicit rules / programme</td><td>Data + desired answers (labels)</td></tr>
          <tr><td>Output</td><td>Answers</td><td>A model (rules learnt)</td></tr>
          <tr><td>Change</td><td>Programmer rewrites logic</td><td>Model retrains on new data</td></tr>
          <tr><td>Typical use</td><td>UI, visualisation, deterministic logic</td><td>Prediction, recognition, ranking</td></tr>
        </tbody>
      </table>
      <p class="cite">Table 1.2 of the textbook (redrawn). ML supplements programming; a data engineer and a conventional programmer are not interchangeable (textbook remark).</p>
      <div class="formula">Traditional: Data + Programme → Output &nbsp;&nbsp;|&nbsp;&nbsp; ML: Data + Output → Programme (model)</div>
    `
  },
  {
    id: "n6",
    title: "3.1 Defining intelligence (Gardner)",
    suggestSlides: [9],
    html: `
      <h2>3.1 Defining intelligence — Gardner’s categories</h2>
      <p class="cite">Textbook Chapter 3, §3.1. Howard Gardner, American developmental psychologist. Paraphrased.</p>
      <ul>
        <li><strong>Linguistic</strong> — speech sounds, syntax, semantics; narrators and orators.</li>
        <li><strong>Musical</strong> — pitch, rhythm, sound; musicians and composers.</li>
        <li><strong>Logical-mathematical</strong> — abstract ideas; mathematicians and scientists.</li>
        <li><strong>Spatial</strong> — perceive, change and recreate visual images (translate, transform, rotate); map readers, astronauts, physicists.</li>
        <li>Other types commonly listed with Gardner (bodily-kinaesthetic, interpersonal, intrapersonal, naturalistic) may appear in extended notes — write only what the prescribed text emphasises if the question says “as per textbook”.</li>
      </ul>
    `
  },
  {
    id: "n7",
    title: "Applications of AI (exam wrap-up)",
    suggestSlides: [10],
    html: `
      <h2>Applications (write 6–8 points for 8–10 marks)</h2>
      <p class="cite">Drawn from Textbook Module 1 applications discussion. Use examples, not slogans.</p>
      <ul>
        <li>Natural language processing — chatbots, translation, voice assistants.</li>
        <li>Computer vision — object recognition, medical imaging, face recognition (still weaker than humans on emotion/face in early textbook remarks).</li>
        <li>Expert systems — medical diagnosis (historical Stanford blood-infection system).</li>
        <li>Autonomous vehicles — limited-memory AI with sensor history.</li>
        <li>Games — chess and similar search/learning systems.</li>
        <li>Recommendation and decision support — e-commerce, NITI Aayog productivity use-cases.</li>
        <li>Robotics and industrial automation — pattern finding, sorting, inspection.</li>
      </ul>
      <p>Computers already beat humans at sorting, computing, memorising, indexing and finding patterns; they lag on emotion, faces and free conversation — this is where AI research is aimed (Textbook §1.1).</p>
    `
  }
];

const QUESTIONS = [
  {
    id: "q1", paper: "SEE Model Paper A", marks: 2, module: "M1",
    text: "Define Artificial Intelligence as given by John McCarthy. (2 Marks)",
    keywords: ["mcCarthy", "science", "engineering", "intelligent machines", "computer programs", "programmes"],
    notes: ["n1"],
    model: "John McCarthy (2004) defined AI as the science and engineering of making intelligent machines, especially intelligent computer programmes. (Textbook §1.1)"
  },
  {
    id: "q2", paper: "SEE Model Paper A", marks: 2, module: "M1",
    text: "What is the Turing Test? (2 Marks)",
    keywords: ["turing", "1950", "interrogator", "distinguish", "computer", "human", "text"],
    notes: ["n1"],
    model: "Proposed by Alan Turing (1950): a human interrogator tries to distinguish a computer’s text responses from a human’s. If the interrogator cannot tell them apart, the machine is said to show intelligent behaviour. (Textbook §1.1)"
  },
  {
    id: "q3", paper: "SEE Model Paper A", marks: 6, module: "M1",
    text: "Explain how an AI system works. Mention the three cognitive skills of AI programming. (6 Marks)",
    keywords: ["labelled", "training data", "patterns", "correlations", "predictions", "learning", "reasoning", "self-correction", "chatbot"],
    notes: ["n2"],
    model: "AI needs large labelled training data; analysis finds patterns; patterns predict future states (chatbot example). Three skills: learning (data → rules/algorithms), reasoning (select algorithm), self-correction (refine algorithms). Cite Textbook §1.1.1 and Fig. 1.4/1.5."
  },
  {
    id: "q4", paper: "SEE Model Paper A", marks: 10, module: "M1",
    text: "Write a neat note on the history of Artificial Intelligence, highlighting the two AI winters. (10 Marks)",
    keywords: ["1950", "1956", "dartmouth", "samuel", "eliza", "prolog", "first ai winter", "darpa", "r1", "fgcs", "second ai winter", "1992", "1993"],
    notes: ["n3"],
    model: "Timeline from Turing 1950, Dartmouth 1956, Samuel 1959, Stanford lab 1963, ELIZA, expert systems 1969, PROLOG 1972, First Winter 1974–80 (DARPA cuts), DEC R1 1980, Japan FGCS 1982, Second Winter 1987–93 (FGCS ended 1992; US 1993). Use the table in notes; cite textbook timeline."
  },
  {
    id: "q5", paper: "SEE Model Paper B", marks: 2, module: "M1",
    text: "Differentiate ANI and AGI. (2 Marks)",
    keywords: ["narrow", "weak", "one task", "general", "strong", "human-level"],
    notes: ["n4"],
    model: "ANI (weak) specialises in one task. AGI (strong) aims at human-level performance across many tasks and is not yet realised. (Textbook §1.3)"
  },
  {
    id: "q6", paper: "SEE Model Paper B", marks: 6, module: "M1",
    text: "Explain the functionality-based types of AI. (6 Marks)",
    keywords: ["reactive", "limited memory", "theory of mind", "self-aware", "deep blue", "reinforcement", "lstm"],
    notes: ["n4"],
    model: "Reactive (no memory, e.g. Deep Blue); Limited memory (uses recent data; RL, LSTM, E-GAN); Theory of Mind (models others’ mental states — research); Self-aware (consciousness — theoretical). Cite Textbook §1.3."
  },
  {
    id: "q7", paper: "SEE Model Paper B", marks: 10, module: "M1",
    text: "Compare traditional programming with machine learning. Illustrate with a case study and a table. (10 Marks)",
    keywords: ["rules", "data", "model", "labels", "explicit", "amna", "table", "prediction", "ui"],
    notes: ["n5"],
    model: "Traditional: data + programme → output. ML: data + output → model. Table 1.2 (redrawn). Case: finding Amna’s photos. ML supplements, does not replace, conventional programming. Cite Textbook Table 1.2, Fig. 1.4, Fig. 1.5."
  },
  {
    id: "q8", paper: "SEE Model Paper C", marks: 2, module: "M1",
    text: "State NITI Aayog’s definition of AI. (2 Marks)",
    keywords: ["niti", "cognitive", "thinking", "perceiving", "learning", "problem solving", "decision"],
    notes: ["n1"],
    model: "AI is the ability of machines to perform cognitive tasks like thinking, perceiving, learning, problem solving and decision-making. (NITI Aayog National Strategy, Textbook §1.1)"
  },
  {
    id: "q9", paper: "SEE Model Paper C", marks: 6, module: "M1",
    text: "List and explain any four categories of intelligence given by Howard Gardner. (6 Marks)",
    keywords: ["linguistic", "musical", "logical", "spatial", "gardner"],
    notes: ["n6"],
    model: "Linguistic, musical, logical-mathematical, spatial — with one-line explanation each from Textbook §3.1."
  },
  {
    id: "q10", paper: "SEE Model Paper C", marks: 10, module: "M1",
    text: "What is AI? Discuss important applications of AI. (10 Marks)",
    keywords: ["mcCarthy", "turing", "nlp", "vision", "expert", "autonomous", "games", "chatbot", "niti"],
    notes: ["n1", "n7"],
    model: "Definition (McCarthy / layman / NITI) plus 6–8 applications with one example each. Cite Textbook §1.1 and applications section."
  },
  {
    id: "q11", paper: "CIE Quiz", marks: 2, module: "M1",
    text: "Name three languages popularly used to code AI applications. (2 Marks)",
    keywords: ["python", "java", "r"],
    notes: ["n1"],
    model: "R, Python and Java. (Textbook §1.1)"
  },
  {
    id: "q12", paper: "CIE Quiz", marks: 2, module: "M1",
    text: "What is meant by the First AI Winter? (2 Marks)",
    keywords: ["1974", "1980", "darpa", "funding", "grants"],
    notes: ["n3"],
    model: "Period 1974–1980 when DARPA cut academic grants and AI research stalled. (Textbook timeline)"
  }
];

const SLIDES = [
  { title: "1BAIA103 · Module 1", body: "<p>Introduction to Artificial Intelligence and its Applications</p><p>Class text and classroom presentation by <strong>Dr. Lokesh M R</strong>, Professor, Department of ISE, A J Institute of Engineering and Technology, Mangaluru (VTU, Belagavi).</p><p>Figures and tables cited from Module 1 Part A.</p>" },
  { title: "What is AI?", body: "<ul><li>McCarthy (2004): science and engineering of intelligent machines</li><li>Turing (1950): Can machines think? Turing Test</li><li>NITI Aayog: cognitive tasks — think, perceive, learn, decide</li><li>Languages: R, Python, Java</li></ul><p class='cite'>Textbook §1.1</p>" },
  { title: "How AI works", body: "<ul><li>Labelled training data</li><li>Discover correlations and patterns</li><li>Predict future states (chatbot example)</li><li>Skills: learning, reasoning, self-correction</li></ul><p class='cite'>Fig. 1.4, Fig. 1.5</p>" },
  { title: "History — early years", body: "<ul><li>1950 Turing · 1956 Dartmouth</li><li>1959 Samuel — machine learning</li><li>1963 Stanford AI Lab</li><li>ELIZA, 1969 expert system, 1972 PROLOG</li></ul>" },
  { title: "AI winters", body: "<ul><li>First winter 1974–1980 — DARPA cuts</li><li>1980 DEC R1 expert system</li><li>1982 Japan FGCS</li><li>Second winter 1987–1993 — FGCS ended 1992</li></ul>" },
  { title: "Types by capability", body: "<ul><li>ANI — narrow / weak</li><li>AGI — general / strong</li><li>ASI — super intelligence (hypothetical)</li></ul>" },
  { title: "Types by functionality", body: "<ol><li>Reactive machines</li><li>Limited memory (RL, LSTM, E-GAN)</li><li>Theory of Mind</li><li>Self-aware AI</li></ol>" },
  { title: "ML vs programming", body: "<p>Traditional: Data + Programme → Output</p><p>ML: Data + Output → Model</p><p>Case: finding Amna’s photos among 100 images</p><p class='cite'>Table 1.2</p>" },
  { title: "Table 1.2 (redrawn)", body: "<p>Programming: explicit rules, UI, visualisation.</p><p>ML: learns mapping, prediction, recognition.</p><p>They supplement each other; roles are not interchangeable.</p>" },
  { title: "Gardner’s intelligence", body: "<ul><li>Linguistic</li><li>Musical</li><li>Logical-mathematical</li><li>Spatial (translate, transform, rotate)</li></ul><p class='cite'>Textbook §3.1</p>" },
  { title: "Applications", body: "<ul><li>NLP and chatbots</li><li>Vision and medical imaging</li><li>Expert systems</li><li>Autonomous vehicles</li><li>Games and recommenders</li></ul>" },
  { title: "Exam tip", body: "<p>Define → classify → example → diagram/table → cite textbook section.</p><p>Write in Indian English, short sentences, underline keywords.</p>" }
];

const LECTURE = SLIDES.map((s, i) => ({
  title: s.title,
  speak: [
    "Welcome to the VTU Hub classroom lecture for course 1 B A I A 103, Module 1. This lecture follows the class text Introduction to Artificial Intelligence and its Applications, Module 1 Part A, authored by Doctor Lokesh M R, Professor of Information Science and Engineering at A J Institute of Engineering and Technology, Mangaluru, affiliated to V T U Belagavi.",
    "Artificial intelligence, as John McCarthy said in 2004, is the science and engineering of making intelligent machines. Turing in 1950 asked whether machines can think, and gave the Turing Test. NITI Aayog stresses cognitive tasks such as learning and decision making.",
    "An AI system is trained on labelled data, finds patterns, and predicts. Programming emphasises learning, reasoning and self-correction. Please see figures 1.4 and 1.5 in the textbook.",
    "Key dates: 1950 Turing, 1956 Dartmouth workshop, 1959 machine learning, Stanford lab, ELIZA, PROLOG.",
    "Remember the two AI winters: 1974 to 1980, and 1987 to 1993, when funding collapsed because results did not match the promises. Japan’s Fifth Generation project ended in 1992.",
    "By capability we have narrow, general and super intelligence. Today’s products are almost all narrow AI.",
    "By function: reactive machines, limited memory, theory of mind, and self-aware AI. Limited memory uses reinforcement learning, L S T M, and evolutionary G A N as listed in your book.",
    "Traditional programming writes rules. Machine learning infers rules from data. The Amna photograph case in the textbook shows why learning beats pixel-by-pixel coding.",
    "Table 1.2: programming and machine learning complement each other. Cite the table; do not copy it blindly in the answer booklet.",
    "Howard Gardner listed linguistic, musical, logical-mathematical and spatial intelligence, among others. Spatial intelligence includes translating, transforming and rotating images.",
    "Applications for ten-mark answers: language, vision, expert systems, vehicles, games and recommenders. Always add one Indian or classroom example.",
    "For the VTU paper: define, classify, give an example, sketch the figure, and cite the textbook section. All the best."
  ][i]
}));
