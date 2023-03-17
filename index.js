const input1 = document.getElementById("number1")
const newRate= document.querySelector("button#new-rate")
let lenghtConvert = document.querySelector(".box1 .output")
let VolumeConvert = document.querySelector(".box2 .output")
let MassConvert = document.querySelector(".box3 .output")
let feedback = document.querySelector("div.tank2")
let vert = document.querySelector(".box .output") 
const convert = document.querySelector("button#act")
let values = [];
let storedrates = []
const savedRates = JSON.parse(localStorage.getItem("rates"))


newRate.addEventListener("click", quest)

let Convert = function(){
  volume();
  mass();
  rlength();
  conver(storedrates)
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

    } else if(ans === null) {
      alert('Please specify a value')
    }
    else{

      let ans2 = prompt("To?", "")

      if (ans2 === "") {
        alert("Please specify a value")
         
      } else if (ans2 === null) {

        alert('Please specify a value')

      }
      else {
        let ans3 = prompt(`How much is a ${ans} to a ${ans2}`, "")

        if(ans3 === ""){

          alert('Please specify a value')

        } else if (ans3 === null)
        {

          alert('Please specify a value')

        }
        else{
        storedrates.push({rate1: ans, rate2: ans2, rateValue:ans3})
        localStorage.setItem("rates", JSON.stringify(storedrates))
        alert('New rate added')
        render(storedrates)
        }
      }
   } 
  }
}


function render(rates){

  let codeBlock = ""

  for (let i = 0; i < rates.length; i++){
    codeBlock += `
    <div class="box">
    <span class="mea">${rates[i].rate1} to ${rates[i].rate2}</span>
    <span class="output"></span>
    </div>
    `
  }
  feedback.innerHTML = codeBlock;

}


if (savedRates){
  storedrates = savedRates
  render(storedrates)
}



function conver(rates){

  let codeBlock = ""

  for (let i = 0; i < rates.length; i++){
    con =  input1.value * rates[i].rateValue
    conInv = input1.value * (1 / rates[i].rateValue)
    codeBlock += `
    <div class="box">
    <span class="mea">${rates[i].rate1} to ${rates[i].rate2}</span>
    <span class="output">${input1.value} ${rates[i].rate1}(s) = ${con.toFixed(2)} ${rates[i].rate2}(s) | ${input1.value} ${rates[i].rate2}(s) = ${conInv.toFixed(2)} ${rates[i].rate1}(s)</span>
    </div>
    `
  }

  feedback.innerHTML = codeBlock;

}

