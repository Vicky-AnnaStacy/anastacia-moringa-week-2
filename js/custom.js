const Male_Names = ["Kwasi","Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame" ];
const Female_Names = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama" ];
const Day_Of_The_Week = ["Sunday","Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday" ];
 
var name;
var date = null;
var gender =  null;
var username;
var actualAkhanName;
var year;
var Month;
var century;
var day;
var DayOfWeek;
var akhanName = null;
 function Name(){
let  year =document.getElementById("year").value;
let month = number(document.getElementById("Month").value);
let day = number(document.getElementById("day").value);
let genders = document.getElementById("gender");

function gettingGender(){
for (let gender of genders){
    if(gender.checked){
        return gender.value;
    }
}
}
 
let valueOfGender = gettingGender();
console.log(valueOfGender);
 }


 
    
 
