let femaleAkanName = ["Akosua" ,"Adwoa","Abeena","Akua", "Yaa","AFua","Ama"];
let maleAkanName =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
let days  = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
console.log(days)

forms.addEventListener('submit',akanGenerate);
const dateInput = document.getElementById('date');
const genderInput = document.getElementById('gender');


function akanGenerate(event) {
 
  // prevents default behaviour of how the browser behaves ie refreshes itself
event.preventDefault()
// New date of specific value user will put//
let d = new Date(dateInput.value)
let day = days[d.getDay()]
if (day == "Sunday" && genderInput.value == "Male"){
  alert("Your Akan Name is Kwasi");
} else if(day == "Sunday" && genderInput.value == "Female"){
  alert("Your Akan Name is Akosua");
}else if(day == "Monday" && genderInput.value == "Male"){
  alert("Your Akan Name is Kwadwo") 
}else if(day == "Monday" && genderInput.value == "Female"){
  alert("Your Akan Name is Adwoa")
}else if(day == "Tuesday" && genderInput.value == "Male"){
  alert("Your Akan Name is Kwabeena");
}else if(day == "Tuesday" && genderInput.value == "Female"){
  alert("Your Akan Name is Abeena") 
}else if(day == "Wednesday" && genderInput.value == "Male"){
  alert("Your Akan Name is Kwaku")
} else if(day == "Wednesday" && genderInput.value == "Female"){
  alert("Your Akan Name is Akua");
}else if(day == "Thursday" && genderInput.value == "Male"){
  alert("Your Akan Name is Yaw") 
}else if(day == "Thursday" && genderInput.value == "Female"){
  alert("Your Akan Name is Yaa")
}else if(day == "Friday" && genderInput.value == "Male"){
  alert("Your Akan Name is Kofi");
}else if(day == "Friday" && genderInput.value == "Female"){
  alert("Your Akan Name is Afua") 
}else if(day == "Saturday" && genderInput.value == "Male"){
  alert("Your Akan Name is Kwame")
}else if (day == 'Saturday' && genderInput.value == "Female"){
  alert("Your Akan Name is Ama")
}

  
if(dateInput.value == ''){
  alert("Error ! You are required to input your Date of Birth and Gender")
}
}
