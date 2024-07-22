const container = document.querySelector(".container")
const questionBox = document.querySelector(".question")
const choicesBox = document.querySelector(".choices")
const nextBtn = document.querySelector(".nextBtn")
const scoreCard = document.querySelector(".scoreCard")
const alert = document.querySelector('.alert')
const startBtn = document.querySelector('.startBtn')
const timer = document.querySelector('.timer')
const skipBtn = document.querySelector('.skipBtn');


const quiz = [
    {
        "question": "रैखिक समीकरणों का ज्यामितीय प्रतिनिधित्व क्या है?",
        "choices": [
            "रेखा",
            "वृत्त",
            "त्रिभुज",
            "समांतर चतुर्भुज"
        ],
        "answer": "रेखा"
    },
    {
        "question": "प्रतिस्थापन विधि का उपयोग करके रैखिक समीकरणों को कैसे हल किया जाता है?",
        "choices": [
            "गुणन",
            "विलोपन",
            "प्रतिस्थापन",
            "घटाव"
        ],
        "answer": "प्रतिस्थापन"
    },
    {
        "question": "दो चरों वाले रैखिक समीकरण के सामान्य रूप क्या है?",
        "choices": [
            "Ax + By = C",
            "Ax^2 + By^2 = C",
            "Ax^3 + By^3 = C",
            "A/B = C"
        ],
        "answer": "Ax + By = C"
    },
    {
        "question": "दो रैखिक समीकरणों का हल क्या होता है?",
        "choices": [
            "समाधान बिन्दु",
            "रेखा",
            "समांतर चतुर्भुज",
            "त्रिभुज"
        ],
        "answer": "समाधान बिन्दु"
    },
    {
        "question": "विलोपन विधि का उपयोग करके रैखिक समीकरणों को कैसे हल किया जाता है?",
        "choices": [
            "प्रतिस्थापन",
            "विलोपन",
            "गुणन",
            "घटाव"
        ],
        "answer": "विलोपन"
    },
    {
        "question": "समांतर रेखाओं का हल क्या होता है?",
        "choices": [
            "एक समाधान",
            "कोई समाधान नहीं",
            "असंख्य समाधान",
            "दो समाधान"
        ],
        "answer": "कोई समाधान नहीं"
    },
    {
        "question": "सहगामी रेखाओं का हल क्या होता है?",
        "choices": [
            "एक समाधान",
            "कोई समाधान नहीं",
            "असंख्य समाधान",
            "दो समाधान"
        ],
        "answer": "असंख्य समाधान"
    },
    {
        "question": "क्रैमर नियम का उपयोग किसके लिए किया जाता है?",
        "choices": [
            "मैट्रिक्स हल करने के लिए",
            "वेक्टर हल करने के लिए",
            "रैखिक समीकरणों के युग्म को हल करने के लिए",
            "गणितीय गणना के लिए"
        ],
        "answer": "रैखिक समीकरणों के युग्म को हल करने के लिए"
    },
    {
        "question": "दो रैखिक समीकरणों के हल के लिए निर्धारक विधि का उपयोग कैसे किया जाता है?",
        "choices": [
            "विलोपन",
            "क्रैमर नियम",
            "प्रतिस्थापन",
            "घटाव"
        ],
        "answer": "क्रैमर नियम"
    },
    {
        "question": "रैखिक समीकरणों के ग्राफ का उपयोग करके हल कैसे किया जाता है?",
        "choices": [
            "विलोपन विधि",
            "ग्राफ पर रेखाओं का प्रतिच्छेदन",
            "प्रतिस्थापन विधि",
            "निर्धारक विधि"
        ],
        "answer": "ग्राफ पर रेखाओं का प्रतिच्छेदन"
    },
    {
        "question": "रैखिक समीकरण का एक उदाहरण क्या है?",
        "choices": [
            "2x + 3y = 5",
            "x^2 + y^2 = 9",
            "x^3 + y^3 = 27",
            "x/y = 4"
        ],
        "answer": "2x + 3y = 5"
    },
    {
        "question": "यदि दो रेखाएँ प्रतिच्छेद करती हैं, तो उनका हल क्या होता है?",
        "choices": [
            "एक समाधान",
            "कोई समाधान नहीं",
            "असंख्य समाधान",
            "दो समाधान"
        ],
        "answer": "एक समाधान"
    },
    {
        "question": "रैखिक समीकरणों को हल करने के लिए कौन सी विधि सबसे सरल है?",
        "choices": [
            "प्रतिस्थापन विधि",
            "विलोपन विधि",
            "निर्धारक विधि",
            "ग्राफिक विधि"
        ],
        "answer": "प्रतिस्थापन विधि"
    },
    {
        "question": "दो रैखिक समीकरणों के समाधान को किस प्रकार प्रदर्शित किया जाता है?",
        "choices": [
            "ग्राफ के रूप में",
            "समीकरण के रूप में",
            "मूल्य के रूप में",
            "सूत्र के रूप में"
        ],
        "answer": "ग्राफ के रूप में"
    },
    {
        "question": "रैखिक समीकरणों का युग्म किसके द्वारा हल किया जा सकता है?",
        "choices": [
            "प्रतिस्थापन विधि",
            "हटाने की विधि",
            "क्रॉस गुणन विधि",
            "सभी"
        ],
        "answer": "सभी"
    },
    {
        "question": "प्रतिस्थापन विधि से हल करने के लिए पहले किस समीकरण को हल किया जाता है?",
        "choices": [
            "पहला",
            "दूसरा",
            "कोई भी",
            "दोनों"
        ],
        "answer": "कोई भी"
    },
    {
        "question": "यदि ax + by = c और dx + ey = f हों और a/d ≠ b/e, तो युग्म के कितने समाधान होते हैं?",
        "choices": [
            "एक",
            "दो",
            "तीन",
            "अनंत"
        ],
        "answer": "एक"
    },
    {
        "question": "यदि दो रैखिक समीकरणों का हल एक ही बिंदु पर हो, तो वे रेखाएँ कैसी होती हैं?",
        "choices": [
            "समानांतर",
            "अप्रतिच्छेद",
            "प्रतिच्छेद",
            "असमानांतर"
        ],
        "answer": "प्रतिच्छेद"
    },
    {
        "question": "दो रैखिक समीकरणों का हल कैसे निकाला जाता है?",
        "choices": [
            "प्रतिस्थापन विधि",
            "गौस विधि",
            "क्रम निर्धारण विधि",
            "सभी"
        ],
        "answer": "सभी"
    },
    {
        "question": "यदि दो रैखिक समीकरणों का कोई हल नहीं है, तो वे रेखाएँ कैसी होती हैं?",
        "choices": [
            "समानांतर",
            "प्रतिच्छेद",
            "अप्रतिच्छेद",
            "असमानांतर"
        ],
        "answer": "समानांतर"
    },
    {
        "question": "दो रैखिक समीकरणों का हल कितने प्रकार का हो सकता है?",
        "choices": [
            "एक",
            "दो",
            "तीन",
            "असीमित"
        ],
        "answer": "तीन"
    },
    {
        "question": "यदि दो रैखिक समीकरणों का असीमित हल है, तो वे रेखाएँ कैसी होती हैं?",
        "choices": [
            "समानांतर",
            "प्रतिच्छेद",
            "अप्रतिच्छेद",
            "समान रेखा"
        ],
        "answer": "समान रेखा"
    },
    {
        "question": "प्रतिस्थापन विधि में किसका उपयोग किया जाता है?",
        "choices": [
            "एक समीकरण को दूसरे में प्रतिस्थापित करना",
            "दोनों समीकरणों को जोड़ना",
            "दोनों समीकरणों को घटाना",
            "दोनों समीकरणों को गुणा करना"
        ],
        "answer": "एक समीकरण को दूसरे में प्रतिस्थापित करना"
    },
    {
        "question": "क्रम निर्धारण विधि में किसका उपयोग किया जाता है?",
        "choices": [
            "क्रम निर्धारण",
            "प्रतिस्थापन",
            "गुणा",
            "विभाजन"
        ],
        "answer": "क्रम निर्धारण"
    },
    {
        "question": "गौस विधि में किसका उपयोग किया जाता है?",
        "choices": [
            "गौस एलिमिनेशन",
            "गौस प्रतिस्थापन",
            "गौस गुणा",
            "गौस विभाजन"
        ],
        "answer": "गौस एलिमिनेशन"
    },
    {
        "question": "दो रैखिक समीकरणों का हल निकालने के लिए सबसे सरल विधि कौन सी है?",
        "choices": [
            "प्रतिस्थापन विधि",
            "क्रम निर्धारण विधि",
            "गौस विधि",
            "सभी"
        ],
        "answer": "प्रतिस्थापन विधि"
    },
    {
        "question": "यदि दो रैखिक समीकरणों का हल एक ही बिंदु पर हो, तो वे रेखाएँ कैसी होती हैं?",
        "choices": [
            "समानांतर",
            "अप्रतिच्छेद",
            "प्रतिच्छेद",
            "असमानांतर"
        ],
        "answer": "प्रतिच्छेद"
    },
    {
        "question": "दो रैखिक समीकरणों का हल निकालने के लिए कौन सी विधि सबसे उपयुक्त है?",
        "choices": [
            "प्रतिस्थापन विधि",
            "क्रम निर्धारण विधि",
            "गौस विधि",
            "सभी"
        ],
        "answer": "सभी"
    },
    {
        "question": "यदि दो रैखिक समीकरणों का कोई हल नहीं है, तो वे रेखाएँ कैसी होती हैं?",
        "choices": [
            "समानांतर",
            "प्रतिच्छेद",
            "अप्रतिच्छेद",
            "असमानांतर"
        ],
        "answer": "समानांतर"
    },
    {
        "question": "दो रैखिक समीकरणों का हल कितने प्रकार का हो सकता है?",
        "choices": [
            "एक",
            "दो",
            "तीन",
            "असीमित"
        ],
        "answer": "तीन"
    },
    {
        "question": "यदि दो रैखिक समीकरणों का असीमित हल है, तो वे रेखाएँ कैसी होती हैं?",
        "choices": [
            "समानांतर",
            "प्रतिच्छेद",
            "अप्रतिच्छेद",
            "समान रेखा"
        ],
        "answer": "समान रेखा"
    },
    {
        "question": "प्रतिस्थापन विधि में किसका उपयोग किया जाता है?",
        "choices": [
            "एक समीकरण को दूसरे में प्रतिस्थापित करना",
            "दोनों समीकरणों को जोड़ना",
            "दोनों समीकरणों को घटाना",
            "दोनों समीकरणों को गुणा करना"
        ],
        "answer": "एक समीकरण को दूसरे में प्रतिस्थापित करना"
    },
    {
        "question": "दो रैखिक समीकरणों का हल निकालें: 2x + 3y = 6 और 4x - y = 5",
        "choices": [
            "(1, 2)",
            "(2, 0)",
            "(0, 2)",
            "(1, 1)"
        ],
        "answer": "(1, 1)"
    },
    {
        "question": "दो रैखिक समीकरणों का हल निकालें: x + 2y = 7 और 3x - y = 5",
        "choices": [
            "(2, 3)",
            "(1, 3)",
            "(3, 2)",
            "(2, 2)"
        ],
        "answer": "(2, 3)"
    },
    {
        "question": "दो रैखिक समीकरणों का हल निकालें: 3x + 4y = 10 और 2x - y = 1",
        "choices": [
            "(2, 1)",
            "(1, 2)",
            "(3, 1)",
            "(1, 1)"
        ],
        "answer": "(2, 1)"
    },
    {
        "question": "दो रैखिक समीकरणों का हल निकालें: 5x - 2y = 4 और 3x + y = 5",
        "choices": [
            "(1, 2)",
            "(2, 1)",
            "(1, 1)",
            "(2, 2)"
        ],
        "answer": "(1, 2)"
    },
    {
        "question": "दो रैखिक समीकरणों का हल निकालें: x - y = 2 और 2x + y = 8",
        "choices": [
            "(2, 0)",
            "(3, 1)",
            "(2, 1)",
            "(3, 2)"
        ],
        "answer": "(3, 1)"
    },
    {
        "question": "दो रैखिक समीकरणों का हल निकालें: 4x + 3y = 24 और x - y = 2",
        "choices": [
            "(3, 4)",
            "(4, 3)",
            "(2, 3)",
            "(3, 2)"
        ],
        "answer": "(3, 4)"
    },
    {
        "question": "दो रैखिक समीकरणों का हल निकालें: 2x + y = 5 और 3x - y = 4",
        "choices": [
            "(1, 3)",
            "(2, 1)",
            "(3, 1)",
            "(1, 2)"
        ],
        "answer": "(2, 1)"
    },
    {
        "question": "दो रैखिक समीकरणों का हल निकालें: x + y = 6 और 2x - y = 4",
        "choices": [
            "(2, 4)",
            "(3, 3)",
            "(4, 2)",
            "(2, 2)"
        ],
        "answer": "(4, 2)"
    },
    {
        "question": "दो रैखिक समीकरणों का हल निकालें: 3x - 2y = 5 और x + y = 3",
        "choices": [
            "(2, 1)",
            "(1, 2)",
            "(3, 1)",
            "(2, 2)"
        ],
        "answer": "(2, 1)"
    },
    {
        "question": "दो रैखिक समीकरणों का हल निकालें: 4x - y = 7 और 2x + 3y = 1",
        "choices": [
            "(2, -1)",
            "(1, 2)",
            "(3, 1)",
            "(2, 1)"
        ],
        "answer": "(2, -1)"
    }
]


let currectQuestionIndex = 0;
let score = 0;
let quizOver = false;
let timeLeft = 60;
let timerId = null;

const showQuestions = () => {
    const questionDetails = quiz[currectQuestionIndex]
    // console.log(questionDetails)
    questionBox.innerHTML = questionDetails.question;

    choicesBox.textContent = ''
    for (let i = 0; i < questionDetails.choices.length; i++) {
        const currentChoice = questionDetails.choices[i]
        const choiceDiv = document.createElement('div')
        choiceDiv.textContent = currentChoice;
        choiceDiv.classList.add('choice')
        choicesBox.appendChild(choiceDiv)
        choiceDiv.addEventListener('click', () => {
            if (choiceDiv.classList.contains('selected')) {
                choiceDiv.classList.remove('selected');
            }
            else {
                choiceDiv.classList.add('selected')
            }
        })

    }
    if (currectQuestionIndex < quiz.length) {
        startTimer();
    }
}
const showScore = () => {
    questionBox.textContent = '';
    choicesBox.textContent = '';
    scoreCard.textContent = `You scored ${score} out of ${quiz.length}`;
    displayAlert("you have completed quiz")
    nextBtn.textContent = "Encore"
    quizOver = true;
    timer.style.display = 'none'
}

const checkAnswer = () => {
    const selectedChoice = document.querySelector('.choice.selected');
    if (selectedChoice.textContent === quiz[currectQuestionIndex].answer) {

        displayAlert("Correct answwer")
        rightSound.play();
        score++;

    }
    else {
        displayAlert(`Wrong answer! ${quiz[currectQuestionIndex].answer} is the correct answer `)
        selectedChoice.style.backgroundColor = 'red';
        wrongSound.play();

    }
    timeLeft = 60;
    currectQuestionIndex++;
    if (currectQuestionIndex < quiz.length) {

        showQuestions();
    }
    else {
        showScore();
        stopTimer();
        // quizOver = true;
        // timer.style.display = 'none'

    }
}
const displayAlert = (msg) => {
    alert.style.display = 'block';
    alert.textContent = msg;
    setTimeout(() => {
        alert.style.display = 'none'

    }, 1000)

}
const startTimer = () => {
    clearInterval(timerId)
    timer.textContent = timeLeft;
    const countDown = () => {
        timeLeft--;
        timer.textContent = timeLeft;

        if (timeLeft === 0) {
            timeEndSound.play();
            const confirmUser = confirm('Time Up!! Do you want to play the quiz again')

            if (confirmUser) {
                timeLeft = 15
                startQuiz()
            }
            else {
                startBtn.style.display = 'block'
                container.style.display = 'none'
                return;
            }

        }
    }
    timerId = setInterval(countDown, 1000)
}
const stopTimer = () => {
    clearInterval(timerId)

}

const shuffleQuestion = () => {
    for (let i = quiz.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [quiz[i], quiz[j]] = [quiz[j], quiz[i]];
    }
    currectQuestionIndex = 0;
    showQuestions();
}

const startQuiz = () => {
    timeLeft = 60;
    timer.style.display = 'flex'
    shuffleQuestion()

}

// Function to handle skip button click
const skipQuestion = () => {
    if (quizOver) {
        // If quiz is over, reset and start quiz again
        nextBtn.textContent = 'Next';
        scoreCard.textContent = '';
        currectQuestionIndex = 0;
        startQuiz();
        quizOver = false;
        score = 0;
    } else {
        // Move to the next question
        currectQuestionIndex++;
        if (currectQuestionIndex < quiz.length) {
            showQuestions();
        } else {
            showScore();
            stopTimer();
        }
    }
};

// Add event listener for skip button click
skipBtn.addEventListener('click', skipQuestion);


startBtn.addEventListener('click', () => {
    startBtn.style.display = 'none'
    container.style.display = 'block'
    startQuiz()


})

nextBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const selectedChoice = document.querySelector('.choice.selected');
    if (!selectedChoice && nextBtn.textContent === "Next") {
        displayAlert('select your answer')
        return
    }
    if (quizOver) {
        nextBtn.textContent = 'Next';
        scoreCard.textContent = ''
        currectQuestionIndex = 0
        startQuiz();
        quizOver = false;
        score = 0
    }
    else {
        checkAnswer()
    }
})
