// //document.getElementById("countno").innerText = 5;
// let count = 5;
// count = 3;

// count = 1;

// console.log(count);

//intialize count as 0
//event listener
//increment
//change the count-el in the html
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count=0;
function increment(){
    count++;
    document.getElementById('count-el').innerText = count;
    
}
function save(){
    let countStr =count + " - "

    saveEl.textContent += countStr; //we use textContent instead of innerText as text Content also read non human characters like " " unlike innerText
    //console.log(count);
    countEl.textContent = 0;
}
