var correctAnswerScore = 0;
var wrongAnswerScore = 0;
var questionCount = 0;

const questionElement = document.getElementById("question");
const answer = document.getElementById("answers");
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");

const quizData =[{
    question:"Who did Chihaya end up with?",
    options: ["Arata", "Taichi"],
    answer:"Taichi",

},
{
    question: "What does unmei-san translate to?",
    options:["A battle of fates", "Having really bad luck"],
    answer:"A battle of fates",
},
{
    question: "What are dead cards in karuta called?",
    options: ["karafuda", "torifuda"],
    answer: "karafuda",
},
{
    question: "Who is the author of Chihayafuru?",
    options:["Yumi Tamura", "Yuki Suegetsu"],
    answer: "Yuki Suegetsu",
},
{
    question: "How many cards does each player get at the start?",
    options: ["25", "30"],
    answer:"25",
}
]

function wrongAnswer(){
    wrongAnswerScore ++;
}

function correctAnswer(){
    correctAnswerScore ++;
    questionCount ++;
}



function showQuestion(){
    const question =  quizData[questionCount];
    questionElement.innerText = question.question;
    answer1.innerText = question.options[0]
    answer2.innerText = question.options[1]
    question.options.forEach(options => {
        answer1.addEventListener("click", () => {
            isAnswerCorrect(answer1.innerText);
            showQuestion();
     }
    )})
    question.options.forEach(options => {
        answer2.addEventListener("click", () => {
            isAnswerCorrect(answer2.innerText);
            showQuestion();
        })})
    }



function isAnswerCorrect(selectedAnswer){
    if(selectedAnswer == quizData[questionCount].answer){
        correctAnswer();
    } else{
        wrongAnswer();
    }

}
 showQuestion();