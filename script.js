const questionElement = document.getElementById('question');
const options = document.querySelectorAll('.option');
const resultElement = document.getElementById('result');
const progressBar = document.getElementById('progress-bar');

const questions = [
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Madrid'],
        correctAnswer: 'Paris'
    },
    {
        question: 'Which planet is known as the "Red Planet"?',
        options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
        correctAnswer: 'Mars'
    },
    {
        question: 'What is the largest mammal in the world?',
        options: ['Elephant', 'Whale', 'Giraffe', 'Hippopotamus'],
        correctAnswer: 'Whale'
    },
    {
        question: 'Which famous scientist developed the theory of relativity?',
        options: ['Isaac Newton', 'Albert Einstein', 'Nikola Tesla', 'Galileo Galilei'],
        correctAnswer: 'Albert Einstein'
    },
    {
        question: 'What is the chemical symbol for the element oxygen?',
        options: ['O', 'O2', 'C', 'H2O'],
        correctAnswer: 'O'
    },
    {
        question: 'Which country is known as the Land of the Rising Sun?',
        options: ['China', 'India', 'Japan', 'South Korea'],
        correctAnswer: 'Japan'
    },
    {
        question: 'Which instrument is used to measure atmospheric pressure?',
        options: ['Thermometer', 'Hygrometer', 'Barometer', 'Anemometer'],
        correctAnswer: 'Barometer'
    },
    {
        question: 'What is the smallest prime number?',
        options: ['1', '2', '3', '5'],
        correctAnswer: '2'
    },
    {
        question: 'Which gas do plants use for photosynthesis?',
        options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
        correctAnswer: 'Carbon Dioxide'
    },
    {
        question: 'Which famous painting is often called the "Mona Lisa"?',
        options: ['Starry Night', 'The Persistence of Memory', 'The Scream', 'La Gioconda'],
        correctAnswer: 'La Gioconda'
    },
    {
        question: 'Which natural disaster is measured using the Richter scale?',
        options: ['Hurricane', 'Earthquake', 'Tornado', 'Flood'],
        correctAnswer: 'Earthquake'
    },
    {
        question: 'Which gas makes up the majority of Earth\'s atmosphere?',
        options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Helium'],
        correctAnswer: 'Nitrogen'
    },
    {
        question: 'What is the process by which plants make their own food?',
        options: ['Photosynthesis', 'Respiration', 'Fermentation', 'Combustion'],
        correctAnswer: 'Photosynthesis'
    },
    {
        question: 'Who wrote the play "Romeo and Juliet"?',
        options: ['William Shakespeare', 'Charles Dickens', 'Mark Twain', 'Jane Austen'],
        correctAnswer: 'William Shakespeare'
    },
    {
        question: 'What is the largest planet in our solar system?',
        options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
        correctAnswer: 'Jupiter'
    },
   {
            question: 'Which planet is known as the "Morning Star" or "Evening Star"?',
            options: ['Mars', 'Venus', 'Mercury', 'Neptune'],
            correctAnswer: 'Venus'
        },
        {
            question: 'What is the largest ocean on Earth?',
            options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
            correctAnswer: 'Pacific Ocean'
        },
        {
            question: 'Who painted the "Sistine Chapel Ceiling"?',
            options: ['Leonardo da Vinci', 'Raphael', 'Michelangelo', 'Pablo Picasso'],
            correctAnswer: 'Michelangelo'
        },
        {
            question: 'What is the unit of electric current?',
            options: ['Volt', 'Watt', 'Ampere', 'Ohm'],
            correctAnswer: 'Ampere'
        },
        {
            question: 'What is the largest land animal?',
            options: ['Elephant', 'Giraffe', 'Hippopotamus', 'Rhinoceros'],
            correctAnswer: 'Elephant'
        },
        {
            question: 'What is the study of celestial bodies and the universe called?',
            options: ['Biology', 'Astronomy', 'Geology', 'Chemistry'],
            correctAnswer: 'Astronomy'
        },
        {
            question: 'Which gas do plants release during photosynthesis?',
            options: ['Carbon Dioxide', 'Oxygen', 'Nitrogen', 'Hydrogen'],
            correctAnswer: 'Oxygen'
        },
        {
            question: 'What is the process of liquid turning into vapor called?',
            options: ['Melting', 'Freezing', 'Boiling', 'Condensation'],
            correctAnswer: 'Boiling'
        },
        {
            question: 'Which famous scientist developed the theory of evolution by natural selection?',
            options: ['Isaac Newton', 'Charles Darwin', 'Galileo Galilei', 'Albert Einstein'],
            correctAnswer: 'Charles Darwin'
        },
        {
            question: 'What is the chemical symbol for gold?',
            options: ['Au', 'Ag', 'Go', 'Gl'],
            correctAnswer: 'Au'
        },
        {
            question: 'Which gas is responsible for the Earth\'s ozone layer?',
            options: ['Carbon Dioxide', 'Methane', 'Oxygen', 'Ozone'],
            correctAnswer: 'Ozone'
        },
        {
            question: 'What is the smallest particle of an element?',
            options: ['Atom', 'Molecule', 'Neutron', 'Proton'],
            correctAnswer: 'Atom'
        },
        {
            question: 'Which planet is known as the "Blue Planet"?',
            options: ['Venus', 'Earth', 'Mars', 'Neptune'],
            correctAnswer: 'Earth'
        },
        {
            question: 'What is the hardest natural substance known?',
            options: ['Gold', 'Diamond', 'Platinum', 'Silver'],
            correctAnswer: 'Diamond'
        },
        {
            question: 'What is the unit of measurement for frequency?',
            options: ['Hertz', 'Watt', 'Newton', 'Ampere'],
            correctAnswer: 'Hertz'
        },
        {
            question: 'Which gas is responsible for the greenhouse effect?',
            options: ['Carbon Dioxide', 'Oxygen', 'Nitrogen', 'Hydrogen'],
            correctAnswer: 'Carbon Dioxide'
        },
        {
            question: 'Which planet is known as the "Red Planet"?',
            options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
            correctAnswer: 'Mars'
        },
        {
            question: 'What is the largest mammal in the world?',
            options: ['Elephant', 'Whale', 'Giraffe', 'Hippopotamus'],
            correctAnswer: 'Whale'
        },
        {
            question: 'What is the process by which plants make their own food?',
            options: ['Photosynthesis', 'Respiration', 'Fermentation', 'Combustion'],
            correctAnswer: 'Photosynthesis'
        },
        {
            question: 'Who wrote the play "Romeo and Juliet"?',
            options: ['William Shakespeare', 'Charles Dickens', 'Mark Twain', 'Jane Austen'],
            correctAnswer: 'William Shakespeare'
        }

// ... (previous code)

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
