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
        "question": "द्विघात समीकरण का मानक रूप क्या है?",
        "choices": [
            "ax<sup>2</sup> + bx + c = 0",
            "ax + b = 0",
            "ax<sup>3</sup> + bx<sup>2</sup> + c = 0",
            "a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>"
        ],
        "answer": "ax<sup>2</sup> + bx + c = 0"
    },
    {
        "question": "द्विघात समीकरणों को हल करने के लिए कौन सी विधि का उपयोग किया जाता है?",
        "choices": [
            "गुणनखंडन",
            "विलोपन",
            "प्रतिस्थापन",
            "जोड़"
        ],
        "answer": "गुणनखंडन"
    },
    {
        "question": "द्विघात समीकरण ax<sup>2</sup> + bx + c = 0 में a, b, c को क्या कहते हैं?",
        "choices": [
            "अघातक",
            "घातक",
            "गुणांक",
            "राशि"
        ],
        "answer": "गुणांक"
    },
    {
        "question": "द्विघात समीकरण के लिए मूलदंड (discriminant) का सूत्र क्या है?",
        "choices": [
            "b<sup>2</sup> - 4ac",
            "b<sup>2</sup> + 4ac",
            "b<sup>2</sup> - 2ac",
            "b<sup>2</sup> + 2ac"
        ],
        "answer": "b<sup>2</sup> - 4ac"
    },
    {
        "question": "यदि द्विघात समीकरण के मूल समान हैं, तो मूलदंड का मान क्या होता है?",
        "choices": [
            "धनात्मक",
            "ऋणात्मक",
            "शून्य",
            "अपरिभाषित"
        ],
        "answer": "शून्य"
    },
    {
        "question": "द्विघात समीकरण ax<sup>2</sup> + bx + c = 0 का एक मूल -3 है, तो दूसरा मूल क्या हो सकता है?",
        "choices": [
            "3",
            "-3",
            "2a - 3",
            "3a + b"
        ],
        "answer": "3a + b"
    },
    {
        "question": "द्विघात समीकरण के मूलों का योग क्या होता है?",
        "choices": [
            "-b/a",
            "b/a",
            "c/a",
            "-c/a"
        ],
        "answer": "-b/a"
    },
    {
        "question": "द्विघात समीकरण के मूलों का गुणनफल क्या होता है?",
        "choices": [
            "c/a",
            "-b/a",
            "b/a",
            "-c/a"
        ],
        "answer": "c/a"
    },
    {
        "question": "द्विघात समीकरण x<sup>2</sup> - 5x + 6 = 0 के मूल क्या हैं?",
        "choices": [
            "2 और 3",
            "-2 और -3",
            "2 और -3",
            "-2 और 3"
        ],
        "answer": "2 और 3"
    },
    {
        "question": "द्विघात समीकरण x<sup>2</sup> - 7x + 10 = 0 के मूल क्या हैं?",
        "choices": [
            "5 और 2",
            "3 और 4",
            "-5 और -2",
            "-3 और -4"
        ],
        "answer": "5 और 2"
    },
    {
        "question": "द्विघात समीकरण के लिए पूर्ण वर्ग विधि किस स्थिति में प्रयुक्त होती है?",
        "choices": [
            "जब ax<sup>2</sup> + bx + c = 0 पूर्ण वर्ग हो",
            "जब केवल ax<sup>2</sup> + bx = 0 हो",
            "जब केवल x<sup>2</sup> + c = 0 हो",
            "जब कोई विकल्प न हो"
        ],
        "answer": "जब ax<sup>2</sup> + bx + c = 0 पूर्ण वर्ग हो"
    },
    {
        "question": "द्विघात समीकरण x<sup>2</sup> + 4x + 4 = 0 का एक मूल क्या है?",
        "choices": [
            "-2",
            "2",
            "4",
            "-4"
        ],
        "answer": "-2"
    },
    {
        "question": "द्विघात समीकरण x<sup>2</sup> + 6x + 9 = 0 का एक मूल क्या है?",
        "choices": [
            "-3",
            "3",
            "6",
            "-6"
        ],
        "answer": "-3"
    },
    {
        "question": "द्विघात समीकरण के लिए कौन सा सूत्र प्रयुक्त होता है?",
        "choices": [
            "(-b ± √(b<sup>2</sup> - 4ac)) / 2a",
            "(-b ± √(b<sup>2</sup> + 4ac)) / 2a",
            "(-b ± √(b<sup>2</sup> - 2ac)) / 2a",
            "(-b ± √(b<sup>2</sup> + 2ac)) / 2a"
        ],
        "answer": "(-b ± √(b<sup>2</sup> - 4ac)) / 2a"
    },
    {
        "question": "द्विघात समीकरण x<sup>2</sup> - 8x + 16 = 0 के मूल क्या हैं?",
        "choices": [
            "4 और 4",
            "-4 और -4",
            "4 और -4",
            "-4 और 4"
        ],
        "answer": "4 और 4"
    },
    {
        "question": "द्विघात समीकरण x<sup>2</sup> - 4x + 4 = 0 के मूल क्या हैं?",
        "choices": [
            "2 और 2",
            "-2 और -2",
            "2 और -2",
            "-2 और 2"
        ],
        "answer": "2 और 2"
    },
    {
        "question": "द्विघात समीकरण x<sup>2</sup> + 5x + 6 = 0 का एक मूल क्या है?",
        "choices": [
            "-2",
            "-3",
            "2",
            "3"
        ],
        "answer": "-2"
    },
    {
        "question": "द्विघात समीकरण x<sup>2</sup> + 7x + 12 = 0 के मूल क्या हैं?",
        "choices": [
            "-3 और -4",
            "3 और 4",
            "-3 और 4",
            "3 और -4"
        ],
        "answer": "-3 और -4"
    },
    {
        "question": "द्विघात समीकरण 2x<sup>2</sup> - 4x + 2 = 0 के मूल क्या हैं?",
        "choices": [
            "1 और 1",
            "-1 और -1",
            "1 और -1",
            "-1 और 1"
        ],
        "answer": "1 और 1"
    },
    {
        "question": "द्विघात समीकरण x<sup>2</sup> + x - 2 = 0 के मूल क्या हैं?",
        "choices": [
            "-2 और 1",
            "2 और -1",
            "-1 और -2",
            "1 और 2"
        ],
        "answer": "-2 और 1"
    },
    {
        "question": "द्विघात समीकरण x<sup>2</sup> - x - 6 = 0 के मूल क्या हैं?",
        "choices": [
            "-2 और 3",
            "2 और -3",
            "-3 और 2",
            "3 और -2"
        ],
        "answer": "-2 और 3"
    },
    {
        "question": "द्विघात समीकरण 3x<sup>2</sup> - 12x + 12 = 0 के मूल क्या हैं?",
        "choices": [
            "2 और 2",
            "-2 और -2",
            "2 और -2",
            "-2 और 2"
        ],
        "answer": "2 और 2"
    },
    {
        "question": "द्विघात समीकरण x<sup>2</sup> + 2x - 8 = 0 के मूल क्या हैं?",
        "choices": [
            "-4 और 2",
            "4 और -2",
            "-2 और 4",
            "2 और -4"
        ],
        "answer": "-4 और 2"
    },
    {
        "question": "द्विघात समीकरण 4x<sup>2</sup> - 16x + 15 = 0 के मूल क्या हैं?",
        "choices": [
            "3.75 और 1",
            "2.5 और 1.5",
            "3 और 0.5",
            "2 और 3.5"
        ],
        "answer": "3 और 0.5"
    },
    {
        "question": "द्विघात समीकरण 2x<sup>2</sup> - 4x + 2 = 0 के मूल क्या हैं?",
        "choices": [
            "1 और 1",
            "2 और 2",
            "0 और 2",
            "-1 और 2"
        ],
        "answer": "1 और 1"
    },
    {
        "question": "द्विघात समीकरण x<sup>2</sup> - 6x + 9 = 0 के मूल क्या हैं?",
        "choices": [
            "3 और 3",
            "-3 और -3",
            "3 और -3",
            "-3 और 3"
        ],
        "answer": "3 और 3"
    },
    {
        "question": "द्विघात समीकरण x<sup>2</sup> - 1 = 0 के मूल क्या हैं?",
        "choices": [
            "1 और -1",
            "1 और 1",
            "-1 और -1",
            "0 और 1"
        ],
        "answer": "1 और -1"
    },
    {
        "question": "द्विघात समीकरण x<sup>2</sup> - 5x + 6 = 0 के मूल क्या हैं?",
        "choices": [
            "2 और 3",
            "-2 और -3",
            "2 और -3",
            "-2 और 3"
        ],
        "answer": "2 और 3"
    },
    {
        "question": "द्विघात समीकरण 5x<sup>2</sup> - 20x + 15 = 0 के मूल क्या हैं?",
        "choices": [
            "3 और 1",
            "-3 और -1",
            "3 और -1",
            "-3 और 1"
        ],
        "answer": "3 और 1"
    },
    {
        "question": "द्विघात समीकरण x<sup>2</sup> - 7x + 12 = 0 के मूल क्या हैं?",
        "choices": [
            "3 और 4",
            "-3 और -4",
            "3 और -4",
            "-3 और 4"
        ],
        "answer": "3 और 4"
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
