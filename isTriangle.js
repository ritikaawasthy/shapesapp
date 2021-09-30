var form= document.querySelector(".left-form");
form.addEventListener('submit', calculateIfTri);
var output= document.querySelector(".tri-output");
function calculateIfTri(event){
  event.preventDefault();
  const formAns= new FormData(form)
  var sumAngles=0
  for (let value of formAns.values()){
    sumAngles= sumAngles+ parseInt(value);
  }

  if(sumAngles==180){
    output.innerText="Wohoooo! Its a valid triangle";
  }else{
    output.innerText="Oh no! The triangle is invalid";
  }

}
