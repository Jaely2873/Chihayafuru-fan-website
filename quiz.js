
var correctAnswerScore = 0;
var wrongAnswerScore = 0;
var questionCount = 0;
var totalScore = 4;

const questionElement = document.getElementById("question");
const answer = document.getElementById("answers");
const resultScore = document.getElementById("resultScore");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const resultButton = document.getElementById("result");

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
},
 {
     question:"",
     options:["",""],
     answer:"",
 }
]

function wrongAnswer(){
    wrongAnswerScore --;
    questionCount++;
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
    resultButton.innerText = "End quiz";
  //  resultButton.addEventListener("click", endQuiz());
    question.options.forEach(options => {
        answer1.addEventListener("click", () => {
            isAnswerCorrect(answer1.innerText);
            showQuestion();
                endQuiz();
            
     }
    )})
    question.options.forEach(options => {
        answer2.addEventListener("click", () => {
            isAnswerCorrect(answer2.innerText);
            showQuestion();
                endQuiz();
            
        })})
    }


function isAnswerCorrect(selectedAnswer){
    if(selectedAnswer === quizData[questionCount].answer){
        correctAnswer();
        console.log(questionCount);
    } else {
        console.log("hello world");
    } 
}


function endQuiz(){
    if(questionCount === 5){
        answer1.style.display = 'none';
        answer2.style.display = 'none';
        questionElement.style.display = 'none';
        showResults();
    }

 }
function showResults(){
    resultScore.innerText = `You scored a ${wrongAnswerScore + correctAnswerScore} out of 4!`
}
 
  showQuestion();