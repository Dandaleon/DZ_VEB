'use strict';

function filterBy(list, dataType) {
    let newArray = list.filter(function(item) {
        return typeof (item) !== dataType ;
    });
    console.log(newArray);
    return newArray;
}
let i = 10;
let timerId = setInterval(function() {
        document.getElementById("timer").innerText = i;
        if (i === 0) {
         document.getElementById('timer').classList.add("none");
         filterBy(['hello', 'world', 23, '23', null], 'string');
        }
        i--;
    }, 1000);

