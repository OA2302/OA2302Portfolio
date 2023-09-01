const questionElement = document.getElementById('question');
const options = document.querySelectorAll('.option');
const resultElement = document.getElementById('result');
const progressBar = document.getElementById('progress-bar');


const questions = [
    {
        question: "What is the basic accounting equation?",
        options: ["Assets = Liabilities + Equity", "Revenue = Expenses", "Income = Expenditure", "Profit = Loss"],
        correctAnswer: "Assets = Liabilities + Equity"
    },
    {
        question: "Which financial statement shows a company's financial position at a specific point in time?",
        options: ["Income Statement", "Cash Flow Statement", "Balance Sheet", "Statement of Retained Earnings"],
        correctAnswer: "Balance Sheet"
    },
    {
        question: "What is depreciation?",
        options: ["An increase in the value of an asset", "A decrease in the value of an asset", "A liability of a business", "A type of expense"],
        correctAnswer: "A decrease in the value of an asset"
    },
    {
        question: "What is the formula for calculating gross profit?",
        options: ["Gross Profit = Revenue - Expenses", "Gross Profit = Revenue - Cost of Goods Sold", "Gross Profit = Assets - Liabilities", "Gross Profit = Net Income - Dividends"],
        correctAnswer: "Gross Profit = Revenue - Cost of Goods Sold"
    },
    {
        question: "What is the primary purpose of a cash flow statement?",
        options: ["To show a company's financial position", "To report revenue and expenses", "To provide details about assets and liabilities", "To show cash inflows and outflows"],
        correctAnswer: "To show cash inflows and outflows"
    },
    {
        question: "What is an accounts receivable?",
        options: ["Money owed to a company by its customers", "Money a company owes to its suppliers", "Money invested by the owners", "Money used to purchase fixed assets"],
        correctAnswer: "Money owed to a company by its customers"
    },
    {
        question: "What does ROI stand for in accounting?",
        options: ["Return on Investment", "Rate of Inflation", "Revenue Over Income", "Risk of Insolvency"],
        correctAnswer: "Return on Investment"
    },
    {
        question: "What is the process of matching expenses with the revenue they generate called?",
        options: ["Depreciation", "Amortization", "Accrual", "Expense Matching"],
        correctAnswer: "Expense Matching"
    },
    {
        question: "Which accounting principle states that an entity should use the same accounting methods and procedures from period to period?",
        options: ["Matching Principle", "Consistency Principle", "Materiality Principle", "Conservatism Principle"],
        correctAnswer: "Consistency Principle"
    },
    {
        question: "What is the purpose of the double-entry accounting system?",
        options: ["To track cash transactions only", "To ensure that revenues and expenses are balanced", "To record transactions in two separate ledgers", "To maintain the accounting equation"],
        correctAnswer: "To maintain the accounting equation"
    },
        {
            question: "What is the difference between gross profit and net profit?",
            options: ["There is no difference; they are the same", "Gross profit includes all expenses, while net profit does not", "Gross profit excludes cost of goods sold, while net profit includes all expenses", "Gross profit is revenue minus expenses, while net profit is revenue minus all costs"],
            correctAnswer: "Gross profit is revenue minus expenses, while net profit is revenue minus all costs"
        },
        {
            question: "What is a liability in accounting?",
            options: ["A company's assets", "An amount owed by a company to its creditors", "The owner's investment in the business", "A company's revenues"],
            correctAnswer: "An amount owed by a company to its creditors"
        },
        {
            question: "What is the purpose of the trial balance in accounting?",
            options: ["To identify errors and ensure the books are balanced", "To prepare financial statements", "To record daily transactions", "To calculate taxes owed"],
            correctAnswer: "To identify errors and ensure the books are balanced"
        },
        {
            question: "What is the purpose of the accrual accounting method?",
            options: ["To record transactions only when cash is exchanged", "To recognize revenue and expenses when they are incurred, regardless of when cash is exchanged", "To defer revenue recognition until cash is received", "To record transactions only when they are paid for"],
            correctAnswer: "To recognize revenue and expenses when they are incurred, regardless of when cash is exchanged"
        },
        {
            question: "What is the primary purpose of the statement of cash flows?",
            options: ["To report a company's financial position", "To show revenue and expenses", "To provide information about assets and liabilities", "To show how cash is generated and used"],
            correctAnswer: "To show how cash is generated and used"
        },
        {
            question: "What is goodwill in accounting?",
            options: ["The value of physical assets owned by a company", "The value of a company's brand and reputation", "The money a company owes to its suppliers", "The total equity of a company"],
            correctAnswer: "The value of a company's brand and reputation"
        },
        {
            question: "What is the purpose of the matching principle in accounting?",
            options: ["To ensure that expenses are recorded before revenues", "To match the cost of producing goods with the revenue they generate", "To match cash inflows with cash outflows", "To match liabilities with assets"],
            correctAnswer: "To match the cost of producing goods with the revenue they generate"
        },
        {
            question: "What does EBITDA stand for in accounting?",
            options: ["Earnings Before Income Tax Depreciation and Amortization", "Effective Business Income Tax and Depreciation Assessment", "Economic Balance In Transaction, Debt, and Assets", "Estimated Budget for Income, Taxes, Debt, and Assets"],
            correctAnswer: "Earnings Before Income Tax Depreciation and Amortization"
        },
        {
            question: "Which accounting principle dictates that financial statements should reflect the assumption that the business will continue operating?",
            options: ["Matching Principle", "Going Concern Principle", "Conservatism Principle", "Materiality Principle"],
            correctAnswer: "Going Concern Principle"
        },
        {
            question: "What is the purpose of the income statement?",
            options: ["To show a company's financial position at a specific point in time", "To report a company's cash inflows and outflows", "To provide details about assets and liabilities", "To show revenues, expenses, and net income for a specific period"],
            correctAnswer: "To show revenues, expenses, and net income for a specific period"
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
