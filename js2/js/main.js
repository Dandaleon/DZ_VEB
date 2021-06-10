'use strict';
let i = 10;
let timerId = setInterval(function() {
        document.getElementById("timer").innerText = i;
        if (i === 0) {
         document.getElementById('timer').classList.add("none");
         let second=prompt("Enter the number");
        }
        i--;
    }, 1000);

let arr=[];

for(let first=0;first<=second;first++)
{
    if(first % 5 == 0){
        arr.push(first);
    }   
}
if(arr.length != 0)
{
        console.log(arr);
}
else{ 
        console.log('Sorry, no numbers');
}