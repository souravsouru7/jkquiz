export const quizData = [
  {
    question: "Which software is commonly used for 2D interior design drafting?",
    options: [
      "AutoCAD",
      "Maya",
      "Blender",
      "SketchUp"
    ],
    correctAnswer: 0,
    explanation: "AutoCAD is the industry standard for 2D drafting and technical drawings in interior design."
  },
  {
    question: "What is SketchUp primarily used for in interior design?",
    options: [
      "Creating detailed construction documents",
      "Quick 3D modeling and visualization",
      "Rendering photorealistic images",
      "Managing project timelines"
    ],
    correctAnswer: 1,
    explanation: "SketchUp is known for its user-friendly interface and quick 3D modeling capabilities."
  },
  {
    question: "Which software is best for creating photorealistic interior renderings?",
    options: [
      "AutoCAD",
      "3ds Max with V-Ray",
      "Microsoft Paint",
      "Adobe Photoshop"
    ],
    correctAnswer: 1,
    explanation: "3ds Max with V-Ray is widely used for creating high-quality photorealistic renderings."
  },
  {
    question: "What is the main purpose of Revit in interior design?",
    options: [
      "Creating 2D floor plans only",
      "Building Information Modeling (BIM)",
      "Digital painting",
      "Video editing"
    ],
    correctAnswer: 1,
    explanation: "Revit is a BIM software that allows for intelligent 3D modeling with detailed information."
  },
  {
    question: "Which tool is commonly used for creating mood boards in interior design?",
    options: [
      "AutoCAD",
      "Pinterest",
      "3ds Max",
      "SketchUp"
    ],
    correctAnswer: 1,
    explanation: "Pinterest is widely used for creating and organizing mood boards and design inspiration."
  },
  {
    question: "What is the primary use of Lumion in interior design?",
    options: [
      "Creating floor plans",
      "Real-time 3D visualization and rendering",
      "Cost estimation",
      "Project scheduling"
    ],
    correctAnswer: 1,
    explanation: "Lumion specializes in real-time 3D visualization and quick rendering capabilities."
  },
  {
    question: "Which software is best for creating detailed furniture models?",
    options: [
      "Microsoft Word",
      "3ds Max",
      "Adobe Illustrator",
      "Excel"
    ],
    correctAnswer: 1,
    explanation: "3ds Max is ideal for creating detailed 3D furniture models with precise measurements."
  },
  {
    question: "What is the main advantage of using Rhino in interior design?",
    options: [
      "Project management",
      "Precise 3D modeling with NURBS",
      "Video editing",
      "Audio recording"
    ],
    correctAnswer: 1,
    explanation: "Rhino excels in precise 3D modeling using NURBS (Non-Uniform Rational B-Splines)."
  },
  {
    question: "Which tool is commonly used for creating interior design presentations?",
    options: [
      "AutoCAD",
      "Adobe InDesign",
      "3ds Max",
      "SketchUp"
    ],
    correctAnswer: 1,
    explanation: "Adobe InDesign is perfect for creating professional design presentations and portfolios."
  },
  {
    question: "What is the primary use of Enscape in interior design?",
    options: [
      "Creating 2D drawings",
      "Real-time rendering and virtual reality",
      "Cost calculation",
      "Project timeline management"
    ],
    correctAnswer: 1,
    explanation: "Enscape provides real-time rendering and VR capabilities for immersive design experiences."
  },
  {
    question: "Which software is best for creating walkthrough animations in interior design?",
    options: [
      "Microsoft Excel",
      "3ds Max with V-Ray",
      "Adobe Photoshop",
      "AutoCAD"
    ],
    correctAnswer: 1,
    explanation: "3ds Max with V-Ray is excellent for creating high-quality walkthrough animations."
  },
  {
    question: "What is the main purpose of Blender in interior design?",
    options: [
      "Project management",
      "Free 3D modeling and animation",
      "Cost estimation",
      "Documentation"
    ],
    correctAnswer: 1,
    explanation: "Blender is a powerful free software for 3D modeling, animation, and rendering."
  },
  {
    question: "Which tool is best for creating material animations in interior design?",
    options: [
      "Microsoft Word",
      "Substance Designer",
      "Adobe Illustrator",
      "Excel"
    ],
    correctAnswer: 1,
    explanation: "Substance Designer is specialized in creating and animating materials and textures."
  },
  {
    question: "What is the primary use of Maya in interior design?",
    options: [
      "Creating floor plans",
      "Advanced 3D modeling and animation",
      "Cost calculation",
      "Project scheduling"
    ],
    correctAnswer: 1,
    explanation: "Maya is known for its advanced 3D modeling and animation capabilities."
  },
  {
    question: "Which software is best for creating interactive 3D presentations?",
    options: [
      "AutoCAD",
      "Unity",
      "Adobe Photoshop",
      "Microsoft Word"
    ],
    correctAnswer: 1,
    explanation: "Unity is excellent for creating interactive 3D presentations and virtual experiences."
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