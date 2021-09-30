var hypForm= document.querySelector("#hyp-form");
var hypOutput= document.querySelector("#hypOut");


hypForm.addEventListener('submit', calculateHyp)

function calculateHyp(event){
  event.preventDefault();
  const formResult= new FormData(hypForm);
  var hypot= 0
  for(let value of formResult.values()){
    hypot= hypot+ (parseInt(value) * parseInt(value))
    console.log(hypot)
  }
  result= Math.sqrt(hypot)
  console.log(result)

  hypOutput.innerText="The hypotenues for this triangle is : "+ result.toFixed(3) + " cm";
}
