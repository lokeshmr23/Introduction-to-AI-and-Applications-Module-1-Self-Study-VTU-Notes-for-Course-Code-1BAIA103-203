/* Module 1 notes paraphrased from Module1_Notes v3 (search & environments). Cite figures/tables. */
const COURSE = {
  code: "1BAIA103",
  title: "Introduction to Artificial Intelligence and its Applications",
  module: "Module 1 — Environments and Search",
  source: "Class notes Module1_Notes v3 (Dr. Lokesh M R). Figures redrawn and cited."
};

const NOTES = [
  {
    id: "n1",
    title: "3.4 Episodic and sequential environments",
    suggestSlides: [1],
    html: `
      <h2>Episodic versus sequential (non-episodic) environments</h2>
      <p class="cite">Paraphrased from Module1_Notes v3, around Fig. 3.12. Use your own wording in the answer booklet.</p>
      <p>In an <strong>episodic</strong> environment the agent’s experience is split into independent episodes. Each episode is a one-shot action based only on the <em>current percept</em>. The agent need not think ahead, so the problem is simpler.</p>
      <p>In a <strong>sequential</strong> (non-episodic) environment the current decision can affect all future decisions. The agent needs <strong>memory</strong> of past actions to choose the next best action.</p>
      <div class="fig">
        <svg viewBox="0 0 640 180" xmlns="http://www.w3.org/2000/svg">
          <rect x="40" y="30" width="120" height="50" rx="8" fill="#99f6e4"/><text x="100" y="60" text-anchor="middle" font-size="13">Episode 1</text>
          <rect x="40" y="95" width="120" height="50" rx="8" fill="#99f6e4"/><text x="100" y="125" text-anchor="middle" font-size="13">Episode 2</text>
          <text x="280" y="90" font-size="14">Agent's experience</text>
          <rect x="460" y="55" width="140" height="55" rx="8" fill="#fda4af"/><text x="530" y="88" text-anchor="middle" font-size="14">Environment</text>
        </svg>
        <div class="figcaption">Fig. 3.12 (redrawn): episodic / non-episodic environment. Cite Textbook Fig. 3.12.</div>
      </div>
    `
  },
  {
    id: "n2",
    title: "3.5 Search problem and types of algorithms",
    suggestSlides: [2, 3],
    html: `
      <h2>3.5 Search</h2>
      <p class="cite">Module1_Notes v3 §3.5 and Fig. 3.13.</p>
      <p>Artificial intelligence studies the building of <strong>rational agents</strong>. Agents use search algorithms to reach a goal (tile games, Sudoku, crossword, and so on).</p>
      <p><strong>A search problem consists of:</strong></p>
      <ol>
        <li><strong>State space</strong> — all states the agent can reach.</li>
        <li><strong>Start state</strong> — where searching begins.</li>
        <li><strong>Goal test</strong> — a function that checks whether the current state is a goal.</li>
        <li><strong>Solution (plan)</strong> — a sequence of actions from start to goal, found by a search algorithm.</li>
      </ol>
      <p>Also remember: <em>problem graph</em> (S to G), <em>strategy</em>, <em>fringe</em> (nodes reachable from the current state), <em>tree</em>, <em>solution plan</em>, and <em>path/step cost</em>.</p>
      <h3>3.5.1 Types (Fig. 3.13)</h3>
      <ul>
        <li><strong>Uninformed (blind):</strong> Depth-first, Breadth-first, Uniform-cost.</li>
        <li><strong>Informed (heuristic):</strong> Greedy search, A* search, Graph search.</li>
      </ul>
      <div class="fig">
        <svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg">
          <rect x="220" y="8" width="240" height="36" rx="8" fill="#166534"/><text x="340" y="32" text-anchor="middle" fill="#fff" font-size="14">Search algorithms</text>
          <rect x="40" y="80" width="200" height="32" rx="6" fill="#86efac"/><text x="140" y="101" text-anchor="middle" font-size="13">Uninformed</text>
          <rect x="440" y="80" width="200" height="32" rx="6" fill="#86efac"/><text x="540" y="101" text-anchor="middle" font-size="13">Informed</text>
          <text x="140" y="150" text-anchor="middle" font-size="12">DFS · BFS · UCS</text>
          <text x="540" y="150" text-anchor="middle" font-size="12">Greedy · A* · Graph</text>
        </svg>
        <div class="figcaption">Fig. 3.13 (redrawn): types of search algorithms.</div>
      </div>
      <h3>3.5.2 Properties</h3>
      <ol>
        <li><strong>Completeness</strong> — returns at least one solution when a solution exists.</li>
        <li><strong>Optimality</strong> — the solution has the lowest path cost.</li>
        <li><strong>Time and space complexity</strong> — time to finish; extra memory needed. A good algorithm uses less of both.</li>
      </ol>
    `
  },
  {
    id: "n3",
    title: "3.6 Uninformed search · DFS",
    suggestSlides: [4, 5],
    html: `
      <h2>3.6 Uninformed (blind) search · 3.6.1 DFS</h2>
      <p class="cite">Module1_Notes v3 §3.6.1, Fig. 3.14. Formulae cited from the notes.</p>
      <p>An uninformed search has <strong>no extra information</strong> about the goal beyond the problem definition. It only knows how to visit nodes. DFS goes as deep as possible along one branch, then backtracks (LIFO / stack).</p>
      <p>In Fig. 3.14 the order is A → B → D → H, backtrack to E → I, then J, then the other side C → F → K → G.</p>
      <p><strong>Example path:</strong> S → A → B → C → G. Graph example: 0 → 1 → 2 → 4 → 3.</p>
      <div class="formula">Time: O(b<sup>m</sup>) &nbsp;&nbsp; Space (fringe): O(bm)<br/>
      b = branching factor, m = maximum depth, d = depth of least-cost solution</div>
      <p>DFS is <strong>complete</strong> if the tree is finite, but <strong>not optimal</strong>.</p>
      <p><strong>Advantages:</strong> stores only the current path (less memory than BFS); may reach a deep goal faster than BFS.</p>
    `
  },
  {
    id: "n4",
    title: "Depth-limited search (DLS)",
    suggestSlides: [6],
    html: `
      <h2>3.6.2 Depth-limited search (DLS)</h2>
      <p class="cite">Fig. 3.15, Module1_Notes v3.</p>
      <p>DLS is DFS with a <strong>depth limit ℓ</strong>. Nodes deeper than ℓ are not expanded. Fig. 3.15 shows levels 0–3; a node such as J at the limit is not expanded further.</p>
      <p><strong>Advantages:</strong> memory-efficient, finishes in finite time.</p>
      <p><strong>Disadvantages:</strong> incomplete if the goal lies below the limit; not optimal even if ℓ &gt; d.</p>
      <p><strong>Example:</strong> search node H with limit 2 — H at depth 3 will be missed.</p>
    `
  },
  {
    id: "n5",
    title: "Breadth-first search (BFS)",
    suggestSlides: [7, 8],
    html: `
      <h2>3.6.3 Breadth-first search (BFS)</h2>
      <p class="cite">Fig. 3.16 and queue example, Module1_Notes v3.</p>
      <p>BFS expands all neighbours at the present depth before going deeper. It uses a <strong>FIFO queue</strong>. From root A it visits B then C, then D–G, then H–K.</p>
      <div class="formula">Nodes on a BFS path = depth of the shallowest solution = nodes on that level.</div>
      <p><strong>Applications (notes):</strong> crawlers in search engines; GPS neighbouring locations; shortest path on an <em>unweighted</em> graph; spanning tree.</p>
    `
  },
  {
    id: "n6",
    title: "Uniform-cost search (UCS)",
    suggestSlides: [9],
    html: `
      <h2>Uniform-cost search (UCS)</h2>
      <p class="cite">Fig. 3.18, Module1_Notes v3. cost(root) = 0.</p>
      <p>UCS expands the node with the <strong>lowest path cost from the root</strong> (priority queue). If every edge has the same cost, UCS behaves like BFS.</p>
      <p>It is <strong>complete and optimal</strong>.</p>
      <div class="formula">Time and space: O(b<sup>(C*/ε)</sup>) &nbsp; where ε is the smallest step cost and C* (c) is the optimal path cost.</div>
      <p class="cite">Write the formula as in Fig. 3.18 discussion of the notes. Do not copy the printed paragraph verbatim.</p>
    `
  },
  {
    id: "n7",
    title: "IDDFS and bidirectional search",
    suggestSlides: [10, 11],
    html: `
      <h2>Iterative deepening DFS (IDDFS) and bidirectional search</h2>
      <p class="cite">Module1_Notes v3 §3.6.6 and IDDFS example table.</p>
      <p><strong>IDDFS</strong> repeats DLS with limit 0, 1, 2, … until the goal is found. It takes the speed of BFS and the memory of DFS. Useful when the search space is large and the goal depth is unknown.</p>
      <p><strong>Advantages:</strong> complete if branching factor is finite; optimal if path cost does not decrease with depth.</p>
      <p><strong>Disadvantages:</strong> repeats earlier work; exponential time; fails when BFS would fail.</p>
      <p><strong>Bidirectional search</strong> runs forward from the start and backward from the goal until the two frontiers meet. Each side searches about half the path. Complexity cited in the notes: O(b<sup>d/2</sup> + b<sup>d/2</sup>), much less than O(b<sup>d</sup>).</p>
      <p>Needs a clearly known goal; intersection of the two searches must be detected carefully.</p>
    `
  },
  {
    id: "n8",
    title: "3.7 Informed search, greedy BFS and A*",
    suggestSlides: [12, 13],
    html: `
      <h2>3.7 Informed (heuristic) search · Greedy BFS · A*</h2>
      <p class="cite">Module1_Notes v3 §3.7, §3.7.3 and Fig. 3.19.</p>
      <p>Informed search uses extra knowledge such as “how far is the goal?”. A <strong>heuristic</strong> h(n) estimates the cost of an optimal path from n to a goal. The notes require</p>
      <div class="formula">h(n) ≤ h*(n) &nbsp;&nbsp; (heuristic cost ≤ true estimated optimal cost; h is positive)</div>
      <h3>Greedy best-first search</h3>
      <p>Always expand the node with smallest h(n) (priority queue; OPEN / CLOSED lists). Example path in the notes: S → B → F → G. Complexity O(b<sup>m</sup>).</p>
      <h3>A* search</h3>
      <p>A* is the best-known best-first method. It uses</p>
      <div class="formula">f(n) = g(n) + h(n)<br/>g(n) = cost from start to n &nbsp;&nbsp; h(n) = heuristic to goal</div>
      <p>A* expands the most promising (lowest f) paths and avoids already-expensive paths. Cite Fig. 3.19.</p>
    `
  }
];

const QUESTIONS = [
  { id: "q1", paper: "SEE Model A", marks: 2, module: "M1",
    text: "Differentiate episodic and sequential environments. (2 Marks)",
    keywords: ["episodic", "current percept", "sequential", "memory", "future"],
    notes: ["n1"], model: "Episodic: independent one-shot actions from the current percept. Sequential: current choice affects future decisions; memory is needed. Cite Fig. 3.12." },
  { id: "q2", paper: "SEE Model A", marks: 6, module: "M1",
    text: "What is a search problem? List its components. (6 Marks)",
    keywords: ["state space", "start state", "goal test", "solution", "plan", "fringe", "path cost"],
    notes: ["n2"], model: "State space, start state, goal test, solution/plan. Also fringe, strategy, step cost. Agents are rational. Cite §3.5." },
  { id: "q3", paper: "SEE Model A", marks: 10, module: "M1",
    text: "Explain the types of search algorithms with a neat diagram. State the properties of a search algorithm. (10 Marks)",
    keywords: ["uninformed", "informed", "dfs", "bfs", "ucs", "greedy", "a*", "completeness", "optimality", "complexity"],
    notes: ["n2"], model: "Draw Fig. 3.13. Uninformed: DFS, BFS, UCS. Informed: greedy, A*, graph search. Properties: completeness, optimality, time and space complexity." },
  { id: "q4", paper: "SEE Model B", marks: 2, module: "M1",
    text: "Write the time and space complexity of DFS. (2 Marks)",
    keywords: ["o(b", "branching", "depth", "fringe", "stack"],
    notes: ["n3"], model: "Time O(b^m), space O(bm). Stack / LIFO. Cite Fig. 3.14 notes." },
  { id: "q5", paper: "SEE Model B", marks: 6, module: "M1",
    text: "Explain Depth First Search with an example. List two advantages. (6 Marks)",
    keywords: ["backtrack", "leaf", "stack", "lifo", "not optimal", "complete"],
    notes: ["n3"], model: "Deepen one branch then backtrack. Example S-A-B-C-G or 0-1-2-4-3. Complete if finite tree; not optimal. Less memory than BFS." },
  { id: "q6", paper: "SEE Model B", marks: 10, module: "M1",
    text: "Compare BFS and DFS. Mention applications of BFS. (10 Marks)",
    keywords: ["queue", "stack", "level", "crawler", "gps", "shortest", "unweighted"],
    notes: ["n3", "n5"], model: "BFS: queue, level by level, shallowest goal. DFS: stack, deep first. BFS applications: crawlers, GPS neighbours, unweighted shortest path. Cite Fig. 3.16." },
  { id: "q7", paper: "SEE Model C", marks: 2, module: "M1",
    text: "Define heuristic function h(n). (2 Marks)",
    keywords: ["heuristic", "h(n)", "goal", "estimate", "optimal"],
    notes: ["n8"], model: "h(n) estimates cost of an optimal path from n to a goal; h(n) ≤ h*(n). Cite §3.7." },
  { id: "q8", paper: "SEE Model C", marks: 6, module: "M1",
    text: "Explain uniform-cost search. Write its complexity. (6 Marks)",
    keywords: ["path cost", "priority queue", "optimal", "complete", "bfs"],
    notes: ["n6"], model: "Expand lowest g-cost node. Priority queue. Complete and optimal. Equals BFS if all edge costs equal. O(b^(C*/ε)). Fig. 3.18." },
  { id: "q9", paper: "SEE Model C", marks: 10, module: "M1",
    text: "Explain A* search algorithm. How is it different from greedy best-first search? (10 Marks)",
    keywords: ["f(n)", "g(n)", "h(n)", "open", "closed", "optimal", "greedy"],
    notes: ["n8"], model: "Greedy uses only h(n). A* uses f = g + h (Fig. 3.19). A* expands promising low-f paths. Write OPEN/CLOSED idea from the notes." },
  { id: "q10", paper: "CIE Quiz", marks: 2, module: "M1",
    text: "Why is depth-limited search incomplete? (2 Marks)",
    keywords: ["limit", "incomplete", "goal", "depth"],
    notes: ["n4"], model: "If the goal is deeper than limit ℓ, DLS never expands it. Fig. 3.15." },
  { id: "q11", paper: "CIE Quiz", marks: 6, module: "M1",
    text: "Write a short note on iterative deepening DFS and bidirectional search. (6 Marks)",
    keywords: ["iddfs", "limit", "bidirectional", "forward", "backward", "meet"],
    notes: ["n7"], model: "IDDFS: DLS with increasing limit. Bidirectional: search both ends till they meet. Complexity O(b^{d/2}+b^{d/2})." },
  { id: "q12", paper: "CIE Quiz", marks: 2, module: "M1",
    text: "Name three uninformed and three informed search algorithms. (2 Marks)",
    keywords: ["dfs", "bfs", "uniform", "greedy", "a*", "graph"],
    notes: ["n2"], model: "Uninformed: DFS, BFS, UCS. Informed: greedy, A*, graph search. Fig. 3.13." }
];

const SLIDES = [
  { title: "1BAIA103 · Module 1 · Search", body: "<p>Environments and search algorithms</p><p>Class notes: Module1_Notes v3 · Dr. Lokesh M R · VTU Belagavi</p><p>Figures 3.12–3.19 cited and redrawn.</p>" },
  { title: "Episodic vs sequential", body: "<ul><li>Episodic: one-shot action; only current percept</li><li>Sequential: memory; today’s choice affects the future</li></ul><p class='cite'>Fig. 3.12</p>" },
  { title: "Parts of a search problem", body: "<ol><li>State space</li><li>Start state</li><li>Goal test</li><li>Solution / plan</li></ol><p>Also: fringe, strategy, path cost.</p>" },
  { title: "Fig. 3.13 Types of search", body: "<p><strong>Uninformed:</strong> DFS, BFS, UCS</p><p><strong>Informed:</strong> Greedy, A*, Graph search</p><p>Properties: completeness, optimality, time &amp; space complexity.</p>" },
  { title: "DFS idea", body: "<p>Go deep, then backtrack. Data structure: stack (LIFO).</p><p>Example: S → A → B → C → G</p><p class='cite'>Fig. 3.14</p>" },
  { title: "DFS complexity", body: "<p>Time O(b<sup>m</sup>) · Space O(bm)</p><p>Complete if the tree is finite · Not optimal</p>" },
  { title: "Depth-limited search", body: "<p>DFS with limit ℓ. Fig. 3.15</p><p>Incomplete if goal is below the limit. Not optimal.</p>" },
  { title: "BFS", body: "<p>Level by level. Queue (FIFO). Fig. 3.16</p><p>Shallowest goal first.</p>" },
  { title: "BFS applications", body: "<ul><li>Search-engine crawlers</li><li>GPS neighbouring places</li><li>Shortest path on unweighted graphs</li></ul>" },
  { title: "Uniform-cost search", body: "<p>Expand lowest path cost. Priority queue.</p><p>Complete and optimal. Fig. 3.18</p><p>O(b<sup>C*/ε</sup>)</p>" },
  { title: "IDDFS", body: "<p>DLS with limit 0, 1, 2, …</p><p>Memory of DFS + shallow-goal behaviour of BFS.</p>" },
  { title: "Bidirectional search", body: "<p>Forward from start + backward from goal until they meet.</p><p>O(b<sup>d/2</sup> + b<sup>d/2</sup>) vs O(b<sup>d</sup>)</p>" },
  { title: "Informed search &amp; greedy", body: "<p>h(n) ≤ h*(n)</p><p>Greedy: expand smallest h(n). OPEN / CLOSED.</p><p>Example: S → B → F → G</p>" },
  { title: "A* algorithm", body: "<p>f(n) = g(n) + h(n)</p><p>g = cost from start · h = heuristic to goal</p><p>Cite Fig. 3.19. Best-known best-first search.</p>" }
];

const LECTURE = [
  { title: SLIDES[0].title, speak: "Welcome to the Module 1 lecture on environments and search, following Module 1 Notes version 3 by Doctor Lokesh M R, for V T U Belagavi. We shall cite figures 3.12 to 3.19 from the class notes." },
  { title: SLIDES[1].title, speak: "An episodic environment uses only the current percept and a one-shot action. A sequential environment needs memory, because the present decision can change every future decision. Please see figure 3.12." },
  { title: SLIDES[2].title, speak: "A search problem has a state space, a start state, a goal test, and a solution plan. The fringe stores reachable nodes. Path or step cost is the cost of an action." },
  { title: SLIDES[3].title, speak: "Figure 3.13 splits search into uninformed algorithms — depth first, breadth first and uniform cost — and informed algorithms — greedy, A star and graph search. Judge them by completeness, optimality, and time and space complexity." },
  { title: SLIDES[4].title, speak: "Depth first search goes to a leaf, then backtracks. It uses a stack, that is last in first out. In figure 3.14 the order begins A, B, D, H. An example path is S, A, B, C, G." },
  { title: SLIDES[5].title, speak: "Time complexity of depth first search is O of b to the m. Space is O of b m, the size of the fringe. It is complete on a finite tree, but it is not optimal." },
  { title: SLIDES[6].title, speak: "Depth limited search is depth first search with a limit L. Figure 3.15. If the goal lies deeper than the limit, the algorithm is incomplete. It is also not optimal." },
  { title: SLIDES[7].title, speak: "Breadth first search visits every node at the present depth before going deeper. It uses a queue. Figure 3.16. The shallowest goal is found first." },
  { title: SLIDES[8].title, speak: "Applications of breadth first search in the notes include web crawlers, G P S neighbouring locations, and the shortest path on an unweighted graph." },
  { title: SLIDES[9].title, speak: "Uniform cost search expands the cheapest path from the root using a priority queue. Figure 3.18. It is complete and optimal. If every edge has the same cost, it behaves like breadth first search." },
  { title: SLIDES[10].title, speak: "Iterative deepening repeats depth limited search with limits 0, 1, 2 and so on. It keeps the small memory of depth first search and the shallow-goal behaviour of breadth first search." },
  { title: SLIDES[11].title, speak: "Bidirectional search runs forward from the start and backward from the goal until the two sides meet. Each side covers about half the path. The notes give complexity O of b to the d by 2 plus b to the d by 2." },
  { title: SLIDES[12].title, speak: "Informed search uses a heuristic h of n, which must be at most h star of n. Greedy best first search always expands the node with smallest h of n. An example path in the notes is S, B, F, G." },
  { title: SLIDES[13].title, speak: "A star uses f of n equals g of n plus h of n. g is the cost from the start. h is the heuristic to the goal. See figure 3.19. This is the most important ten mark algorithm in this module. Thank you." }
];
