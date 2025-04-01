export const quizData = [
  {
    question: "Which software is commonly used for 2D interior design drafting?",
    options: [
      "AutoCAD",
      "Maya",
      "Blender",
      "SketchUp"
    ],
    correctAnswer: 0
  },
  {
    question: "What is SketchUp primarily used for in interior design?",
    options: [
      "Creating detailed construction documents",
      "Quick 3D modeling and visualization",
      "Rendering photorealistic images",
      "Managing project timelines"
    ],
    correctAnswer: 1
  },
  {
    question: "Which software is best for creating photorealistic interior renderings?",
    options: [
      "AutoCAD",
      "3ds Max with V-Ray",
      "Microsoft Paint",
      "Adobe Photoshop"
    ],
    correctAnswer: 1
  },
  {
    question: "What is the main purpose of Revit in interior design?",
    options: [
      "Creating 2D floor plans only",
      "Building Information Modeling (BIM)",
      "Digital painting",
      "Video editing"
    ],
    correctAnswer: 1
  },
  {
    question: "Which tool is commonly used for creating mood boards in interior design?",
    options: [
      "AutoCAD",
      "Pinterest",
      "3ds Max",
      "SketchUp"
    ],
    correctAnswer: 1
  },
  {
    question: "What is the primary use of Lumion in interior design?",
    options: [
      "Creating floor plans",
      "Real-time 3D visualization and rendering",
      "Cost estimation",
      "Project scheduling"
    ],
    correctAnswer: 1
  },
  {
    question: "Which software is best for creating detailed furniture models?",
    options: [
      "Microsoft Word",
      "3ds Max",
      "Adobe Illustrator",
      "Excel"
    ],
    correctAnswer: 1
  },
  {
    question: "What is the main advantage of using Rhino in interior design?",
    options: [
      "Project management",
      "Precise 3D modeling with NURBS",
      "Video editing",
      "Audio recording"
    ],
    correctAnswer: 1
  },
  {
    question: "Which tool is commonly used for creating interior design presentations?",
    options: [
      "AutoCAD",
      "Adobe InDesign",
      "3ds Max",
      "SketchUp"
    ],
    correctAnswer: 1
  },
  {
    question: "What is the primary use of Enscape in interior design?",
    options: [
      "Creating 2D drawings",
      "Real-time rendering and virtual reality",
      "Cost calculation",
      "Project timeline management"
    ],
    correctAnswer: 1
  }
];

export const calculateGrade = (score, totalQuestions) => {
  const percentage = (score / totalQuestions) * 100;
  if (percentage >= 90) return 'A';
  if (percentage >= 80) return 'B';
  if (percentage >= 70) return 'C';
  if (percentage >= 60) return 'D';
  return 'F';
}; 