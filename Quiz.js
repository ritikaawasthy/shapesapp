var quizForm= document.querySelector("#quiz-form");
var submitBtn= document.querySelector("#quiz-submit");
var output= document.querySelector("#output");
const correctAns=["180", "Obtuse", "Isosceles", "28", "false", "Equilateral", "false", "45", "false", "Median", "false", "30", "true"];

let score=0;
let index=0;

//submitBtn.addEventListener("click", calculateScore);
quizForm.addEventListener('submit', calculateScore)

function calculateScore(event){
  event.preventDefault();
  const formResult= new FormData(quizForm);
  for(let value of formResult.values()){
    if(value== correctAns[index]){
      score=score+1
    }
    index=index+1
  }
  output.innerText="Thankyou for completing the Quiz. Your score is : "+ score;
}
