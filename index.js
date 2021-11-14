let femaleAkanName = ["Akosua" ,"Adwoa","Abeena","Akua", "Yaa","AFua","Ama"]
let maleAkanName =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
let days = ["Sunday","Monday","Tuesday","Thursday","Friday","Saturday"]

document.getElementById('forms').addEventListener('submit', akanGenerate());
const dateInput = document.getElementById('date')
const genderInput = document.getElementById('gender')


function akanGenerate(event) {
  // prevents default brhaviour of how the browser behaves ie refreshes itself
event.preventDefault()
// New date of soecific value user will put//
let d = new Date(dateInput.value)
let day = days[d.getDay()]
console.log(day)
alert(day)

// if(gender == " "|| date ==" "){
//   console.error("Error! You have to input both your Gender and Date of Birth fpor you to view your Akan Name")
// }

}