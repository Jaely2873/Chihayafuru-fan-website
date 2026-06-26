var score = 0;
var correctAnswerScore = 0;
var wrongAnswerScore = 0;
var questionCount = 0;

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

array()

const quizData =[{
    question:"Who did Chihaya end up with",
    options: ["Arata", "Taichi"],
    answer:"Taichi",

}]

function wrongAnswer(){
    wrongAnswerScore +=1;
    questionCount +=1;
}

function correctAnswer(){
    correctAnswerScore += 1;
    questionCount +=1;
}

const currentQuiz = quizData.question;
