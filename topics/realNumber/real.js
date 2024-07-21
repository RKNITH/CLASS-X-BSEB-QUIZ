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
        "question": "वास्तविक संख्याओं के किस गुणधर्म के अनुसार, a + b = b + a होता है?",
        "choices": [
            "गुणन",
            "जोड़",
            "घटाव",
            "विभाजन"
        ],
        "answer": "जोड़"
    },
    {
        "question": "वास्तविक संख्याओं के लिए, a(b + c) = ab + ac किस गुणधर्म का उदाहरण है?",
        "choices": [
            "संयुक्त गुणधर्म",
            "सम्बद्धता गुणधर्म",
            "परिवर्तनीयता गुणधर्म",
            "पार्श्विकता गुणधर्म"
        ],
        "answer": "संयुक्त गुणधर्म"
    },
    {
        "question": "किसी संख्या का वर्गमूल निकालने का प्रतीक क्या है?",
        "choices": [
            "√",
            "∫",
            "∆",
            "π"
        ],
        "answer": "√"
    },
    {
        "question": "वास्तविक संख्याओं का कौन सा गुणधर्म दर्शाता है कि a(bc) = (ab)c?",
        "choices": [
            "सम्बद्धता गुणधर्म",
            "संयुक्त गुणधर्म",
            "परिवर्तनीयता गुणधर्म",
            "पार्श्विकता गुणधर्म"
        ],
        "answer": "सम्बद्धता गुणधर्म"
    },
    {
        "question": "एक गैर-समाप्त और गैर-दोहरेहरित दशमलव संख्या को क्या कहते हैं?",
        "choices": [
            "गैर-तर्कसंगत संख्या",
            "तर्कसंगत संख्या",
            "पूर्ण संख्या",
            "पूर्णांक"
        ],
        "answer": "गैर-तर्कसंगत संख्या"
    },
    {
        "question": "√2 किस प्रकार की संख्या है?",
        "choices": [
            "तर्कसंगत संख्या",
            "गैर-तर्कसंगत संख्या",
            "पूर्णांक",
            "प्राकृतिक संख्या"
        ],
        "answer": "गैर-तर्कसंगत संख्या"
    },
    {
        "question": "वास्तविक संख्याओं में, (a + b) + c = a + (b + c) किस गुणधर्म को दर्शाता है?",
        "choices": [
            "सम्बद्धता गुणधर्म",
            "संयुक्त गुणधर्म",
            "परिवर्तनीयता गुणधर्म",
            "वितरण गुणधर्म"
        ],
        "answer": "सम्बद्धता गुणधर्म"
    },
    {
        "question": "किस प्रकार की संख्या को एक वास्तविक संख्या और एक गैर-तर्कसंगत संख्या के बीच रखा जाता है?",
        "choices": [
            "गैर-तर्कसंगत संख्या",
            "तर्कसंगत संख्या",
            "पूर्णांक",
            "शून्य"
        ],
        "answer": "गैर-तर्कसंगत संख्या"
    },
    {
        "question": "π किस प्रकार की संख्या है?",
        "choices": [
            "तर्कसंगत संख्या",
            "गैर-तर्कसंगत संख्या",
            "पूर्णांक",
            "प्राकृतिक संख्या"
        ],
        "answer": "गैर-तर्कसंगत संख्या"
    },
    {
        "question": "√3 + √3 का मान क्या होगा?",
        "choices": [
            "2√3",
            "3√3",
            "√6",
            "6"
        ],
        "answer": "2√3"
    },
    {
        "question": "1.4142135... किस संख्या का मान है?",
        "choices": [
            "√2",
            "π",
            "e",
            "√3"
        ],
        "answer": "√2"
    },
    {
        "question": "वास्तविक संख्याओं का कौन सा गुणधर्म दर्शाता है कि a + 0 = a?",
        "choices": [
            "संयुक्त गुणधर्म",
            "शून्य गुणधर्म",
            "परिवर्तनीयता गुणधर्म",
            "सम्बद्धता गुणधर्म"
        ],
        "answer": "शून्य गुणधर्म"
    },
    {
        "question": "वास्तविक संख्याओं का कौन सा गुणधर्म दर्शाता है कि a × 1 = a?",
        "choices": [
            "गुणनात्मक पहचान गुणधर्म",
            "जोड़ गुणधर्म",
            "घटाव गुणधर्म",
            "विभाजन गुणधर्म"
        ],
        "answer": "गुणनात्मक पहचान गुणधर्म"
    },
    {
        "question": "√64 का मान क्या है?",
        "choices": [
            "6",
            "7",
            "8",
            "9"
        ],
        "answer": "8"
    },
    {
        "question": "किसी संख्या का वर्गमूल निकालने की प्रक्रिया को क्या कहते हैं?",
        "choices": [
            "घनमूल निकालना",
            "घन निकालना",
            "वर्ग निकालना",
            "वर्गमूल निकालना"
        ],
        "answer": "वर्गमूल निकालना"
    },
    {
        "question": "किस प्रकार की संख्या को दो भिन्न संख्याओं के रूप में नहीं लिखा जा सकता?",
        "choices": [
            "गैर-तर्कसंगत संख्या",
            "तर्कसंगत संख्या",
            "पूर्ण संख्या",
            "पूर्णांक"
        ],
        "answer": "गैर-तर्कसंगत संख्या"
    },
    {
        "question": "5√2 + 3√2 का मान क्या होगा?",
        "choices": [
            "8√2",
            "2√2",
            "√2",
            "10"
        ],
        "answer": "8√2"
    },
    {
        "question": "√9 का मान क्या होगा?",
        "choices": [
            "1",
            "2",
            "3",
            "4"
        ],
        "answer": "3"
    },
    {
        "question": "किस प्रकार की संख्या का कोई मापांकीय मान नहीं होता?",
        "choices": [
            "तर्कसंगत संख्या",
            "गैर-तर्कसंगत संख्या",
            "मूल संख्या",
            "पूर्णांक"
        ],
        "answer": "गैर-तर्कसंगत संख्या"
    },
    {
        "question": "0.3333... को किस प्रकार की संख्या कहते हैं?",
        "choices": [
            "गैर-तर्कसंगत संख्या",
            "तर्कसंगत संख्या",
            "पूर्ण संख्या",
            "पूर्णांक"
        ],
        "answer": "तर्कसंगत संख्या"
    },
    {
        "question": "वास्तविक संख्याओं में, (a × b) × c = a × (b × c) किस गुणधर्म को दर्शाता है?",
        "choices": [
            "संयुक्त गुणधर्म",
            "सम्बद्धता गुणधर्म",
            "परिवर्तनीयता गुणधर्म",
            "वितरण गुणधर्म"
        ],
        "answer": "सम्बद्धता गुणधर्म"
    },
    {
        "question": "वास्तविक संख्याओं के किस गुणधर्म के अनुसार, a × b = b × a होता है?",
        "choices": [
            "संयुक्त गुणधर्म",
            "सम्बद्धता गुणधर्म",
            "परिवर्तनीयता गुणधर्म",
            "वितरण गुणधर्म"
        ],
        "answer": "परिवर्तनीयता गुणधर्म"
    },
    {
        "question": "3√2 - 2√2 का मान क्या होगा?",
        "choices": [
            "√2",
            "5√2",
            "6",
            "1"
        ],
        "answer": "√2"
    },
    {
        "question": "2 का वर्गमूल क्या होगा?",
        "choices": [
            "√2",
            "2",
            "1",
            "4"
        ],
        "answer": "√2"
    },
    {
        "question": "3 + √5 किस प्रकार की संख्या है?",
        "choices": [
            "तर्कसंगत संख्या",
            "गैर-तर्कसंगत संख्या",
            "पूर्णांक",
            "प्राकृतिक संख्या"
        ],
        "answer": "गैर-तर्कसंगत संख्या"
    },
    {
        "question": "वास्तविक संख्याओं का कौन सा गुणधर्म दर्शाता है कि a × (b + c) = ab + ac?",
        "choices": [
            "वितरण गुणधर्म",
            "परिवर्तनीयता गुणधर्म",
            "संयुक्त गुणधर्म",
            "सम्बद्धता गुणधर्म"
        ],
        "answer": "वितरण गुणधर्म"
    },
    {
        "question": "√25 का मान क्या होगा?",
        "choices": [
            "4",
            "5",
            "6",
            "7"
        ],
        "answer": "5"
    },
    {
        "question": "वास्तविक संख्याओं का कौन सा गुणधर्म दर्शाता है कि a × 0 = 0?",
        "choices": [
            "शून्य गुणधर्म",
            "परिवर्तनीयता गुणधर्म",
            "संयुक्त गुणधर्म",
            "सम्बद्धता गुणधर्म"
        ],
        "answer": "शून्य गुणधर्म"
    },
    {
        "question": "2√3 × 3√2 का मान क्या होगा?",
        "choices": [
            "6",
            "6√6",
            "5√6",
            "4"
        ],
        "answer": "6√6"
    },
    {
        "question": "वास्तविक संख्याओं में, a + (-a) = 0 किस गुणधर्म को दर्शाता है?",
        "choices": [
            "संयुक्त गुणधर्म",
            "परिवर्तनीयता गुणधर्म",
            "प्रतिलोम गुणधर्म",
            "सम्बद्धता गुणधर्म"
        ],
        "answer": "प्रतिलोम गुणधर्म"
    },
    {
        "question": "√50 का सरलतम रूप क्या है?",
        "choices": [
            "5√2",
            "√10",
            "2√5",
            "5√10"
        ],
        "answer": "5√2"
    },
    {
        "question": "यदि a = 2 और b = 3, तो a² + b² का मान क्या होगा?",
        "choices": [
            "13",
            "12",
            "25",
            "9"
        ],
        "answer": "13"
    },
    {
        "question": "वास्तविक संख्याओं में, 1 + (-1) का मान क्या होगा?",
        "choices": [
            "1",
            "0",
            "-1",
            "2"
        ],
        "answer": "0"
    },
    {
        "question": "किस प्रकार की संख्या 1.732... है?",
        "choices": [
            "गैर-तर्कसंगत संख्या",
            "तर्कसंगत संख्या",
            "पूर्णांक",
            "मिश्र संख्या"
        ],
        "answer": "गैर-तर्कसंगत संख्या"
    },
    {
        "question": "√121 का मान क्या होगा?",
        "choices": [
            "10",
            "11",
            "12",
            "13"
        ],
        "answer": "11"
    },
    {
        "question": "वास्तविक संख्याओं का कौन सा गुणधर्म दर्शाता है कि a - a = 0?",
        "choices": [
            "परिवर्तनीयता गुणधर्म",
            "प्रतिलोम गुणधर्म",
            "संयुक्त गुणधर्म",
            "वितरण गुणधर्म"
        ],
        "answer": "प्रतिलोम गुणधर्म"
    },
    {
        "question": "वास्तविक संख्याओं का कौन सा गुणधर्म दर्शाता है कि a × (b + c) = ab + ac?",
        "choices": [
            "वितरण गुणधर्म",
            "सम्बद्धता गुणधर्म",
            "परिवर्तनीयता गुणधर्म",
            "प्रतिलोम गुणधर्म"
        ],
        "answer": "वितरण गुणधर्म"
    },
    {
        "question": "वास्तविक संख्याओं में, a × (b × c) = (a × b) × c किस गुणधर्म को दर्शाता है?",
        "choices": [
            "संयुक्त गुणधर्म",
            "सम्बद्धता गुणधर्म",
            "परिवर्तनीयता गुणधर्म",
            "वितरण गुणधर्म"
        ],
        "answer": "सम्बद्धता गुणधर्म"
    },
    {
        "question": "वास्तविक संख्याओं में, a + b = b + a किस गुणधर्म को दर्शाता है?",
        "choices": [
            "परिवर्तनीयता गुणधर्म",
            "संयुक्त गुणधर्म",
            "सम्बद्धता गुणधर्म",
            "वितरण गुणधर्म"
        ],
        "answer": "परिवर्तनीयता गुणधर्म"
    },
    {
        "question": "यदि a = 3 और b = 4, तो a² - b² का मान क्या होगा?",
        "choices": [
            "7",
            "5",
            "25",
            "0"
        ],
        "answer": "7"
    },
    {
        "question": "वास्तविक संख्याओं में, 1/2 + 1/2 का मान क्या होगा?",
        "choices": [
            "1",
            "0",
            "2",
            "1/4"
        ],
        "answer": "1"
    },
    {
        "question": "किस प्रकार की संख्या 22/7 है?",
        "choices": [
            "गैर-तर्कसंगत संख्या",
            "तर्कसंगत संख्या",
            "पूर्णांक",
            "प्राकृतिक संख्या"
        ],
        "answer": "तर्कसंगत संख्या"
    },
    {
        "question": "वास्तविक संख्याओं में, a × 1 = a किस गुणधर्म को दर्शाता है?",
        "choices": [
            "गुणनात्मक पहचान गुणधर्म",
            "परिवर्तनीयता गुणधर्म",
            "संयुक्त गुणधर्म",
            "सम्बद्धता गुणधर्म"
        ],
        "answer": "गुणनात्मक पहचान गुणधर्म"
    },
    {
        "question": "√144 का मान क्या होगा?",
        "choices": [
            "10",
            "11",
            "12",
            "13"
        ],
        "answer": "12"
    },
    {
        "question": "वास्तविक संख्याओं का कौन सा गुणधर्म दर्शाता है कि a + 0 = a?",
        "choices": [
            "संयुक्त गुणधर्म",
            "परिवर्तनीयता गुणधर्म",
            "शून्य गुणधर्म",
            "सम्बद्धता गुणधर्म"
        ],
        "answer": "शून्य गुणधर्म"
    },
    {
        "question": "2√3 + 3√3 का मान क्या होगा?",
        "choices": [
            "5√3",
            "6√3",
            "1√3",
            "0"
        ],
        "answer": "5√3"
    },
    {
        "question": "वास्तविक संख्याओं में, a + (b + c) = (a + b) + c किस गुणधर्म को दर्शाता है?",
        "choices": [
            "परिवर्तनीयता गुणधर्म",
            "संयुक्त गुणधर्म",
            "सम्बद्धता गुणधर्म",
            "वितरण गुणधर्म"
        ],
        "answer": "सम्बद्धता गुणधर्म"
    },
    {
        "question": "किस प्रकार की संख्या 0.1010010001... है?",
        "choices": [
            "गैर-तर्कसंगत संख्या",
            "तर्कसंगत संख्या",
            "पूर्ण संख्या",
            "पूर्णांक"
        ],
        "answer": "गैर-तर्कसंगत संख्या"
    },
    {
        "question": "वास्तविक संख्याओं में, a(bc) = (ab)c किस गुणधर्म को दर्शाता है?",
        "choices": [
            "सम्बद्धता गुणधर्म",
            "वितरण गुणधर्म",
            "संयुक्त गुणधर्म",
            "परिवर्तनीयता गुणधर्म"
        ],
        "answer": "सम्बद्धता गुणधर्म"
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
    questionBox.textContent = questionDetails.question;

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
