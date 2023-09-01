const questionElement = document.getElementById('question');
const options = document.querySelectorAll('.option');
const resultElement = document.getElementById('result');
const progressBar = document.getElementById('progress-bar');

const questions = [
    {
        question: "What is the smallest unit of matter?",
        options: ["Atom", "Molecule", "Cell", "Element"],
        correctAnswer: "Atom"
    },
    {
        question: "Which gas do plants use for photosynthesis?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: "Carbon Dioxide"
    },
    {
        question: "What causes the tides on Earth's oceans?",
        options: ["The Moon's gravity", "The Sun's gravity", "Wind patterns", "Earth's rotation"],
        correctAnswer: "The Moon's gravity"
    },
    {
        question: "What is the chemical symbol for the element gold?",
        options: ["Ag", "Au", "Fe", "Cu"],
        correctAnswer: "Au"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the process by which plants make their own food?",
        options: ["Respiration", "Photosynthesis", "Transpiration", "Germination"],
        correctAnswer: "Photosynthesis"
    },
    {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Cell membrane", "Ribosome"],
        correctAnswer: "Mitochondria"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "O2", "NaCl"],
        correctAnswer: "H2O"
    },
    {
        question: "Which planet is known as the 'Blue Planet'?",
        options: ["Venus", "Earth", "Uranus", "Neptune"],
        correctAnswer: "Earth"
    },
    {
        question: "What is the force that pulls objects towards the center of the Earth?",
        options: ["Magnetism", "Friction", "Gravity", "Inertia"],
        correctAnswer: "Gravity"
    },
    {
        question: "Which gas do humans inhale in the highest amount from the atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
        correctAnswer: "Nitrogen"
    },
    {
        question: "What is the largest organ in the human body?",
        options: ["Liver", "Lungs", "Heart", "Skin"],
        correctAnswer: "Skin"
    },
    {
        question: "What type of electromagnetic radiation has the shortest wavelength?",
        options: ["Radio waves", "Microwaves", "X-rays", "Gamma rays"],
        correctAnswer: "Gamma rays"
    },
    {
        question: "Which gas is responsible for the greenhouse effect on Earth?",
        options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Helium"],
        correctAnswer: "Carbon Dioxide"
    },
    {
        question: "What is the unit of measurement for electric current?",
        options: ["Watt", "Volt", "Ampere", "Ohm"],
        correctAnswer: "Ampere"
    },
    {
        question: "What is the process by which plants release water vapor into the atmosphere?",
        options: ["Photosynthesis", "Transpiration", "Respiration", "Condensation"],
        correctAnswer: "Transpiration"
    },
    {
        question: "What is the process of a liquid turning into a gas at the surface?",
        options: ["Evaporation", "Sublimation", "Condensation", "Melting"],
        correctAnswer: "Evaporation"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Mars", "Jupiter", "Saturn", "Neptune"],
        correctAnswer: "Jupiter"
    },
    {
        question: "Which type of rock is formed from cooled molten lava?",
        options: ["Sedimentary", "Metamorphic", "Igneous", "Mineral"],
        correctAnswer: "Igneous"
    },
    {
        question: "What is the main function of the mitochondria in a cell?",
        options: ["Cell division", "Protein synthesis", "Energy production", "Storage of genetic material"],
        correctAnswer: "Energy production"
    },
    // Continue adding more questions...
];

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
