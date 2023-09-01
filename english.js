const questionElement = document.getElementById('question');
const options = document.querySelectorAll('.option');
const resultElement = document.getElementById('result');
const progressBar = document.getElementById('progress-bar');


const questions = [
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
        correctAnswer: "William Shakespeare"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
        correctAnswer: "Leonardo da Vinci"
    },
    {
        question: "Which famous speech begins with 'I have a dream'?",
        options: ["Martin Luther King Jr.'s speech", "John F. Kennedy's inaugural address", "Winston Churchill's speech", "Abraham Lincoln's Gettysburg Address"],
        correctAnswer: "Martin Luther King Jr.'s speech"
    },
    {
        question: "Which novel is written by George Orwell and is a dystopian portrayal of a totalitarian state?",
        options: ["1984", "Brave New World", "Fahrenheit 451", "The Hunger Games"],
        correctAnswer: "1984"
    },
    {
        question: "What is a synonym for 'happy'?",
        options: ["Sad", "Angry", "Joyful", "Tired"],
        correctAnswer: "Joyful"
    },
    {
        question: "Choose the word that is the nearest opposite in meaning to 'brave'.",
        options: ["Cowardly", "Timid", "Fearful", "Shy"],
        correctAnswer: "Cowardly"
    },
    {
        question: "Which word is pronounced as /kwɪt/?",
        options: ["Quit", "Quiet", "Quick", "Quilt"],
        correctAnswer: "Quit"
    },
    {
        question: "What is a synonym for 'large'?",
        options: ["Tiny", "Huge", "Small", "Little"],
        correctAnswer: "Huge"
    },
    {
        question: "Choose the word that is the nearest opposite in meaning to 'victory'.",
        options: ["Loss", "Win", "Triumph", "Success"],
        correctAnswer: "Loss"
    },
    {
        question: "Which word is pronounced as /ɪnˈkluːd/?",
        options: ["Excluded", "Included", "Enclosed", "Intended"],
        correctAnswer: "Included"
    },
    {
        question: "What is a synonym for 'fearless'?",
        options: ["Anxious", "Terrified", "Courageous", "Nervous"],
        correctAnswer: "Courageous"
    },
    {
        question: "Choose the word that is the nearest opposite in meaning to 'generous'.",
        options: ["Selfish", "Kind", "Giving", "Altruistic"],
        correctAnswer: "Selfish"
    },
    {
        question: "Which word is pronounced as /ˈsaɪkəl/?",
        options: ["Cycle", "Cyclone", "Sickle", "Sick"],
        correctAnswer: "Cycle"
    },
    {
        question: "What is a synonym for 'sudden'?",
        options: ["Gradual", "Slow", "Unexpected", "Predictable"],
        correctAnswer: "Unexpected"
    },
{
    question: "Which novel is set in the fictional land of Middle-earth?",
    options: ["Pride and Prejudice", "To Kill a Mockingbird", "The Lord of the Rings", "1984"],
    correctAnswer: "The Lord of the Rings",
    category: "Literature"
},
{
    question: "Who is the author of the novel '1984'?",
    options: ["George Orwell", "J.D. Salinger", "F. Scott Fitzgerald", "Aldous Huxley"],
    correctAnswer: "George Orwell",
    category: "Literature"
},
{
    question: "Which famous playwright wrote 'Hamlet'?",
    options: ["Oscar Wilde", "Arthur Miller", "William Shakespeare", "Samuel Beckett"],
    correctAnswer: "William Shakespeare",
    category: "Literature"
},
{
    question: "In which book does the character Holden Caulfield appear?",
    options: ["The Great Gatsby", "Catcher in the Rye", "To Kill a Mockingbird", "Lord of the Flies"],
    correctAnswer: "Catcher in the Rye",
    category: "Literature"
},
{
    question: "Which novel features the characters Scout, Jem, and Atticus Finch?",
    options: ["Fahrenheit 451", "To Kill a Mockingbird", "Brave New World", "The Catcher in the Rye"],
    correctAnswer: "To Kill a Mockingbird",
    category: "Literature"
},
{
    question: "What is the name of the famous detective created by Arthur Conan Doyle?",
    options: ["Hercule Poirot", "Sherlock Holmes", "Miss Marple", "Nancy Drew"],
    correctAnswer: "Sherlock Holmes",
    category: "Literature"
},
{
    question: "Which book tells the story of a young girl named Alice who falls down a rabbit hole?",
    options: ["The Lion, the Witch, and the Wardrobe", "Alice's Adventures in Wonderland", "Charlotte's Web", "Matilda"],
    correctAnswer: "Alice's Adventures in Wonderland",
    category: "Literature"
},
{
    question: "In 'The Great Gatsby,' who is the mysterious millionaire that throws extravagant parties?",
    options: ["Jay Gatsby", "Nick Carraway", "Tom Buchanan", "George Wilson"],
    correctAnswer: "Jay Gatsby",
    category: "Literature"
},
{
    question: "Which Shakespearean play features the character Macbeth?",
    options: ["Othello", "King Lear", "Macbeth", "Julius Caesar"],
    correctAnswer: "Macbeth",
    category: "Literature"
},
{
    question: "Who wrote the novel 'Pride and Prejudice'?",
    options: ["Jane Austen", "Charlotte Brontë", "Emily Dickinson", "Virginia Woolf"],
    correctAnswer: "Jane Austen",
    category: "Literature"
}
// Continue adding more questions...




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
