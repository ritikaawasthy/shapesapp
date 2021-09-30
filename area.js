var areaForm= document.querySelector("#area-form ");
var areaOutput= document.querySelector("#area-output");


areaForm.addEventListener('submit', calculateArea)

function calculateArea(event){
  event.preventDefault();
  const formResult= new FormData(areaForm);
  var area= 1
  for(let value of formResult.values()){
    area= area * value
  }
  result= 0.5 * area

  areaOutput.innerText="The area for this triangle is : "+ result + " cm";
}
