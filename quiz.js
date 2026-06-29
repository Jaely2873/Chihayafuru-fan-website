
var correctAnswerScore = 0;
var wrongAnswerScore = 0;
var questionCount = 0;
var totalScore = 4;

const questionElement = document.getElementById("question");
const answer = document.getElementById("answers");
const resultScore = document.getElementById("resultScore");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const restartButton = document.getElementById("restartButton");
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
    questionCount++;
}

function correctAnswer(){
    correctAnswerScore ++;
    questionCount ++;
}



function showQuestion(){
  //  restartButton.style.visibility = "hidden";
    const question =  quizData[questionCount];
    questionElement.innerText = question.question;
    answer1.innerText = question.options[0]
    answer2.innerText = question.options[1]
  //  resultButton.innerText = "End quiz";
        }
        answer1.addEventListener("click", () => {
            isAnswerCorrect(answer1.innerText);
            showQuestion();
            console.log("change");
                endQuiz();
     }
    )
        answer2.addEventListener("click", () => {
            isAnswerCorrect(answer2.innerText);
            console.log("change");
            showQuestion();
                endQuiz();
            
        })

            restartButton.addEventListener("click", ()=>{
                questionCount = 0;
                console.log("reset", questionCount);
                showQuestion();
                resultScore.style.display = 'none';
                answer1.style.display = 'flex';
                answer2.style.display = 'flex';
                questionElement.style.display = '';
                questionElement.style.textAlign = 'center'
            });

    


function isAnswerCorrect(selectedAnswer){
    console.log(selectedAnswer)
    if(selectedAnswer == quizData[questionCount].answer){
        correctAnswer();
        console.log(questionCount);
    } else if(selectedAnswer != quizData[questionCount].answer){
        wrongAnswer();
    } 
}


function endQuiz(){
    if(questionCount === 5){
        console.log("why are you not invisible");
        answer1.style.display = 'none';
        answer2.style.display = 'none';
        questionElement.style.display = 'none';
        showResults();
    }

 }
function showResults(){
    resultScore.style.display = 'flex';
    if(correctAnswerScore >=4){
        resultScore.innerText = `You scored a ${correctAnswerScore} out of 5! You really know the ins and outs of karuta. You're like Chihaya, you have a natural talent for the game. The path to meijin/queen is within your reach.`;
    } else if(correctAnswerScore < 4 && correctAnswerScore >=2){
        resultScore.innerText = `You scored a ${correctAnswerScore} out of 5! You're like Taichi. While you may not have the natural talent of Arata or Chihaya, with hard work, you will reach great heights.`;
    } else if(correctAnswerScore < 2){
        resultScore.innerText = `You scored a ${correctAnswerScore} out of 5! You definitly have some ways to go before you have the knowledge of a master. But don't worry! Everyone starts out somewhere`;
    }
    showQuestion();
}

 
  showQuestion();