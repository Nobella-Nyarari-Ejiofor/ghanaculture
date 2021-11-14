let femaleAkanName = ["Akosua" ,"Adwoa","Abeena","Akua", "Yaa","AFua","Ama"]
let maleAkanName =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
let days = ["Sunday","Monday","Tuesday", "Wednesday","Thursday","Friday","Saturday"]


forms.addEventListener('submit',akanGenerate);
const dateInput = document.getElementById('date');
const genderInput = document.getElementById('gender');


function akanGenerate(event) {
 
  // prevents default behaviour of how the browser behaves ie refreshes itself
event.preventDefault()
// New date of specific value user will put//
let d = new Date(dateInput.value)
let day = days[d.getDay()]
if (day == "Saturday" && genderInput.value == "Male"){
  alert("Your Akan Name is KWAME");
} else if(day == "Saturday" && genderInput.value == "Female"){
  alert("Your Akan Name is AMA");
}
if(dateInput.value == ''){
  alert("You are required to input your dob ")
}
}
