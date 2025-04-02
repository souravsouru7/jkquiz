export const progressiveMoviesQuizData = [
  {
    question: "Which 2009 Telugu movie dealt with the theme of reincarnation and historical connection?",
    options: [
      "Magadheera",
      "Arundhati",
      "Arya 2",
      "Adhurs"
    ],
    correctAnswer: 0,
    explanation: "Magadheera (2009) directed by S.S. Rajamouli was a groundbreaking film that dealt with reincarnation and a 400-year-old love story."
  },
  {
    question: "Which 2015 Telugu movie addressed the issue of corruption in the medical system?",
    options: [
      "Srimanthudu",
      "Temper",
      "S/O Satyamurthy",
      "Oopiri"
    ],
    correctAnswer: 1,
    explanation: "Temper (2015) highlighted corruption in the medical system and showed the transformation of a corrupt police officer."
  },
  {
    question: "Which 2018 movie dealt with social issues and women empowerment?",
    options: [
      "Rangasthalam",
      "Mahanati",
      "Bharat Ane Nenu",
      "Aravinda Sametha"
    ],
    correctAnswer: 1,
    explanation: "Mahanati (2018) was a biopic that showcased the life of legendary actress Savitri and addressed various social issues including women empowerment."
  },
  {
    question: "Which 2016 Telugu movie addressed mental health issues?",
    options: [
      "Pellichoopulu",
      "Nannaku Prematho",
      "A Aa",
      "Oopiri"
    ],
    correctAnswer: 3,
    explanation: "Oopiri (2016) dealt with the relationship between a quadriplegic and his caretaker, addressing mental health and disability with sensitivity."
  },
  {
    question: "Which 2017 movie highlighted the importance of education and social responsibility?",
    options: [
      "Fidaa",
      "Arjun Reddy",
      "Spyder",
      "Sathamanam Bhavati"
    ],
    correctAnswer: 2,
    explanation: "Spyder (2017) emphasized the importance of social responsibility and using technology for the greater good."
  },
  {
    question: "Which 2019 movie addressed the issue of caste discrimination?",
    options: [
      "Jersey",
      "Dear Comrade",
      "Agent Sai Srinivasa Athreya",
      "Maharshi"
    ],
    correctAnswer: 1,
    explanation: "Dear Comrade (2019) touched upon various social issues including caste discrimination and women's rights in sports."
  },
  {
    question: "Which 2014 movie dealt with the theme of organ donation?",
    options: [
      "Race Gurram",
      "Manam",
      "1: Nenokkadine",
      "Legend"
    ],
    correctAnswer: 1,
    explanation: "Manam (2014) beautifully portrayed the concept of organ donation along with family relationships across generations."
  },
  {
    question: "Which 2013 movie addressed environmental conservation?",
    options: [
      "Seethamma Vakitlo Sirimalle Chettu",
      "Attarintiki Daredi",
      "Mirchi",
      "Baadshah"
    ],
    correctAnswer: 0,
    explanation: "Seethamma Vakitlo Sirimalle Chettu (2013) promoted environmental conservation and family values."
  },
  {
    question: "Which 2020 movie dealt with middle-class family issues and entrepreneurship?",
    options: [
      "Ala Vaikunthapurramuloo",
      "Sarileru Neekevvaru",
      "Middle Class Melodies",
      "Solo Brathuke So Better"
    ],
    correctAnswer: 2,
    explanation: "Middle Class Melodies (2020) portrayed the struggles and aspirations of middle-class families and young entrepreneurs."
  },
  {
    question: "Which 2012 movie addressed political corruption and social change?",
    options: [
      "Eega",
      "Cameraman Gangatho Rambabu",
      "Businessman",
      "Gabbar Singh"
    ],
    correctAnswer: 1,
    explanation: "Cameraman Gangatho Rambabu (2012) dealt with political corruption and the role of media in bringing social change."
  },
  {
    question: "Which 2011 movie highlighted the importance of rural development?",
    options: [
      "Dookudu",
      "Mr. Perfect",
      "Kandireega",
      "Shakti"
    ],
    correctAnswer: 0,
    explanation: "Dookudu (2011) included themes of rural development and anti-corruption alongside its commercial elements."
  },
  {
    question: "Which 2010 movie addressed environmental issues and corporate greed?",
    options: [
      "Khaleja",
      "Brindavanam",
      "Orange",
      "Ye Maaya Chesave"
    ],
    correctAnswer: 0,
    explanation: "Khaleja (2010) dealt with environmental issues, corporate greed, and their impact on village communities."
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