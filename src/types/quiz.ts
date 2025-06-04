
export interface Question {
  id: string;
  question: string;
  answers: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface QuizData {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  difficulty: 'Easy' | 'Medium' | 'Hard';
  estimatedTime: number; // in minutes
  category: string;
}

export interface UserAnswer {
  questionIndex: number;
  selectedAnswer: number;
  isCorrect: boolean;
  timeSpent: number; // in seconds
}

// Programming Quiz (Expanded)
export const programmingQuiz: QuizData = {
  id: 'programming-quiz',
  title: 'JavaScript & Programming',
  description: 'Test your knowledge of JavaScript, React, and general programming concepts.',
  difficulty: 'Medium',
  estimatedTime: 12,
  category: 'Programming',
  questions: [
    {
      id: 'p1',
      question: 'What is the correct way to declare a variable in JavaScript?',
      answers: [
        'variable myVar = 10;',
        'let myVar = 10;',
        'declare myVar = 10;',
        'var: myVar = 10;'
      ],
      correctAnswer: 1,
      explanation: 'In modern JavaScript, "let" is the preferred way to declare variables with block scope.'
    },
    {
      id: 'p2',
      question: 'Which of the following is NOT a primitive data type in JavaScript?',
      answers: [
        'string',
        'boolean',
        'object',
        'number'
      ],
      correctAnswer: 2,
      explanation: 'Object is not a primitive data type. The primitive types are: string, number, boolean, null, undefined, symbol, and bigint.'
    },
    {
      id: 'p3',
      question: 'What does the "===" operator do in JavaScript?',
      answers: [
        'Assigns a value to a variable',
        'Compares values with type coercion',
        'Compares values without type coercion',
        'Creates a new object'
      ],
      correctAnswer: 2,
      explanation: 'The "===" operator performs strict equality comparison without type coercion, comparing both value and type.'
    },
    {
      id: 'p4',
      question: 'Which method is used to add an element to the end of an array?',
      answers: [
        'append()',
        'add()',
        'push()',
        'insert()'
      ],
      correctAnswer: 2,
      explanation: 'The push() method adds one or more elements to the end of an array and returns the new length.'
    },
    {
      id: 'p5',
      question: 'What is the result of: typeof null?',
      answers: [
        '"null"',
        '"undefined"',
        '"object"',
        '"boolean"'
      ],
      correctAnswer: 2,
      explanation: 'This is a well-known JavaScript quirk. typeof null returns "object", which is considered a bug in the language but is kept for backward compatibility.'
    },
    {
      id: 'p6',
      question: 'In React, what is the purpose of useState hook?',
      answers: [
        'To manage component state',
        'To handle side effects',
        'To create refs',
        'To optimize performance'
      ],
      correctAnswer: 0,
      explanation: 'useState is a React hook that allows you to add and manage state in functional components.'
    },
    {
      id: 'p7',
      question: 'Which company created the Python programming language?',
      answers: [
        'Google',
        'Microsoft',
        'Guido van Rossum (individual)',
        'Facebook'
      ],
      correctAnswer: 2,
      explanation: 'Python was created by Guido van Rossum and first released in 1991.'
    },
    {
      id: 'p8',
      question: 'What does API stand for?',
      answers: [
        'Advanced Programming Interface',
        'Application Programming Interface',
        'Automated Program Integration',
        'Application Process Integration'
      ],
      correctAnswer: 1,
      explanation: 'API stands for Application Programming Interface, which allows different software applications to communicate with each other.'
    },
    {
      id: 'p9',
      question: 'Which of these is a NoSQL database?',
      answers: [
        'MySQL',
        'PostgreSQL',
        'MongoDB',
        'SQLite'
      ],
      correctAnswer: 2,
      explanation: 'MongoDB is a popular NoSQL document database, while the others are relational (SQL) databases.'
    },
    {
      id: 'p10',
      question: 'What does Git primarily help with?',
      answers: [
        'Database management',
        'Version control',
        'User interface design',
        'Server deployment'
      ],
      correctAnswer: 1,
      explanation: 'Git is a distributed version control system used to track changes in source code during software development.'
    }
  ]
};

// Math Quiz (Expanded)
export const mathQuiz: QuizData = {
  id: 'math-quiz',
  title: 'Mathematics & Logic',
  description: 'Test your mathematical skills from basic arithmetic to advanced concepts.',
  difficulty: 'Medium',
  estimatedTime: 10,
  category: 'Mathematics',
  questions: [
    {
      id: 'm1',
      question: 'What is 15 × 8?',
      answers: ['120', '110', '130', '125'],
      correctAnswer: 0,
      explanation: '15 × 8 = 120'
    },
    {
      id: 'm2',
      question: 'What is the square root of 144?',
      answers: ['11', '12', '13', '14'],
      correctAnswer: 1,
      explanation: '√144 = 12 because 12 × 12 = 144'
    },
    {
      id: 'm3',
      question: 'If x + 5 = 12, what is x?',
      answers: ['6', '7', '8', '9'],
      correctAnswer: 1,
      explanation: 'x + 5 = 12, so x = 12 - 5 = 7'
    },
    {
      id: 'm4',
      question: 'What is 25% of 80?',
      answers: ['15', '20', '25', '30'],
      correctAnswer: 1,
      explanation: '25% of 80 = 0.25 × 80 = 20'
    },
    {
      id: 'm5',
      question: 'What is the area of a rectangle with length 8 and width 5?',
      answers: ['40', '35', '45', '30'],
      correctAnswer: 0,
      explanation: 'Area = length × width = 8 × 5 = 40'
    },
    {
      id: 'm6',
      question: 'What is 2³ (2 to the power of 3)?',
      answers: ['6', '8', '9', '12'],
      correctAnswer: 1,
      explanation: '2³ = 2 × 2 × 2 = 8'
    },
    {
      id: 'm7',
      question: 'What is the value of π (pi) approximately?',
      answers: ['3.14159', '2.71828', '1.41421', '1.61803'],
      correctAnswer: 0,
      explanation: 'π (pi) is approximately 3.14159, the ratio of a circle\'s circumference to its diameter.'
    },
    {
      id: 'm8',
      question: 'In a right triangle, what is the relationship between the sides?',
      answers: ['a + b = c', 'a² + b² = c²', 'a × b = c', 'a - b = c'],
      correctAnswer: 1,
      explanation: 'The Pythagorean theorem states that in a right triangle, a² + b² = c², where c is the hypotenuse.'
    },
    {
      id: 'm9',
      question: 'What is the derivative of x²?',
      answers: ['x', '2x', 'x²', '2x²'],
      correctAnswer: 1,
      explanation: 'Using the power rule, the derivative of x² is 2x.'
    },
    {
      id: 'm10',
      question: 'How many degrees are in a triangle?',
      answers: ['90°', '180°', '270°', '360°'],
      correctAnswer: 1,
      explanation: 'The sum of all angles in any triangle is always 180°.'
    }
  ]
};

// English Quiz (Expanded)
export const englishQuiz: QuizData = {
  id: 'english-quiz',
  title: 'English & Literature',
  description: 'Test your knowledge of English grammar, vocabulary, and world literature.',
  difficulty: 'Medium',
  estimatedTime: 10,
  category: 'English',
  questions: [
    {
      id: 'e1',
      question: 'Which of the following is a synonym for "happy"?',
      answers: ['Sad', 'Joyful', 'Angry', 'Tired'],
      correctAnswer: 1,
      explanation: 'Joyful means feeling or expressing happiness, making it a synonym for happy.'
    },
    {
      id: 'e2',
      question: 'What is the past tense of "go"?',
      answers: ['Gone', 'Went', 'Going', 'Goes'],
      correctAnswer: 1,
      explanation: 'The past tense of "go" is "went".'
    },
    {
      id: 'e3',
      question: 'Who wrote "Romeo and Juliet"?',
      answers: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
      correctAnswer: 1,
      explanation: 'William Shakespeare wrote the famous tragedy "Romeo and Juliet".'
    },
    {
      id: 'e4',
      question: 'Which word is a noun in this sentence: "The quick brown fox jumps"?',
      answers: ['Quick', 'Brown', 'Fox', 'Jumps'],
      correctAnswer: 2,
      explanation: 'Fox is a noun (a thing/animal), while quick and brown are adjectives, and jumps is a verb.'
    },
    {
      id: 'e5',
      question: 'What is the plural form of "child"?',
      answers: ['Childs', 'Children', 'Childes', 'Childs\''],
      correctAnswer: 1,
      explanation: 'The plural form of "child" is "children" - it\'s an irregular plural.'
    },
    {
      id: 'e6',
      question: 'Which punctuation mark is used to show possession?',
      answers: ['Comma', 'Period', 'Apostrophe', 'Question mark'],
      correctAnswer: 2,
      explanation: 'An apostrophe (\'s) is used to show possession, like "John\'s book".'
    },
    {
      id: 'e7',
      question: 'Who wrote "Pride and Prejudice"?',
      answers: ['Charlotte Brontë', 'Emily Dickinson', 'Jane Austen', 'Virginia Woolf'],
      correctAnswer: 2,
      explanation: 'Jane Austen wrote "Pride and Prejudice" in 1813.'
    },
    {
      id: 'e8',
      question: 'What type of word is "quickly" in the sentence "He ran quickly"?',
      answers: ['Noun', 'Verb', 'Adjective', 'Adverb'],
      correctAnswer: 3,
      explanation: 'Quickly is an adverb because it modifies the verb "ran" and describes how he ran.'
    },
    {
      id: 'e9',
      question: 'Which novel begins with "It was the best of times, it was the worst of times"?',
      answers: ['Great Expectations', 'A Tale of Two Cities', 'Oliver Twist', 'David Copperfield'],
      correctAnswer: 1,
      explanation: 'This famous opening line is from Charles Dickens\' "A Tale of Two Cities".'
    },
    {
      id: 'e10',
      question: 'What is the superlative form of "good"?',
      answers: ['Gooder', 'Better', 'Best', 'More good'],
      correctAnswer: 2,
      explanation: 'The superlative form of "good" is "best" (good, better, best).'
    }
  ]
};

// History Quiz (Expanded)
export const historyQuiz: QuizData = {
  id: 'history-quiz',
  title: 'World History & Civilizations',
  description: 'Journey through time with questions about ancient civilizations, wars, and historical figures.',
  difficulty: 'Medium',
  estimatedTime: 12,
  category: 'History',
  questions: [
    {
      id: 'h1',
      question: 'In which year did World War II end?',
      answers: ['1944', '1945', '1946', '1947'],
      correctAnswer: 1,
      explanation: 'World War II ended in 1945 with the surrender of Japan in September.'
    },
    {
      id: 'h2',
      question: 'Who was the first President of the United States?',
      answers: ['Thomas Jefferson', 'John Adams', 'George Washington', 'Benjamin Franklin'],
      correctAnswer: 2,
      explanation: 'George Washington was the first President of the United States, serving from 1789 to 1797.'
    },
    {
      id: 'h3',
      question: 'The Berlin Wall fell in which year?',
      answers: ['1987', '1988', '1989', '1990'],
      correctAnswer: 2,
      explanation: 'The Berlin Wall fell on November 9, 1989, marking a significant moment in German reunification.'
    },
    {
      id: 'h4',
      question: 'Which ancient wonder of the world was located in Egypt?',
      answers: ['Hanging Gardens', 'Colossus of Rhodes', 'Great Pyramid of Giza', 'Lighthouse of Alexandria'],
      correctAnswer: 2,
      explanation: 'The Great Pyramid of Giza is the only ancient wonder still standing and was located in Egypt.'
    },
    {
      id: 'h5',
      question: 'The French Revolution began in which year?',
      answers: ['1789', '1799', '1809', '1819'],
      correctAnswer: 0,
      explanation: 'The French Revolution began in 1789 with the storming of the Bastille on July 14.'
    },
    {
      id: 'h6',
      question: 'Who was known as the "Iron Lady"?',
      answers: ['Queen Elizabeth II', 'Margaret Thatcher', 'Angela Merkel', 'Indira Gandhi'],
      correctAnswer: 1,
      explanation: 'Margaret Thatcher, the British Prime Minister from 1979-1990, was known as the "Iron Lady".'
    },
    {
      id: 'h7',
      question: 'Which empire was ruled by Julius Caesar?',
      answers: ['Greek Empire', 'Roman Empire', 'Byzantine Empire', 'Ottoman Empire'],
      correctAnswer: 1,
      explanation: 'Julius Caesar was a Roman general and statesman who played a critical role in the Roman Empire.'
    },
    {
      id: 'h8',
      question: 'The Titanic sank in which year?',
      answers: ['1910', '1912', '1914', '1916'],
      correctAnswer: 1,
      explanation: 'The RMS Titanic sank on April 15, 1912, after hitting an iceberg.'
    },
    {
      id: 'h9',
      question: 'Who was the first person to walk on the moon?',
      answers: ['Buzz Aldrin', 'Neil Armstrong', 'John Glenn', 'Alan Shepard'],
      correctAnswer: 1,
      explanation: 'Neil Armstrong was the first person to walk on the moon on July 20, 1969.'
    },
    {
      id: 'h10',
      question: 'Which war was fought between the North and South in America?',
      answers: ['Revolutionary War', 'World War I', 'Civil War', 'War of 1812'],
      correctAnswer: 2,
      explanation: 'The American Civil War (1861-1865) was fought between the Northern and Southern states.'
    },
    {
      id: 'h11',
      question: 'Who was the last pharaoh of Egypt?',
      answers: ['Cleopatra VII', 'Tutankhamun', 'Ramesses II', 'Nefertiti'],
      correctAnswer: 0,
      explanation: 'Cleopatra VII was the last active pharaoh of Egypt, ruling until 30 BC.'
    },
    {
      id: 'h12',
      question: 'The Great Wall of China was built primarily to defend against which group?',
      answers: ['Romans', 'Mongols', 'Japanese', 'British'],
      correctAnswer: 1,
      explanation: 'The Great Wall was built primarily to defend against invasions from northern nomadic tribes, particularly the Mongols.'
    }
  ]
};

// Current Affairs Quiz (Expanded)
export const currentAffairsQuiz: QuizData = {
  id: 'current-affairs-quiz',
  title: 'Current Affairs & Technology',
  description: 'Stay updated with recent global events, technology trends, and modern developments.',
  difficulty: 'Hard',
  estimatedTime: 12,
  category: 'Current Affairs',
  questions: [
    {
      id: 'c1',
      question: 'Which country hosted the 2024 Summer Olympics?',
      answers: ['Japan', 'France', 'United States', 'Australia'],
      correctAnswer: 1,
      explanation: 'France hosted the 2024 Summer Olympics in Paris.'
    },
    {
      id: 'c2',
      question: 'What is the name of the AI chatbot developed by OpenAI?',
      answers: ['Bard', 'Claude', 'ChatGPT', 'Alexa'],
      correctAnswer: 2,
      explanation: 'ChatGPT is the AI chatbot developed by OpenAI that gained widespread popularity.'
    },
    {
      id: 'c3',
      question: 'Which company acquired Twitter in 2022?',
      answers: ['Meta', 'Google', 'Microsoft', 'Tesla/SpaceX (Elon Musk)'],
      correctAnswer: 3,
      explanation: 'Elon Musk acquired Twitter in 2022 for approximately $44 billion and later rebranded it to "X".'
    },
    {
      id: 'c4',
      question: 'What is the largest cryptocurrency by market capitalization?',
      answers: ['Ethereum', 'Bitcoin', 'Dogecoin', 'Litecoin'],
      correctAnswer: 1,
      explanation: 'Bitcoin remains the largest cryptocurrency by market capitalization.'
    },
    {
      id: 'c5',
      question: 'Which space agency successfully landed the Perseverance rover on Mars?',
      answers: ['ESA', 'NASA', 'SpaceX', 'ISRO'],
      correctAnswer: 1,
      explanation: 'NASA successfully landed the Perseverance rover on Mars in February 2021.'
    },
    {
      id: 'c6',
      question: 'The COP28 climate summit was held in which country?',
      answers: ['Egypt', 'UAE', 'Scotland', 'Germany'],
      correctAnswer: 1,
      explanation: 'COP28 was held in Dubai, United Arab Emirates in 2023.'
    },
    {
      id: 'c7',
      question: 'Which social media platform is known for short-form videos and is owned by ByteDance?',
      answers: ['Instagram Reels', 'YouTube Shorts', 'TikTok', 'Snapchat'],
      correctAnswer: 2,
      explanation: 'TikTok is the short-form video platform owned by Chinese company ByteDance.'
    },
    {
      id: 'c8',
      question: 'What does NFT stand for?',
      answers: ['New File Transfer', 'Non-Fungible Token', 'Network File Type', 'Next Finance Tech'],
      correctAnswer: 1,
      explanation: 'NFT stands for Non-Fungible Token, a type of digital asset representing ownership of unique items.'
    },
    {
      id: 'c9',
      question: 'Which company developed the ChatGPT competitor called "Bard"?',
      answers: ['Microsoft', 'Google', 'Meta', 'Amazon'],
      correctAnswer: 1,
      explanation: 'Google developed Bard as their AI chatbot to compete with ChatGPT.'
    },
    {
      id: 'c10',
      question: 'The James Webb Space Telescope was launched in which year?',
      answers: ['2020', '2021', '2022', '2023'],
      correctAnswer: 1,
      explanation: 'The James Webb Space Telescope was launched on December 25, 2021.'
    }
  ]
};

// Science & Technology Quiz
export const scienceQuiz: QuizData = {
  id: 'science-quiz',
  title: 'Science & Technology',
  description: 'Explore the wonders of science, space, and modern technology.',
  difficulty: 'Medium',
  estimatedTime: 10,
  category: 'Science',
  questions: [
    {
      id: 's1',
      question: 'What is the closest planet to the Sun?',
      answers: ['Venus', 'Earth', 'Mercury', 'Mars'],
      correctAnswer: 2,
      explanation: 'Mercury is the closest planet to the Sun in our solar system.'
    },
    {
      id: 's2',
      question: 'Who developed the theory of relativity?',
      answers: ['Isaac Newton', 'Albert Einstein', 'Stephen Hawking', 'Galileo Galilei'],
      correctAnswer: 1,
      explanation: 'Albert Einstein developed both the special and general theories of relativity.'
    },
    {
      id: 's3',
      question: 'What does DNA stand for?',
      answers: ['Deoxyribonucleic Acid', 'Dynamic Nuclear Acid', 'Diatomic Nucleic Acid', 'Direct Nuclear Arrangement'],
      correctAnswer: 0,
      explanation: 'DNA stands for Deoxyribonucleic Acid, which carries genetic information.'
    },
    {
      id: 's4',
      question: 'How many chambers does a human heart have?',
      answers: ['2', '3', '4', '5'],
      correctAnswer: 2,
      explanation: 'The human heart has four chambers: two atria and two ventricles.'
    },
    {
      id: 's5',
      question: 'What is the chemical symbol for gold?',
      answers: ['Go', 'Gd', 'Au', 'Ag'],
      correctAnswer: 2,
      explanation: 'Au is the chemical symbol for gold, derived from the Latin word "aurum".'
    },
    {
      id: 's6',
      question: 'Which gas makes up about 78% of Earth\'s atmosphere?',
      answers: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
      correctAnswer: 2,
      explanation: 'Nitrogen makes up approximately 78% of Earth\'s atmosphere.'
    },
    {
      id: 's7',
      question: 'What is the speed of light in a vacuum?',
      answers: ['300,000 km/s', '150,000 km/s', '299,792,458 m/s', '186,000 miles/hour'],
      correctAnswer: 2,
      explanation: 'The speed of light in a vacuum is exactly 299,792,458 meters per second.'
    },
    {
      id: 's8',
      question: 'Which smartphone company introduced the first iPhone?',
      answers: ['Samsung', 'Apple', 'Google', 'Microsoft'],
      correctAnswer: 1,
      explanation: 'Apple introduced the first iPhone in 2007, revolutionizing the smartphone industry.'
    },
    {
      id: 's9',
      question: 'What does AI typically stand for in technology?',
      answers: ['Automated Intelligence', 'Artificial Intelligence', 'Advanced Integration', 'Algorithmic Interface'],
      correctAnswer: 1,
      explanation: 'AI stands for Artificial Intelligence, the simulation of human intelligence by machines.'
    },
    {
      id: 's10',
      question: 'Which planet is known as the "Red Planet"?',
      answers: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 1,
      explanation: 'Mars is known as the "Red Planet" due to its reddish appearance caused by iron oxide on its surface.'
    }
  ]
};

// Movies & Entertainment Quiz
export const moviesQuiz: QuizData = {
  id: 'movies-quiz',
  title: 'Movies & TV Shows',
  description: 'Test your knowledge of cinema, television, and entertainment industry.',
  difficulty: 'Medium',
  estimatedTime: 10,
  category: 'Entertainment',
  questions: [
    {
      id: 'mv1',
      question: 'Which movie won the Academy Award for Best Picture in 2023?',
      answers: ['Top Gun: Maverick', 'Everything Everywhere All at Once', 'Avatar: The Way of Water', 'The Banshees of Inisherin'],
      correctAnswer: 1,
      explanation: '"Everything Everywhere All at Once" won the 2023 Academy Award for Best Picture.'
    },
    {
      id: 'mv2',
      question: 'Who played Iron Man in the Marvel Cinematic Universe?',
      answers: ['Chris Evans', 'Robert Downey Jr.', 'Chris Hemsworth', 'Mark Ruffalo'],
      correctAnswer: 1,
      explanation: 'Robert Downey Jr. portrayed Tony Stark/Iron Man in the Marvel Cinematic Universe.'
    },
    {
      id: 'mv3',
      question: 'Which streaming platform is known for "Stranger Things"?',
      answers: ['Disney+', 'HBO Max', 'Netflix', 'Amazon Prime'],
      correctAnswer: 2,
      explanation: '"Stranger Things" is a Netflix original series that premiered in 2016.'
    },
    {
      id: 'mv4',
      question: 'Who directed the movie "Inception"?',
      answers: ['Steven Spielberg', 'Christopher Nolan', 'Quentin Tarantino', 'Martin Scorsese'],
      correctAnswer: 1,
      explanation: 'Christopher Nolan directed "Inception" (2010), known for its complex narrative structure.'
    },
    {
      id: 'mv5',
      question: 'Which animated movie features the song "Let It Go"?',
      answers: ['Moana', 'Frozen', 'Tangled', 'The Little Mermaid'],
      correctAnswer: 1,
      explanation: '"Let It Go" is the famous song from Disney\'s "Frozen" (2013), sung by Elsa.'
    },
    {
      id: 'mv6',
      question: 'What is the highest-grossing movie of all time?',
      answers: ['Titanic', 'Avatar (2009)', 'Avengers: Endgame', 'Star Wars: The Force Awakens'],
      correctAnswer: 1,
      explanation: 'Avatar (2009) is currently the highest-grossing movie of all time with over $2.9 billion worldwide.'
    },
    {
      id: 'mv7',
      question: 'Which TV series is based on George R.R. Martin\'s novels?',
      answers: ['The Witcher', 'Game of Thrones', 'Lord of the Rings', 'Vikings'],
      correctAnswer: 1,
      explanation: '"Game of Thrones" is based on George R.R. Martin\'s "A Song of Ice and Fire" book series.'
    },
    {
      id: 'mv8',
      question: 'Who played the Joker in "The Dark Knight" (2008)?',
      answers: ['Jack Nicholson', 'Joaquin Phoenix', 'Heath Ledger', 'Jared Leto'],
      correctAnswer: 2,
      explanation: 'Heath Ledger played the Joker in "The Dark Knight" and won a posthumous Oscar for the role.'
    },
    {
      id: 'mv9',
      question: 'Which studio created the "Toy Story" franchise?',
      answers: ['Disney Animation', 'Pixar', 'DreamWorks', 'Illumination'],
      correctAnswer: 1,
      explanation: 'Pixar Animation Studios created the "Toy Story" franchise, starting with the first film in 1995.'
    },
    {
      id: 'mv10',
      question: 'In which fictional African country is "Black Panther" set?',
      answers: ['Zamunda', 'Wakanda', 'Genevia', 'Sokovia'],
      correctAnswer: 1,
      explanation: '"Black Panther" is set in the fictional African nation of Wakanda.'
    }
  ]
};

// Gaming Quiz
export const gamingQuiz: QuizData = {
  id: 'gaming-quiz',
  title: 'Gaming & Esports',
  description: 'Test your knowledge of video games, gaming history, and esports.',
  difficulty: 'Medium',
  estimatedTime: 10,
  category: 'Gaming',
  questions: [
    {
      id: 'g1',
      question: 'Which company created Minecraft?',
      answers: ['Microsoft', 'Mojang Studios', 'Epic Games', 'Valve'],
      correctAnswer: 1,
      explanation: 'Minecraft was originally created by Mojang Studios (founded by Markus "Notch" Persson).'
    },
    {
      id: 'g2',
      question: 'What is the best-selling video game of all time?',
      answers: ['Tetris', 'Minecraft', 'Grand Theft Auto V', 'Fortnite'],
      correctAnswer: 1,
      explanation: 'Minecraft is the best-selling video game of all time with over 300 million copies sold.'
    },
    {
      id: 'g3',
      question: 'Which character is the mascot of Nintendo?',
      answers: ['Link', 'Mario', 'Pikachu', 'Donkey Kong'],
      correctAnswer: 1,
      explanation: 'Mario is Nintendo\'s main mascot and has appeared in numerous games since 1981.'
    },
    {
      id: 'g4',
      question: 'In which game would you find the character "Master Chief"?',
      answers: ['Call of Duty', 'Halo', 'Gears of War', 'Destiny'],
      correctAnswer: 1,
      explanation: 'Master Chief is the protagonist of the Halo video game series.'
    },
    {
      id: 'g5',
      question: 'Which battle royale game was developed by Epic Games?',
      answers: ['PUBG', 'Apex Legends', 'Fortnite', 'Call of Duty: Warzone'],
      correctAnswer: 2,
      explanation: 'Fortnite Battle Royale was developed by Epic Games and launched in 2017.'
    },
    {
      id: 'g6',
      question: 'What does "FPS" stand for in gaming?',
      answers: ['First Person Shooter', 'Frames Per Second', 'Fast Paced Strategy', 'Both A and B'],
      correctAnswer: 3,
      explanation: 'FPS can stand for both "First Person Shooter" (a game genre) and "Frames Per Second" (performance metric).'
    },
    {
      id: 'g7',
      question: 'Which gaming console was released by Sony in 2020?',
      answers: ['PlayStation 4 Pro', 'PlayStation 5', 'PlayStation VR2', 'PlayStation Portal'],
      correctAnswer: 1,
      explanation: 'Sony released the PlayStation 5 (PS5) in November 2020.'
    },
    {
      id: 'g8',
      question: 'Which company owns the "Call of Duty" franchise?',
      answers: ['Electronic Arts', 'Activision Blizzard', 'Ubisoft', 'Take-Two Interactive'],
      correctAnswer: 1,
      explanation: 'The "Call of Duty" franchise is owned by Activision Blizzard (now part of Microsoft).'
    },
    {
      id: 'g9',
      question: 'In "League of Legends", what is the main objective?',
      answers: ['Collect all coins', 'Destroy the enemy Nexus', 'Reach the highest level', 'Capture the flag'],
      correctAnswer: 1,
      explanation: 'In League of Legends, the main objective is to destroy the enemy team\'s Nexus.'
    },
    {
      id: 'g10',
      question: 'Which retro game features a yellow character eating dots?',
      answers: ['Pong', 'Space Invaders', 'Pac-Man', 'Asteroids'],
      correctAnswer: 2,
      explanation: 'Pac-Man is the classic arcade game featuring a yellow character eating dots while avoiding ghosts.'
    }
  ]
};

// Sports Quiz
export const sportsQuiz: QuizData = {
  id: 'sports-quiz',
  title: 'Sports & Athletes',
  description: 'Test your knowledge of sports, athletes, and sporting events.',
  difficulty: 'Medium',
  estimatedTime: 10,
  category: 'Sports',
  questions: [
    {
      id: 'sp1',
      question: 'Which country has won the most FIFA World Cups?',
      answers: ['Germany', 'Argentina', 'Brazil', 'Italy'],
      correctAnswer: 2,
      explanation: 'Brazil has won the FIFA World Cup 5 times (1958, 1962, 1970, 1994, 2002).'
    },
    {
      id: 'sp2',
      question: 'Who holds the record for most Olympic gold medals?',
      answers: ['Usain Bolt', 'Michael Phelps', 'Carl Lewis', 'Mark Spitz'],
      correctAnswer: 1,
      explanation: 'Michael Phelps holds the record with 23 Olympic gold medals in swimming.'
    },
    {
      id: 'sp3',
      question: 'In which sport would you perform a slam dunk?',
      answers: ['Volleyball', 'Tennis', 'Basketball', 'Badminton'],
      correctAnswer: 2,
      explanation: 'A slam dunk is a basketball move where a player jumps and scores by putting the ball directly through the hoop.'
    },
    {
      id: 'sp4',
      question: 'How many players are on a football (soccer) team on the field?',
      answers: ['10', '11', '12', '9'],
      correctAnswer: 1,
      explanation: 'A football (soccer) team has 11 players on the field, including the goalkeeper.'
    },
    {
      id: 'sp5',
      question: 'Which tennis tournament is played on grass courts?',
      answers: ['US Open', 'French Open', 'Wimbledon', 'Australian Open'],
      correctAnswer: 2,
      explanation: 'Wimbledon is the only Grand Slam tennis tournament played on grass courts.'
    },
    {
      id: 'sp6',
      question: 'Who is known as "The Greatest" in boxing?',
      answers: ['Mike Tyson', 'Muhammad Ali', 'Floyd Mayweather', 'Sugar Ray Robinson'],
      correctAnswer: 1,
      explanation: 'Muhammad Ali was known as "The Greatest" and is considered one of the best boxers of all time.'
    },
    {
      id: 'sp7',
      question: 'In which sport do teams compete for the Stanley Cup?',
      answers: ['Basketball', 'Baseball', 'Ice Hockey', 'American Football'],
      correctAnswer: 2,
      explanation: 'The Stanley Cup is awarded annually to the National Hockey League (NHL) playoff champion.'
    },
    {
      id: 'sp8',
      question: 'How often are the Summer Olympics held?',
      answers: ['Every 2 years', 'Every 4 years', 'Every 5 years', 'Every 3 years'],
      correctAnswer: 1,
      explanation: 'The Summer Olympics are held every 4 years, with some exceptions due to world events.'
    },
    {
      id: 'sp9',
      question: 'Which country invented the sport of rugby?',
      answers: ['Australia', 'South Africa', 'England', 'Wales'],
      correctAnswer: 2,
      explanation: 'Rugby was invented in England at Rugby School in 1823.'
    },
    {
      id: 'sp10',
      question: 'What is the maximum score possible in ten-pin bowling?',
      answers: ['200', '250', '300', '400'],
      correctAnswer: 2,
      explanation: 'The maximum score in ten-pin bowling is 300, achieved by bowling 12 consecutive strikes.'
    }
  ]
};

// Music Quiz
export const musicQuiz: QuizData = {
  id: 'music-quiz',
  title: 'Music & Artists',
  description: 'Test your knowledge of music, artists, and musical history.',
  difficulty: 'Medium',
  estimatedTime: 10,
  category: 'Music',
  questions: [
    {
      id: 'mu1',
      question: 'Which artist is known as the "King of Pop"?',
      answers: ['Elvis Presley', 'Michael Jackson', 'Prince', 'Justin Timberlake'],
      correctAnswer: 1,
      explanation: 'Michael Jackson was known as the "King of Pop" due to his massive influence on music and dance.'
    },
    {
      id: 'mu2',
      question: 'Which band released the album "Abbey Road"?',
      answers: ['The Rolling Stones', 'Led Zeppelin', 'The Beatles', 'Pink Floyd'],
      correctAnswer: 2,
      explanation: 'The Beatles released "Abbey Road" in 1969, one of their most famous albums.'
    },
    {
      id: 'mu3',
      question: 'What instrument did Mozart primarily play?',
      answers: ['Violin', 'Cello', 'Piano', 'Flute'],
      correctAnswer: 2,
      explanation: 'Wolfgang Amadeus Mozart was primarily known as a pianist and composer.'
    },
    {
      id: 'mu4',
      question: 'Which Korean pop group is known worldwide for hits like "Dynamite"?',
      answers: ['BLACKPINK', 'BTS', 'TWICE', 'Red Velvet'],
      correctAnswer: 1,
      explanation: 'BTS is the Korean pop group that achieved global success with hits like "Dynamite" and "Butter".'
    },
    {
      id: 'mu5',
      question: 'How many strings does a standard guitar have?',
      answers: ['4', '5', '6', '7'],
      correctAnswer: 2,
      explanation: 'A standard guitar has 6 strings, typically tuned E-A-D-G-B-E from lowest to highest.'
    },
    {
      id: 'mu6',
      question: 'Which artist has won the most Grammy Awards in history?',
      answers: ['Beyoncé', 'Taylor Swift', 'Adele', 'Alison Krauss'],
      correctAnswer: 0,
      explanation: 'Beyoncé holds the record for most Grammy Awards won by any artist, with 32 Grammys.'
    },
    {
      id: 'mu7',
      question: 'What does "EDM" stand for in music?',
      answers: ['Electronic Dance Music', 'Electric Digital Music', 'Enhanced Dynamic Music', 'Electronic Digital Mixing'],
      correctAnswer: 0,
      explanation: 'EDM stands for Electronic Dance Music, a genre produced primarily for dance-based entertainment.'
    },
    {
      id: 'mu8',
      question: 'Which instrument is Yo-Yo Ma famous for playing?',
      answers: ['Violin', 'Piano', 'Cello', 'Flute'],
      correctAnswer: 2,
      explanation: 'Yo-Yo Ma is a world-renowned cellist known for his extraordinary skill and diverse musical collaborations.'
    },
    {
      id: 'mu9',
      question: 'Which song by Queen is often considered their signature song?',
      answers: ['We Will Rock You', 'Bohemian Rhapsody', 'Another One Bites the Dust', 'Don\'t Stop Me Now'],
      correctAnswer: 1,
      explanation: '"Bohemian Rhapsody" is often considered Queen\'s signature song and one of the greatest rock songs ever written.'
    },
    {
      id: 'mu10',
      question: 'In which decade did MTV launch?',
      answers: ['1970s', '1980s', '1990s', '2000s'],
      correctAnswer: 1,
      explanation: 'MTV (Music Television) launched on August 1, 1981, with "Video Killed the Radio Star" as its first music video.'
    }
  ]
};

// Food & Cuisine Quiz
export const foodQuiz: QuizData = {
  id: 'food-quiz',
  title: 'Food & Cuisine',
  description: 'Test your knowledge of world cuisines, cooking, and culinary culture.',
  difficulty: 'Easy',
  estimatedTime: 8,
  category: 'Food',
  questions: [
    {
      id: 'f1',
      question: 'Which country is famous for inventing pizza?',
      answers: ['Greece', 'Italy', 'Spain', 'France'],
      correctAnswer: 1,
      explanation: 'Pizza originated in Italy, specifically in Naples, and has become popular worldwide.'
    },
    {
      id: 'f2',
      question: 'What is the main ingredient in guacamole?',
      answers: ['Tomatoes', 'Avocado', 'Lime', 'Onions'],
      correctAnswer: 1,
      explanation: 'Avocado is the main ingredient in guacamole, a popular Mexican dip.'
    },
    {
      id: 'f3',
      question: 'Which spice is derived from the Crocus flower?',
      answers: ['Turmeric', 'Paprika', 'Saffron', 'Cumin'],
      correctAnswer: 2,
      explanation: 'Saffron is derived from the Crocus sativus flower and is one of the most expensive spices in the world.'
    },
    {
      id: 'f4',
      question: 'What type of pastry is used to make profiteroles?',
      answers: ['Puff pastry', 'Shortcrust pastry', 'Choux pastry', 'Filo pastry'],
      correctAnswer: 2,
      explanation: 'Profiteroles are made with choux pastry, which creates light, airy cream puffs.'
    },
    {
      id: 'f5',
      question: 'Which fast food chain is famous for its "Big Mac"?',
      answers: ['Burger King', 'McDonald\'s', 'KFC', 'Subway'],
      correctAnswer: 1,
      explanation: 'The Big Mac is McDonald\'s signature burger, introduced in 1967.'
    },
    {
      id: 'f6',
      question: 'What is the main ingredient in traditional Japanese miso soup?',
      answers: ['Soy sauce', 'Miso paste', 'Rice vinegar', 'Sesame oil'],
      correctAnswer: 1,
      explanation: 'Miso soup is made primarily from miso paste, which is fermented soybean paste.'
    },
    {
      id: 'f7',
      question: 'Which beverage is made from fermented tea?',
      answers: ['Kombucha', 'Matcha', 'Chai', 'Bubble tea'],
      correctAnswer: 0,
      explanation: 'Kombucha is a fermented tea beverage that has become popular for its probiotic properties.'
    },
    {
      id: 'f8',
      question: 'What does "al dente" mean in cooking?',
      answers: ['Very soft', 'Firm to the bite', 'Overcooked', 'Raw'],
      correctAnswer: 1,
      explanation: '"Al dente" is Italian for "to the tooth," meaning pasta that is firm to the bite when properly cooked.'
    },
    {
      id: 'f9',
      question: 'Which chef is known for the phrase "BAM!" in cooking shows?',
      answers: ['Gordon Ramsay', 'Emeril Lagasse', 'Julia Child', 'Anthony Bourdain'],
      correctAnswer: 1,
      explanation: 'Emeril Lagasse is famous for his enthusiastic "BAM!" exclamation while cooking on television.'
    },
    {
      id: 'f10',
      question: 'What is the most consumed beverage in the world after water?',
      answers: ['Coffee', 'Tea', 'Soda', 'Beer'],
      correctAnswer: 1,
      explanation: 'Tea is the second most consumed beverage in the world after water.'
    }
  ]
};

// Export all quizzes
export const allQuizzes = [
  programmingQuiz,
  mathQuiz,
  englishQuiz,
  historyQuiz,
  currentAffairsQuiz,
  scienceQuiz,
  moviesQuiz,
  gamingQuiz,
  sportsQuiz,
  musicQuiz,
  foodQuiz
];

// Keep the original as default for backwards compatibility
export const sampleQuizData = programmingQuiz;
