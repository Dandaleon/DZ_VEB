'use strict';
let i = 10;
let timerId = setInterval(function() {
        document.getElementById("timer").innerText = i;
        if (i === 0) {
          document.getElementById('timer').classList.add("none");
          name = prompt('Whats your name?');
  		  age = prompt('How old are you?');
        }
        i--;
    }, 1000);
let name;
let age;
if(age<18)
{
alert("You are not allowed to visit this website!");
}
if(18<=age && age<=22)
{
let question = confirm('Are you sure you want to continue?');
if(question==true)
{
alert(`Welcome, ${name}!`);
}
else{
alert('You are not allowed to visit this website.');
}
}
if(age>22){
alert(`Welcome, ${name}!`);
}
