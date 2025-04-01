export const quizData = [
  {
    question: "What is the main purpose of DevOps?",
    options: [
      "To separate development and operations teams",
      "To automate and improve the collaboration between development and operations",
      "To replace traditional software development methods",
      "To eliminate the need for testing"
    ],
    correctAnswer: 1
  },
  {
    question: "Which of the following is NOT a core principle of DevOps?",
    options: [
      "Continuous Integration",
      "Continuous Deployment",
      "Manual Testing",
      "Infrastructure as Code"
    ],
    correctAnswer: 2
  },
  {
    question: "What is the purpose of Docker?",
    options: [
      "To write code faster",
      "To containerize applications and their dependencies",
      "To replace virtual machines completely",
      "To manage database operations"
    ],
    correctAnswer: 1
  },
  {
    question: "Which tool is commonly used for Continuous Integration?",
    options: [
      "GitHub",
      "Jenkins",
      "Docker",
      "Kubernetes"
    ],
    correctAnswer: 1
  },
  {
    question: "What is Kubernetes?",
    options: [
      "A programming language",
      "A container orchestration platform",
      "A database management system",
      "A web server"
    ],
    correctAnswer: 1
  },
  {
    question: "What is the purpose of Git?",
    options: [
      "To deploy applications",
      "To manage source code and version control",
      "To run applications",
      "To test applications"
    ],
    correctAnswer: 1
  },
  {
    question: "Which of these is a popular Infrastructure as Code tool?",
    options: [
      "Docker",
      "Terraform",
      "Jenkins",
      "GitHub"
    ],
    correctAnswer: 1
  },
  {
    question: "What is the main benefit of Microservices architecture?",
    options: [
      "Reduced development time",
      "Better scalability and maintainability",
      "Lower costs",
      "Simpler deployment"
    ],
    correctAnswer: 1
  },
  {
    question: "What is the purpose of a Docker Compose file?",
    options: [
      "To write Docker applications",
      "To define and run multi-container Docker applications",
      "To test Docker containers",
      "To deploy Docker containers"
    ],
    correctAnswer: 1
  },
  {
    question: "Which of these is NOT a monitoring tool?",
    options: [
      "Prometheus",
      "Grafana",
      "Docker",
      "ELK Stack"
    ],
    correctAnswer: 2
  },
  {
    question: "What is the purpose of Ansible?",
    options: [
      "To write code",
      "To automate software deployment and configuration management",
      "To test applications",
      "To deploy containers"
    ],
    correctAnswer: 1
  },
  {
    question: "What is the main purpose of a CI/CD pipeline?",
    options: [
      "To write code faster",
      "To automate the process of building, testing, and deploying software",
      "To manage databases",
      "To monitor applications"
    ],
    correctAnswer: 1
  },
  {
    question: "Which of these is a popular container registry?",
    options: [
      "GitHub",
      "Docker Hub",
      "Jenkins",
      "Kubernetes"
    ],
    correctAnswer: 1
  },
  {
    question: "What is the purpose of a Dockerfile?",
    options: [
      "To write Docker applications",
      "To define the steps to create a Docker image",
      "To run Docker containers",
      "To test Docker applications"
    ],
    correctAnswer: 1
  },
  {
    question: "Which of these is NOT a benefit of containerization?",
    options: [
      "Consistency across environments",
      "Isolation of applications",
      "Increased development time",
      "Easy scaling"
    ],
    correctAnswer: 2
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