export const qs = [
  {
    prompt: "With what technique can partial differential equations be solved in which all dimensions except one are represented?",
    answers: ["A. finite element method", "B. gradient discretization method", "C. spectral method", "D. method of lines"],
    correct: 'D',
    topic: "Method of lines",
    index: 0
  },
  {
    prompt: "What have some integration routines consisting of method of lines been published as?",
    answers: ["A. closed source resources", "B. open source resources", "C. ", "D. "],
    correct: 'B',
    topic: "Method of lines",
    index: 1
  },
  {
    prompt: "What does the method of lines most often refer to?",
    answers: ["A. construction or analysis of numerical methods for partial differential equations by leaving both the space and time variables continuous", "B. construction or analysis of numerical methods for partial differential equations by discretizing both the time and space variables", "C. construction or analysis of numerical methods for partial differential equations by leaving the space variable continuous", "D. construction or analysis of numerical methods for partial differential equations by leaving the time variable continuous"],
    correct: 'D',
    topic: "Method of lines",
    index: 2
  },
  {
    prompt: "Which algorithm is used to solve certain differential equations using spectral methods?",
    answers: ["A. Goertzel algorithm", "B. Odlyzko–Schönhage algorithm", "C. Schönhage–Strassen algorithm", "D. fast Fourier transform"],
    correct: 'D',
    topic: "Spectral method",
    index: 3
  },
  {
    prompt: "What are two areas in which spectral methods are used?",
    answers: ["A. applied mathematics and biology", "B. scientific computing and biology", "C. scientific computing and applied mathematics", "D. applied mathematics and physics"],
    correct: 'C',
    topic: "Spectral method",
    index: 4
  },
  {
    prompt: "Spectral methods and which other type of method are closely related to each other?",
    answers: ["A. finite volume methods", "B. meshfree methods", "C. multigrid methods", "D. finite element methods"],
    correct: 'D',
    topic: "Spectral method",
    index: 5
  },
  {
    prompt: "Which of these groups of methods include only overlapping domain decomposition methods?"
    answers: ["A. Schwarz alternating method and additive Schwarz method", "B. abstract additive Schwarz method and Schwarz alternating method", "C. Schwarz method and BDDC", "D. Feti-DP and Lagrange multipliers"] 
    correct: 'A'
    topic: "Domain decomposition methods"
    index: 6
  },
  {
    prompt: "What happens to subdomains in non-overlapping domain decomposition methods?"
    answers: ["A. they overlap by more than just their interface", "B. they intersect only on their interface", "C. nothing happens to them", "D. they intersect using the GMRES"]
    correct: 'B'
    topic: "Domain decomposition methods"
    index: 7
  },
  {
    prompt: "What is another name for non-overlapping domain decomposition methods?"
    answers: ["A. additive Schwarz method", "B. abstract method", "C. iterative substructuring methods", "D. domain decomposition methods"]
    correct: 'C'
    topic: "Domain decomposition methods"
    index: 8
  }
]
