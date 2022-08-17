const input1 = document.getElementById("number1")
const Rate = document.querySelector("input#number2")
let lenghtConvert = document.querySelector(".box1 .output")
let VolumeConvert = document.querySelector(".box2 .output")
let MassConvert = document.querySelector(".box3 .output")
let feedback = document.querySelector("div.tank")
let vert = document.querySelector(".box .output") 
const convert = document.querySelector("button.act")
let values = [];

let Convert = function(){
  volume();
  mass();
  rlength();
  if(  Rate.value != 0){
    box()
  }
}

convert.addEventListener("click", Convert)

function box(){
   con =  input1.value * Rate.value
   conInv = input1.value * (1 / Rate.value)
   document.querySelector(".box .output").textContent = `${input1.value} ${values[0]}(s) = ${con.toFixed(2)} ${values[1]}(s) | ${input1.value} ${values[1]}(s) = ${conInv.toFixed(2)} ${values[0]}(s)`
 }

function rlength(){
  con =  input1.value * 3.281
  conInv = input1.value * 0.305
  lenghtConvert.textContent = `${input1.value} Meter(s) = ${con.toFixed(4)} Feet | ${input1.value} Feet = ${conInv.toFixed(4)} Meter(s)`
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
      let ans2 = prompt("To?", "")
      if(ans2 === ""){
        alert("Please specify a value")
      }else if(ans2 === null){
        alert('Please specify a value')
      }else{
        feedback.innerHTML += `<div class="box">
        <span class="mea">${ans} to ${ans2}</span>
        <span class="output"></span>
                  </div>`
             alert('New rate added')
             values.push(`${ans}`, `${ans2}`)
    }
  }
}
}
