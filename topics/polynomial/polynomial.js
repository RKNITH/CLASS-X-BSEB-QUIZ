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
        "question": "बहुपद के शून्य क्या होते हैं?",
        "choices": [
            "समाधान",
            "विलोपन",
            "संयोजन",
            "गुणनफल"
        ],
        "answer": "समाधान"
    },
    {
        "question": "शून्यकों और बहुपदों के गुणांक के बीच क्या संबंध है?",
        "choices": [
            "गुणनफल",
            "घटाव",
            "विभाजन",
            "जोड़"
        ],
        "answer": "गुणनफल"
    },
    {
        "question": "बहुपद की डिग्री क्या होती है?",
        "choices": [
            "सबसे बड़े घातांक की शक्ति",
            "सबसे छोटे घातांक की शक्ति",
            "घातांकों का योग",
            "घातांकों का अंतर"
        ],
        "answer": "सबसे बड़े घातांक की शक्ति"
    },
    {
        "question": "किस प्रकार का बहुपद एक चर वाले बहुपद होता है?",
        "choices": [
            "एकचर",
            "दो चर",
            "तिन चर",
            "बहु चर"
        ],
        "answer": "एकचर"
    },
    {
        "question": "बहुपद का संपूर्ण योग कैसे ज्ञात किया जाता है?",
        "choices": [
            "घातांकों का योग",
            "गुणांक का योग",
            "बहुपद का जोड़",
            "घातांकों का अंतर"
        ],
        "answer": "गुणांक का योग"
    },
    {
        "question": "यदि p(x) = x<sup>2</sup> - 5x + 6, तो इसके शून्यकों का योग क्या होगा?",
        "choices": [
            "5",
            "-5",
            "6",
            "-6"
        ],
        "answer": "5"
    },
    {
        "question": "यदि p(x) = 2x<sup>2</sup> + 3x - 5, तो इसके शून्यकों का गुणनफल क्या होगा?",
        "choices": [
            "-5/2",
            "5/2",
            "3/2",
            "-3/2"
        ],
        "answer": "-5/2"
    },
    {
        "question": "किसी बहुपद के शून्यकों की संख्या किस पर निर्भर करती है?",
        "choices": [
            "बहुपद की डिग्री",
            "बहुपद के गुणांक",
            "बहुपद के चर",
            "बहुपद के स्थिरांक"
        ],
        "answer": "बहुपद की डिग्री"
    },
    {
        "question": "किसी बहुपद का मूल क्या होता है?",
        "choices": [
            "शून्य",
            "घातांक",
            "गुणांक",
            "स्थिरांक"
        ],
        "answer": "शून्य"
    },
    {
        "question": "यदि बहुपद p(x) = 3x<sup>2</sup> + x - 2 हो, तो इसके शून्यकों का गुणनफल क्या होगा?",
        "choices": [
            "-2/3",
            "2/3",
            "-1/3",
            "1/3"
        ],
        "answer": "-2/3"
    },
    {
        "question": "बहुपद के शून्यकों का गुणनफल कैसे ज्ञात किया जाता है?",
        "choices": [
            "घातांकों के गुणनफल से",
            "गुणांकों के गुणनफल से",
            "घातांकों के अंतर से",
            "गुणांकों के अंतर से"
        ],
        "answer": "गुणांकों के गुणनफल से"
    },
    {
        "question": "बहुपद के शून्यकों का जोड़ कैसे ज्ञात किया जाता है?",
        "choices": [
            "घातांकों के जोड़ से",
            "गुणांकों के जोड़ से",
            "घातांकों के अंतर से",
            "गुणांकों के अंतर से"
        ],
        "answer": "गुणांकों के जोड़ से"
    },
    {
        "question": "यदि बहुपद p(x) = x<sup>2</sup> - 4x + 4 हो, तो इसके शून्यकों का जोड़ क्या होगा?",
        "choices": [
            "4",
            "-4",
            "2",
            "-2"
        ],
        "answer": "4"
    },
    {
        "question": "यदि बहुपद p(x) = x<sup>2</sup> - 9 हो, तो इसके शून्यकों का गुणनफल क्या होगा?",
        "choices": [
            "-9",
            "9",
            "-1",
            "1"
        ],
        "answer": "-9"
    },
    {
        "question": "बहुपद का मान कैसे निकाला जाता है?",
        "choices": [
            "चर का मान देकर",
            "गुणांक का मान देकर",
            "घातांक का मान देकर",
            "स्थिरांक का मान देकर"
        ],
        "answer": "चर का मान देकर"
    },
    {
        "question": "यदि p(x) = x<sup>2</sup> - x - 6 हो, तो इसके शून्यकों का गुणनफल क्या होगा?",
        "choices": [
            "-6",
            "6",
            "-1",
            "1"
        ],
        "answer": "-6"
    },
    {
        "question": "यदि p(x) = x<sup>2</sup> + 2x + 1 हो, तो इसके शून्यकों का गुणनफल क्या होगा?",
        "choices": [
            "1",
            "-1",
            "2",
            "-2"
        ],
        "answer": "1"
    },
    {
        "question": "यदि p(x) = x<sup>3</sup> - 3x<sup>2</sup> + 3x - 1 हो, तो इसके शून्यकों का गुणनफल क्या होगा?",
        "choices": [
            "-1",
            "1",
            "3",
            "-3"
        ],
        "answer": "1"
    },
    {
        "question": "यदि p(x) = x<sup>3</sup> + 2x<sup>2</sup> - 5x - 6 हो, तो इसके शून्यकों का गुणनफल क्या होगा?",
        "choices": [
            "-6",
            "6",
            "-5",
            "5"
        ],
        "answer": "-6"
    },
    {
        "question": "किसी बहुपद के कितने शून्य हो सकते हैं?",
        "choices": [
            "डिग्री के बराबर",
            "डिग्री से कम",
            "डिग्री से अधिक",
            "स्थिरांक के बराबर"
        ],
        "answer": "डिग्री के बराबर"
    },
    {
        "question": "यदि p(x) = x<sup>4</sup> - 4x<sup>2</sup> + 4 हो, तो इसके शून्यकों का गुणनफल क्या होगा?",
        "choices": [
            "4",
            "-4",
            "2",
            "-2"
        ],
        "answer": "4"
    },
    {
        "question": "बहुपद का पूर्णांक गुणांक क्या होता है?",
        "choices": [
            "घातांक का योग",
            "गुणांक का योग",
            "घातांक का गुणनफल",
            "गुणांक का गुणनफल"
        ],
        "answer": "गुणांक का गुणनफल"
    },
    {
        "question": "यदि p(x) = x<sup>3</sup> - x<sup>2</sup> - 4x + 4 हो, तो इसके शून्यकों का गुणनफल क्या होगा?",
        "choices": [
            "4",
            "-4",
            "1",
            "-1"
        ],
        "answer": "4"
    },
    {
        "question": "किसी बहुपद के शून्यकों का जोड़ किस पर निर्भर करता है?",
        "choices": [
            "घातांक",
            "गुणांक",
            "चर",
            "स्थिरांक"
        ],
        "answer": "गुणांक"
    },
    {
        "question": "यदि p(x) = x<sup>3</sup> + 3x<sup>2</sup> + 3x + 1 हो, तो इसके शून्यकों का गुणनफल क्या होगा?",
        "choices": [
            "1",
            "-1",
            "3",
            "-3"
        ],
        "answer": "1"
    },
    {
        "question": "बहुपद के शून्यकों का गुणनफल कैसे ज्ञात किया जाता है?",
        "choices": [
            "घातांक के गुणनफल से",
            "गुणांक के गुणनफल से",
            "घातांक के अंतर से",
            "गुणांक के अंतर से"
        ],
        "answer": "गुणांक के गुणनफल से"
    },
    {
        "question": "यदि p(x) = x<sup>4</sup> - 16 हो, तो इसके शून्यकों का गुणनफल क्या होगा?",
        "choices": [
            "-16",
            "16",
            "-4",
            "4"
        ],
        "answer": "-16"
    },
    {
        "question": "यदि p(x) = x<sup>4</sup> + 4x<sup>3</sup> + 6x<sup>2</sup> + 4x + 1 हो, तो इसके शून्यकों का गुणनफल क्या होगा?",
        "choices": [
            "1",
            "-1",
            "4",
            "-4"
        ],
        "answer": "1"
    },
    {
        "question": "यदि p(x) = 2x<sup>3</sup> - 3x<sup>2</sup> + x - 1 हो, तो इसके शून्यकों का गुणनफल क्या होगा?",
        "choices": [
            "-1/2",
            "1/2",
            "-3/2",
            "3/2"
        ],
        "answer": "-1/2"
    },
    {
        "question": "यदि p(x) = x<sup>4</sup> - 4x<sup>3</sup> + 4x - 1 हो, तो इसके शून्यकों का गुणनफल क्या होगा?",
        "choices": [
            "-1",
            "1",
            "4",
            "-4"
        ],
        "answer": "-1"
    },
    {
        "question": "यदि p(x) = 3x<sup>2</sup> - 6x + 3 हो, तो इसके शून्यकों का गुणनफल क्या होगा?",
        "choices": [
            "1",
            "-1",
            "3",
            "-3"
        ],
        "answer": "1"
    },
    {
        "question": "यदि p(x) = x<sup>3</sup> + 3x<sup>2</sup> - 3x - 1 हो, तो इसके शून्यकों का गुणनफल क्या होगा?",
        "choices": [
            "-1",
            "1",
            "-3",
            "3"
        ],
        "answer": "-1"
    },
    {
        "question": "यदि p(x) = x<sup>2</sup> + x - 2 हो, तो इसके शून्यकों का गुणनफल क्या होगा?",
        "choices": [
            "-2",
            "2",
            "-1",
            "1"
        ],
        "answer": "-2"
    },
    {
        "question": "यदि p(x) = x<sup>4</sup> - x<sup>3</sup> + x<sup>2</sup> - x + 1 हो, तो इसके शून्यकों का गुणनफल क्या होगा?",
        "choices": [
            "1",
            "-1",
            "4",
            "-4"
        ],
        "answer": "1"
    },
    {
        "question": "यदि p(x) = x<sup>3</sup> - 4x + 3 हो, तो इसके शून्यकों का गुणनफल क्या होगा?",
        "choices": [
            "-3",
            "3",
            "-4",
            "4"
        ],
        "answer": "-3"
    },
    {
        "question": "यदि p(x) = x<sup>2</sup> + 4x + 4 हो, तो इसके शून्यकों का गुणनफल क्या होगा?",
        "choices": [
            "4",
            "-4",
            "2",
            "-2"
        ],
        "answer": "4"
    },
    {
        "question": "यदि p(x) = 2x<sup>4</sup> - 8x<sup>2</sup> + 4 हो, तो इसके शून्यकों का गुणनफल क्या होगा?",
        "choices": [
            "-4",
            "4",
            "-2",
            "2"
        ],
        "answer": "-4"
    },
    {
        "question": "यदि p(x) = x<sup>5</sup> - 5x<sup>3</sup> + 4x हो, तो इसके शून्यकों का गुणनफल क्या होगा?",
        "choices": [
            "4",
            "-4",
            "5",
            "-5"
        ],
        "answer": "4"
    },
    {
        "question": "यदि p(x) = x<sup>6</sup> + 6x<sup>5</sup> + 15x<sup>4</sup> + 20x<sup>3</sup> + 15x<sup>2</sup> + 6x + 1 हो, तो इसके शून्यकों का गुणनफल क्या होगा?",
        "choices": [
            "1",
            "-1",
            "6",
            "-6"
        ],
        "answer": "1"
    },
    {
        "question": "यदि p(x) = x<sup>2</sup> - 2x + 1 हो, तो इसके शून्यकों का गुणनफल क्या होगा?",
        "choices": [
            "1",
            "-1",
            "2",
            "-2"
        ],
        "answer": "1"
    },
    {
        "question": "यदि p(x) = 2x<sup>2</sup> + 3x + 1 हो, तो इसके शून्यकों का गुणनफल क्या होगा?",
        "choices": [
            "1/2",
            "-1/2",
            "3/2",
            "-3/2"
        ],
        "answer": "1/2"
    },
    {
        "question": "यदि p(x) = x<sup>3</sup> - x<sup>2</sup> - x + 1 हो, तो इसके शून्यकों का गुणनफल क्या होगा?",
        "choices": [
            "1",
            "-1",
            "3",
            "-3"
        ],
        "answer": "1"
    },
    {
        "question": "यदि p(x) = x<sup>4</sup> + x<sup>2</sup> - 2 हो, तो इसके शून्यकों का गुणनफल क्या होगा?",
        "choices": [
            "-2",
            "2",
            "1",
            "-1"
        ],
        "answer": "-2"
    },
    {
        "question": "यदि p(x) = x<sup>3</sup> + 2x<sup>2</sup> + 1 हो, तो इसके शून्यकों का गुणनफल क्या होगा?",
        "choices": [
            "1",
            "-1",
            "2",
            "-2"
        ],
        "answer": "1"
    },
    {
        "question": "यदि p(x) = x<sup>4</sup> - 4x<sup>2</sup> + 4 हो, तो इसके शून्यकों का गुणनफल क्या होगा?",
        "choices": [
            "4",
            "-4",
            "2",
            "-2"
        ],
        "answer": "4"
    },
    {
        "question": "यदि p(x) = x<sup>5</sup> + x - 1 हो, तो इसके शून्यकों का गुणनफल क्या होगा?",
        "choices": [
            "-1",
            "1",
            "5",
            "-5"
        ],
        "answer": "-1"
    },
    {
        "question": "यदि p(x) = x<sup>3</sup> + 3x<sup>2</sup> + 3x + 1 हो, तो इसके शून्यकों का गुणनफल क्या होगा?",
        "choices": [
            "1",
            "-1",
            "3",
            "-3"
        ],
        "answer": "1"
    },
    {
        "question": "यदि p(x) = x<sup>4</sup> - 4x<sup>3</sup> + 4x - 1 हो, तो इसके शून्यकों का गुणनफल क्या होगा?",
        "choices": [
            "-1",
            "1",
            "4",
            "-4"
        ],
        "answer": "-1"
    },
    {
        "question": "यदि p(x) = x<sup>2</sup> + x - 2 हो, तो इसके शून्यकों का गुणनफल क्या होगा?",
        "choices": [
            "-2",
            "2",
            "-1",
            "1"
        ],
        "answer": "-2"
    },
    {
        "question": "यदि p(x) = x<sup>5</sup> - x<sup>4</sup> + x<sup>3</sup> - x + 1 हो, तो इसके शून्यकों का गुणनफल क्या होगा?",
        "choices": [
            "1",
            "-1",
            "5",
            "-5"
        ],
        "answer": "1"
    },
    {
        "question": "यदि p(x) = 3x<sup>4</sup> - 6x<sup>2</sup> + 3 हो, तो इसके शून्यकों का गुणनफल क्या होगा?",
        "choices": [
            "1",
            "-1",
            "3",
            "-3"
        ],
        "answer": "1"
    },
    {
        "question": "यदि p(x) = x<sup>3</sup> + x<sup>2</sup> - x - 1 हो, तो इसके शून्यकों का गुणनफल क्या होगा?",
        "choices": [
            "-1",
            "1",
            "3",
            "-3"
        ],
        "answer": "-1"
    },
    {
        "question": "यदि p(x) = x<sup>2</sup> - x + 1 हो, तो इसके शून्यकों का गुणनफल क्या होगा?",
        "choices": [
            "1",
            "-1",
            "2",
            "-2"
        ],
        "answer": "1"
    },
    {
        "question": "यदि एक बहुपद p(x) की एक जड़ x = 2 है, और p(x) = x<sup>3</sup> - 6x<sup>2</sup> + 11x - 6 हो, तो p(x) के अन्य शून्यकों का पता लगाएं।",
        "choices": [
            "x = 1, x = 3",
            "x = -1, x = -3",
            "x = 2, x = 3",
            "x = 1, x = -3"
        ],
        "answer": "x = 1, x = 3"
    },
    {
        "question": "अगर p(x) = x<sup>2</sup> - 4x + 3 का एक शून्य x = 1 है, तो बहुपद का दूसरा शून्य क्या है?",
        "choices": [
            "x = 2",
            "x = 3",
            "x = 4",
            "x = -1"
        ],
        "answer": "x = 3"
    },
    {
        "question": "एक बहुपद का एक शून्य x = -2 है और बहुपद p(x) = x<sup>3</sup> + 6x<sup>2</sup> + 11x + 6 है। बहुपद के अन्य शून्यकों का पता लगाएं।",
        "choices": [
            "x = -1, x = -3",
            "x = 1, x = 3",
            "x = -2, x = -3",
            "x = 2, x = -3"
        ],
        "answer": "x = -1, x = -3"
    },
    {
        "question": "एक बहुपद p(x) = x<sup>2</sup> - 5x + 6 है और इसके शून्य x = 2 है। दूसरा शून्य क्या है?",
        "choices": [
            "x = 3",
            "x = -3",
            "x = 2",
            "x = -2"
        ],
        "answer": "x = 3"
    },
    {
        "question": "यदि एक बहुपद p(x) का एक शून्य x = -1 है और p(x) = x<sup>2</sup> + 3x + 2 है, तो बहुपद का दूसरा शून्य क्या होगा?",
        "choices": [
            "x = -2",
            "x = 2",
            "x = 3",
            "x = -3"
        ],
        "answer": "x = -2"
    },
    {
        "question": "यदि p(x) = x<sup>4</sup> - 8x<sup>2</sup> + 16 हो और x = 2 इसका एक शून्य है, तो अन्य शून्यकों का पता लगाएं।",
        "choices": [
            "x = 2, x = -2",
            "x = 2, x = -4",
            "x = 2, x = -8",
            "x = 4, x = -4"
        ],
        "answer": "x = 2, x = -2"
    },
    {
        "question": "यदि p(x) = x<sup>3</sup> + 3x<sup>2</sup> + 3x + 1 और इसका एक शून्य x = -1 है, तो अन्य शून्यकों का पता लगाएं।",
        "choices": [
            "x = -1, x = -1",
            "x = 1, x = -1",
            "x = -2, x = 1",
            "x = 2, x = -1"
        ],
        "answer": "x = -1, x = -1"
    },
    {
        "question": "एक बहुपद p(x) = x<sup>2</sup> - 2x - 8 है और इसका एक शून्य x = 4 है। बहुपद का दूसरा शून्य क्या होगा?",
        "choices": [
            "x = -2",
            "x = 2",
            "x = -4",
            "x = 3"
        ],
        "answer": "x = -2"
    },
    {
        "question": "एक बहुपद p(x) = x<sup>3</sup> - 7x + 6 है और इसका एक शून्य x = 1 है। बहुपद के अन्य शून्यकों का पता लगाएं।",
        "choices": [
            "x = -1, x = 6",
            "x = -1, x = -6",
            "x = 2, x = 3",
            "x = -2, x = -3"
        ],
        "answer": "x = 2, x = 3"
    },
    {
        "question": "यदि p(x) = x<sup>4</sup> - 5x<sup>2</sup> + 4 और x = 1 इसका एक शून्य है, तो अन्य शून्यकों का पता लगाएं।",
        "choices": [
            "x = 1, x = -1",
            "x = 2, x = -2",
            "x = 4, x = -4",
            "x = 3, x = -3"
        ],
        "answer": "x = 2, x = -2"
    },
    {
        "question": "यदि p(x) = 2x<sup>2</sup> - 3x + 1 का एक शून्य x = 1/2 है, तो बहुपद का दूसरा शून्य क्या है?",
        "choices": [
            "x = 1",
            "x = -1/2",
            "x = 3/2",
            "x = -3/2"
        ],
        "answer": "x = 1"
    },
    {
        "question": "यदि p(x) = x<sup>3</sup> + 2x<sup>2</sup> - 5x + 6 और इसका एक शून्य x = -2 है, तो अन्य शून्यकों का पता लगाएं।",
        "choices": [
            "x = 1, x = 3",
            "x = -1, x = -3",
            "x = 2, x = 3",
            "x = -2, x = -3"
        ],
        "answer": "x = 1, x = 3"
    },
    {
        "question": "एक बहुपद p(x) = x<sup>4</sup> - 4x<sup>3</sup> + 4x<sup>2</sup> - 4x + 4 है और इसका एक शून्य x = 1 है। अन्य शून्यकों का पता लगाएं।",
        "choices": [
            "x = 1, x = -1, x = 1",
            "x = 2, x = -2, x = 2",
            "x = 1, x = -1, x = -1",
            "x = 3, x = -3, x = 3"
        ],
        "answer": "x = 1, x = -1, x = 1"
    },
    {
        "question": "एक बहुपद p(x) = x<sup>2</sup> - 4x + 4 है और इसका एक शून्य x = 2 है। बहुपद का दूसरा शून्य क्या होगा?",
        "choices": [
            "x = 2",
            "x = -2",
            "x = 4",
            "x = -4"
        ],
        "answer": "x = 2"
    },
    {
        "question": "यदि p(x) = x<sup>3</sup> - 6x<sup>2</sup> + 11x - 6 हो और इसका एक शून्य x = 1 है, तो अन्य शून्यकों का पता लगाएं।",
        "choices": [
            "x = 2, x = 3",
            "x = -2, x = -3",
            "x = 2, x = -3",
            "x = -2, x = 3"
        ],
        "answer": "x = 2, x = 3"
    },
    {
        "question": "यदि p(x) = x<sup>2</sup> + x - 2 हो और इसका एक शून्य x = 1 है, तो अन्य शून्य का पता लगाएं।",
        "choices": [
            "x = -2",
            "x = 2",
            "x = 1",
            "x = -1"
        ],
        "answer": "x = -2"
    },
    {
        "question": "एक बहुपद p(x) = x<sup>3</sup> + 3x<sup>2</sup> + 3x + 1 है और इसका एक शून्य x = -1 है। अन्य शून्यकों का पता लगाएं।",
        "choices": [
            "x = -1, x = -1",
            "x = 1, x = -1",
            "x = 2, x = -2",
            "x = 1, x = 2"
        ],
        "answer": "x = -1, x = -1"
    },
    {
        "question": "राहुल ने एक बहुपद p(x) = x<sup>3</sup> - 6x<sup>2</sup> + 11x - 6 खोजा है। उसे पता चला कि बहुपद का एक शून्य x = 1 है। अन्य शून्यकों का पता लगाएं।",
        "choices": [
            "x = 1, x = 2",
            "x = 2, x = 3",
            "x = 1, x = 3",
            "x = 3, x = -3"
        ],
        "answer": "x = 2, x = 3"
    },
    {
        "question": "गीता ने एक बहुपद p(x) = x<sup>2</sup> - 5x + 6 बनाया। उसे पता चला कि बहुपद का एक शून्य x = 2 है। अन्य शून्य का पता लगाएं।",
        "choices": [
            "x = 3",
            "x = -3",
            "x = 1",
            "x = -1"
        ],
        "answer": "x = 3"
    },
    {
        "question": "एक बहुपद p(x) = x<sup>3</sup> + 6x<sup>2</sup> + 11x + 6 है। इसका एक शून्य x = -2 है। अन्य शून्यकों का पता लगाएं।",
        "choices": [
            "x = -1, x = -3",
            "x = 1, x = 3",
            "x = 2, x = 3",
            "x = -2, x = -3"
        ],
        "answer": "x = -1, x = -3"
    },
    {
        "question": "यदि p(x) = x<sup>2</sup> - 4x + 4 है और इसका एक शून्य x = 2 है, तो अन्य शून्य क्या है?",
        "choices": [
            "x = 2",
            "x = -2",
            "x = 4",
            "x = -4"
        ],
        "answer": "x = 2"
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
