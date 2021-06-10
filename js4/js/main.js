'use strict';


function createNewUser(){
    let newUser = {
        getLogin: function() {
            return console.log(this.firstName[0].toLowerCase() + this.secondName.toLowerCase()) ;
        }
    };
    let i = 10;
let timerId = setInterval(function() {
        document.getElementById("timer").innerText = i;
        if (i === 0) {
         document.getElementById('timer').classList.add("none");
         newUser.firstName = prompt("Write your first name");
         newUser.secondName = prompt("Write your second name");
         newUser.getLogin();
 		return newUser;
        }
        i--;
    }, 1000);
        


}
createNewUser();
