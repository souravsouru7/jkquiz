export const teluguMovieQuizData = [
  {
    question: "In which movie does the protagonist say 'Manishi Puttaka Mundu Emi Ledu, Poyaka Taruvatha Emi Vundadu' but later contradicts his own philosophy?",
    options: [
      "Prasthanam",
      "Leader",
      "Vedam",
      "Gamyam"
    ],
    correctAnswer: 0,
    explanation: "In Prasthanam, the character later realizes the impact of his actions on future generations, contradicting his initial philosophy."
  },
  {
    question: "Complete this tricky dialogue: 'Prema Lo Paddanu Ante Easy... Kani _______ Ante Kastam'",
    options: [
      "Prema Lo Levadam",
      "Prema Nunchi Bayata Padadam",
      "Prema Lo Gelavadam",
      "Prema Lo Undipovdam"
    ],
    correctAnswer: 1,
    explanation: "This philosophical dialogue about love's complexity is often misquoted."
  },
  {
    question: "Which dialogue was actually said by a supporting character but is often misattributed to the hero?",
    options: [
      "'Nuvvu Nenu Okatai Povalani Ledu'",
      "'Manasuni Dochukunna Daonga'",
      "'Prathi Thappuku Oka Nyayam Untundi'",
      "'Prema Kosam Preminchavu'"
    ],
    correctAnswer: 2,
    explanation: "This dialogue is often misattributed to the hero but was actually delivered by a supporting character."
  },
  {
    question: "Which of these dialogues has a different meaning when translated to English versus its Telugu context?",
    options: [
      "'Naa Daggara Dabbu Ledu'",
      "'Manishi Bathakali Ante Ardham Undi'",
      "'Nuvvu Thaggaku'",
      "'Nee Prema Naku Theliyali'"
    ],
    correctAnswer: 2,
    explanation: "'Nuvvu Thaggaku' literally means 'don't decrease' but contextually means 'don't back down' - a play on words."
  },
  {
    question: "Which dialogue appears in two different movies with completely different contexts?",
    options: [
      "'Manishi Marchali Ante Mundhu Manasu Marchali'",
      "'Prathi Okkadu Gelavali Ani Ledu'",
      "'Nenu Vinnanu... Nenu Unnanu'",
      "'Manchi Cheyyali Ante Manassu Undali'"
    ],
    correctAnswer: 0,
    explanation: "This dialogue appears in two films - once about personal change and once about societal change."
  },
  {
    question: "Which dialogue has a hidden Sanskrit shloka reference?",
    options: [
      "'Dharmam Thappani Manishi'",
      "'Jeevitham Ante Yuddham'",
      "'Karma Anugunanga Phalam'",
      "'Nee Prema Naa Vidhi'"
    ],
    correctAnswer: 2,
    explanation: "This dialogue is based on the Sanskrit principle of Karma and its fruits."
  },
  {
    question: "Complete this dialogue that has a mathematical metaphor: 'Manishiki Manishiki Madhya ______'",
    options: [
      "Dooram Ledu",
      "Prema Untundi",
      "Ledhu Equation",
      "Antaram Untundi"
    ],
    correctAnswer: 2,
    explanation: "This unique dialogue uses mathematics to explain human relationships."
  },
  {
    question: "Which dialogue changes its meaning when the punctuation is changed?",
    options: [
      "'Nuvvu Leni Nenu Ledu'",
      "'Nenu, Nuvvu, Memu'",
      "'Chalu! Naalanti Vaadu'",
      "'Nee Kosam, Naa Kosam'"
    ],
    correctAnswer: 2,
    explanation: "The meaning changes from 'Enough! Someone like me' to 'Enough like me' based on punctuation."
  },
  {
    question: "Which dialogue is actually a combination of two different movie dialogues merged into one popular version?",
    options: [
      "'Prema Ante Ishtam Kaadhu'",
      "'Naa Daari Naadi'",
      "'Manasu Maata Vinadu'",
      "'Prathi Thappulo Nyayam'"
    ],
    correctAnswer: 3,
    explanation: "This popular dialogue is actually a combination of two separate dialogues that got merged over time."
  },
  {
    question: "Which dialogue has different meanings in three different scenes of the same movie?",
    options: [
      "'Nenu Vinnanu'",
      "'Nee Kosam'",
      "'Idi Naa Pranam'",
      "'Nuvvu Naatho Unte'"
    ],
    correctAnswer: 1,
    explanation: "This dialogue appears three times in the movie, each time with a different contextual meaning."
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