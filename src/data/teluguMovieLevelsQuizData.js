export const teluguMovieLevelsQuizData = {
  easy: [
    {
      question: "Complete the dialogue: 'Donga _______ ki artham telusa? Dongatanam chesi dorikipoyina vadini donga antaru'",
      options: [
        "Babu",
        "Raja",
        "Bidda",
        "Nayala"
      ],
      correctAnswer: 2,
      explanation: "From Vikramarkudu - 'Donga Bidda ki artham telusa?'"
    },
    {
      question: "Which movie has the dialogue: 'Commitment ichanu, daanni nilabettukovali ante praanam pothundemo... kaani parledhu'?",
      options: [
        "Jalsa",
        "Gabbar Singh",
        "Businessman",
        "Dookudu"
      ],
      correctAnswer: 1,
      explanation: "Famous dialogue from Gabbar Singh about keeping commitments"
    },
    {
      question: "Complete: 'Meeru _______ lo unnaru, nenu reality lo unna'",
      options: [
        "Cinema",
        "Drama",
        "Imagination",
        "Story"
      ],
      correctAnswer: 0,
      explanation: "From Race Gurram - about being realistic vs dramatic"
    },
    {
      question: "Which dialogue is from Adhurs: '______ ante na mata, na mata ante _____'?",
      options: [
        "Nenu/Nenu",
        "Nedu/Repu",
        "Nijam/Nijam",
        "Maata/Maata"
      ],
      correctAnswer: 0,
      explanation: "Famous dialogue about self-confidence from Adhurs"
    }
  ],
  intermediate: [
    {
      question: "In which movie does this dialogue appear: 'Manishi ki rendu rakala badha... okatante inkoti teeruthundi... rendu kalisi osthe adi premayipothundi'?",
      options: [
        "Arya",
        "Orange",
        "Darling",
        "Mr. Perfect"
      ],
      correctAnswer: 1,
      explanation: "From Orange - philosophical dialogue about pain and love"
    },
    {
      question: "Complete this emotional dialogue: 'Naa _______ ki value ledu ani telusukunnaka, naa _______ ki value penchukunnanu'",
      options: [
        "Prema/Praanam",
        "Jeevitham/Garvam",
        "Dabbu/Paruvu",
        "Manasu/Pogaru"
      ],
      correctAnswer: 0,
      explanation: "From Okkadu - about self-worth and pride"
    },
    {
      question: "Which movie features: 'Nuvvu nacchav ante... adhi expression kaadhu... confession'?",
      options: [
        "100% Love",
        "Happy Days",
        "Nuvvu Naku Nachav",
        "Manmadhudu"
      ],
      correctAnswer: 0,
      explanation: "From 100% Love - wordplay between expression and confession"
    },
    {
      question: "Complete: 'Prema ante _____ kaadhu... _____ tho chupinchaali'",
      options: [
        "Maatalu/Panulu",
        "Chupinchedi/Anipinchedi",
        "Cheppedi/Cheyalsindi",
        "Matalu/Manasu"
      ],
      correctAnswer: 1,
      explanation: "From Arya - about showing love through actions"
    }
  ],
  advanced: [
    {
      question: "Decode this dialogue's multiple meanings: 'Prathi Okkadu Devude... Kaani Andaru Devullu Kaadu'",
      options: [
        "Religious commentary",
        "Social hierarchy critique",
        "Philosophical paradox",
        "Political statement"
      ],
      correctAnswer: 2,
      explanation: "From Tagore - complex philosophical statement about divinity in humanity"
    },
    {
      question: "This dialogue uses three languages: 'Nenu vachanu, I have arrived, आ गया मैं' - What's its deeper context?",
      options: [
        "Cultural unity",
        "Character's evolution",
        "Power assertion",
        "Identity crisis"
      ],
      correctAnswer: 2,
      explanation: "From Businessman - shows dominance across cultural boundaries"
    },
    {
      question: "Analyze: 'Manishi bathukuthunnantha kaalam edho okati koduthune untadi... adhi gunde ayina kaavacchu... gadiyaaram ayina kaavacchu'",
      options: [
        "Time vs Heart metaphor",
        "Life's constant motion",
        "Existential rhythm",
        "Mechanical vs Emotional"
      ],
      correctAnswer: 2,
      explanation: "From Jersey - philosophical take on life's rhythm"
    },
    {
      question: "What's the layered meaning in: 'Nuvvu chusedi kalalu kaadu... kalalaki artham'?",
      options: [
        "Dreams vs Reality",
        "Metaphysical interpretation",
        "Symbolic representation",
        "Psychological analysis"
      ],
      correctAnswer: 1,
      explanation: "From 1 Nenokkadine - about the meaning behind dreams rather than dreams themselves"
    }
  ]
};

export const calculateGrade = (score, totalQuestions) => {
  const percentage = (score / totalQuestions) * 100;
  if (percentage >= 90) return 'A';
  if (percentage >= 80) return 'B';
  if (percentage >= 70) return 'C';
  if (percentage >= 60) return 'D';
  return 'F';
}; 