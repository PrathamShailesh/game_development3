// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

const num1=Math.floor(Math.random()*101)
const num2=Math.floor(Math.random()*101)
console.log(num1%num2)



// Iteration 3: Creating variables required to make the game 
var numbers=document.getElementById("number1")
var numbers2=document.getElementById("number2")

numbers.innerText=num1;
numbers2.innerText=num2;

score=parseInt(sessionStorage.getItem("score")) || 0 ;



// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
let num3;
var number3=document.getElementById("number3")

// Iteration 5: Creating a randomise function to make the game functional
const operation = Math.floor(Math.random() * 5);
function performOperation(operation, num1, num2) {
    if (operation==0){
        num3=(num1+num2)
    }
    else if (operation==1){
        num3=(num1-num2)
    }
    else if(operation==2){
        num3=(num1*num2)
        
    }
    else if(operation==3){
        num3=(num1/num2).toFixed(2)
    }
    else if(operation==4){
        num3=(num1%num2)
    }
    return num3
}
performOperation(operation, num1, num2);

number3.innerText=num3;
// Iteration 6: Making the Operators (button) functional
const btns = document.getElementById("buttons")

btns.addEventListener("click",(event)=>{
    if((num3==num1+num2) && event.target.id=="plus"){
        console.log("win")
        score+=1
        window.location.reload()
        sessionStorage.setItem("score",score)
    }
    else if((num3==num1-num2)&& event.target.id=="minus"){
        console.log("win")
        score+=1
        window.location.reload()
        sessionStorage.setItem("score",score)
    }
    else if((num3==num1*num2)&& event.target.id=="mul"){
        console.log("win")
        score+=1
        window.location.reload()
        sessionStorage.setItem("score",score)
    }
    else if((num3==(num1/num2).toFixed(2))&& event.target.id=="divide"){
        console.log("win")
        score+=1
        window.location.reload()
        sessionStorage.setItem("score",score)
    }
    else if((num3==(num1%num2)) && event.target.id=="modulus"){
        console.log("win")
        score+=1
        window.location.reload()
        sessionStorage.setItem("score",score)
    }
    else{
        window.location.href="gameover.html"
    }
})

// Iteration 7: Making Timer functional
const timer=document.getElementById("timer")
let timeLeft = 20;

timer.textContent = timeLeft;
const timerInterval = setInterval(() => {
    timeLeft--;
    timer.textContent = `${timeLeft}`;
    if (timeLeft === 0) {
        clearInterval(timerInterval);
        window.location.href="gameover.html"
    }},1000)

