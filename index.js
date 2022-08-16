const input1 = document.getElementById("number1")
const Rate = document.querySelector("input#number2")
let lenghtConvert = document.querySelector(".box1 .output")
let  conlength = ""
let VolumeConvert = document.querySelector(".box2 .output")
let MassConvert = document.querySelector(".box3 .output")
let feedback = document.querySelector("div.tank")
const convert = document.querySelector("button.act")

convert.addEventListener("click", function(){
  length();
  volume()
  mass()
})
function length(){
  con =  input1.value * 3.281
  conInv = input1.value * 0.305
  lenghtConvert.textContent = `${input1.value} Meter(s) = ${con.toFixed(4)} feet | ${input1.value} feet = ${conInv.toFixed(4)} Meter(s)`
}
function volume(){
  con =  input1.value * 0.264
  conInv = input1.value * 3.788
  VolumeConvert.textContent = `${input1.value} Liter(s) = ${con.toFixed(4)} Gallons | ${input1.value} Gallons = ${conInv.toFixed(4)} Liter(s)`
}
function mass(){
  con =  input1.value * 2.204
  conInv = input1.value * 0.434
  MassConvert.textContent = `${input1.value} Kilogram(s) = ${con.toFixed(4)} Pounds | ${input1.value} Pounds = ${conInv.toFixed(4)} Kilogram(s)`

}
function quest(){
  let test =  confirm("Would you like to create a new Rate?")
  if (test == true){
    let ans = prompt("What is the name of the rate","")
    if (ans === ""){
      alert('Please specify a value')
    }else if(ans === null) {
      alert('Please specify a value')
    }else{
      feedback.innerHTML += `<div class="box1">
                                  <span class="mea">${ans}</span>
                                 <span class="output"></span>
                                            </div>`
      alert('New rate added')
    }
  }
}

