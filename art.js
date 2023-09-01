const questionElement = document.getElementById('question');
const options = document.querySelectorAll('.option');
const resultElement = document.getElementById('result');
const progressBar = document.getElementById('progress-bar');

const questions = [
    {
        question: "Who painted the Mona Lisa?",
        options: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Michelangelo"],
        correctAnswer: "Leonardo da Vinci"
    },
    {
        question: "Which art movement is characterized by its use of bold colors and geometric shapes?",
        options: ["Impressionism", "Cubism", "Surrealism", "Abstract Expressionism"],
        correctAnswer: "Cubism"
    },
    {
        question: "Which famous artist is known for his 'Starry Night' painting?",
        options: ["Salvador Dalí", "Pierre-Auguste Renoir", "Vincent van Gogh", "Claude Monet"],
        correctAnswer: "Vincent van Gogh"
    },
    {
        question: "What is the art technique of scratching off paint to reveal the layer underneath?",
        options: ["Impasto", "Collage", "Encaustic", "Sgraffito"],
        correctAnswer: "Sgraffito"
    },
    {
        question: "Who sculpted the statue of 'David'?",
        options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
        correctAnswer: "Michelangelo"
    },
    {
        question: "What does the term 'chiaroscuro' refer to in art?",
        options: ["A type of brushstroke", "A color palette", "The use of light and shadow", "Abstract geometric shapes"],
        correctAnswer: "The use of light and shadow"
    },
    {
        question: "Who is considered the founder of the Pop Art movement?",
        options: ["Andy Warhol", "Jackson Pollock", "Mark Rothko", "Wassily Kandinsky"],
        correctAnswer: "Andy Warhol"
    },
    {
        question: "Which art movement aimed to depict the subconscious mind through dream-like imagery?",
        options: ["Impressionism", "Cubism", "Surrealism", "Abstract Expressionism"],
        correctAnswer: "Surrealism"
    },
    {
        question: "Who is famous for his 'Campbell's Soup Cans' artwork?",
        options: ["Pablo Picasso", "Jackson Pollock", "Andy Warhol", "Jean-Michel Basquiat"],
        correctAnswer: "Andy Warhol"
    },
    {
        question: "What is the technique of using small dots to create images in art?",
        options: ["Pointillism", "Sgraffito", "Impasto", "Collage"],
        correctAnswer: "Pointillism"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Michelangelo"],
        correctAnswer: "Leonardo da Vinci",
        category: "Art"
    },
    {
        question: "Which art movement is characterized by its use of bold colors and geometric shapes?",
        options: ["Impressionism", "Cubism", "Surrealism", "Abstract Expressionism"],
        correctAnswer: "Cubism",
        category: "Art"
    },
    {
        question: "Which famous artist is known for his 'Starry Night' painting?",
        options: ["Salvador Dalí", "Pierre-Auguste Renoir", "Vincent van Gogh", "Claude Monet"],
        correctAnswer: "Vincent van Gogh",
        category: "Art"
    },
    {
        question: "What is the art technique of scratching off paint to reveal the layer underneath?",
        options: ["Impasto", "Collage", "Encaustic", "Sgraffito"],
        correctAnswer: "Sgraffito",
        category: "Art"
    },
    {
        question: "Who sculpted the statue of 'David'?",
        options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
        correctAnswer: "Michelangelo",
        category: "Art"
    },
    {
        question: "What does the term 'chiaroscuro' refer to in art?",
        options: ["A type of brushstroke", "A color palette", "The use of light and shadow", "Abstract geometric shapes"],
        correctAnswer: "The use of light and shadow",
        category: "Art"
    },
    {
        question: "Who is considered the founder of the Pop Art movement?",
        options: ["Andy Warhol", "Jackson Pollock", "Mark Rothko", "Wassily Kandinsky"],
        correctAnswer: "Andy Warhol",
        category: "Art"
    },
    {
        question: "Which art movement aimed to depict the subconscious mind through dream-like imagery?",
        options: ["Impressionism", "Cubism", "Surrealism", "Abstract Expressionism"],
        correctAnswer: "Surrealism",
        category: "Art"
    },
    {
        question: "Who is famous for his 'Campbell's Soup Cans' artwork?",
        options: ["Pablo Picasso", "Jackson Pollock", "Andy Warhol", "Jean-Michel Basquiat"],
        correctAnswer: "Andy Warhol",
        category: "Art"
    },
    {
        question: "What is the technique of using small dots to create images in art?",
        options: ["Pointillism", "Sgraffito", "Impasto", "Collage"],
        correctAnswer: "Pointillism",
        category: "Art"
    },
    {
        question: "What is the head of government called in the United Kingdom?",
        options: ["President", "Prime Minister", "Chancellor", "Monarch"],
        correctAnswer: "Prime Minister",
        category: "Government"
    },
    {
        question: "Which country has the world's oldest written constitution that is still in use?",
        options: ["United States", "France", "China", "India"],
        correctAnswer: "United States",
        category: "Government"
    },
    {
        question: "What is the supreme law of the land in the United States?",
        options: ["Bill of Rights", "Declaration of Independence", "Constitution", "Emancipation Proclamation"],
        correctAnswer: "Constitution",
        category: "Government"
    },
    {
        question: "Who is the head of state and the ceremonial leader of Canada?",
        options: ["Prime Minister", "President", "King", "Monarch"],
        correctAnswer: "Monarch",
        category: "Government"
    },
    {
        question: "What term refers to the separation of powers among the legislative, executive, and judicial branches of government?",
        options: ["Federation", "Bicameralism", "Tripartite", "Checks and Balances"],
        correctAnswer: "Tripartite",
        category: "Government"
    },
    {
        question: "What is the capital city of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correctAnswer: "Canberra",
        category: "Government"
    },
    {
        question: "Which branch of the U.S. government is responsible for interpreting laws and the Constitution?",
        options: ["Legislative", "Executive", "Judicial", "Administrative"],
        correctAnswer: "Judicial",
        category: "Government"
    },
    {
        question: "What is the process by which citizens can propose new laws or changes to existing laws?",
        options: ["Referendum", "Amendment", "Initiative", "Petition"],
        correctAnswer: "Initiative",
        category: "Government"
    },
    {
        question: "In which country is the Louvre Museum located?",
        options: ["Italy", "France", "Spain", "Germany"],
        correctAnswer: "France",
        category: "Art"
    },
    {
        question: "Who painted 'The Persistence of Memory'?",
        options: ["Salvador Dalí", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
        correctAnswer: "Salvador Dalí",
        category: "Art"
    },
];

// Shuffle function to randomize the order of elements in an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Shuffle the questions array
shuffleArray(questions);

// ... (remaining code)
    

let currentQuestionIndex = 0;
let correctAnswers = 0;

function showQuestion(question) {
    questionElement.textContent = question.question;
    options.forEach((option, index) => {
        option.textContent = question.options[index];
    });
}

function checkAnswer(selectedOption) {
    const selectedAnswer = selectedOption.textContent;
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if (selectedAnswer === correctAnswer) {
        resultElement.textContent = 'Correct!';
        correctAnswers++;
    } else {
        resultElement.textContent = 'Incorrect. The correct answer is ' + correctAnswer;
    }
    
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        resultElement.textContent = '';
    } else {
        questionElement.textContent = 'Quiz completed!';
        options.forEach(option => {
            option.style.display = 'none';
        });
        showResult(correctAnswers);
    }

    updateProgressBar();
}

function showResult(correctCount) {
    const percentage = (correctCount / questions.length) * 100;
    resultElement.textContent = `Congratulations You scored ${percentage.toFixed(2)}%`;
    resultElement.classList.add('scored-result');
}

function updateProgressBar() {
    const progress = (currentQuestionIndex / questions.length) * 100;
    progressBar.style.width = progress + '%';
}

showQuestion(questions[currentQuestionIndex]);
