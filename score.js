// Iteration 8: Making scoreboard functional
const scoreboard=document.getElementById("score-board")

const btn=document.getElementById("play-again-button")
btn.addEventListener("click",()=>{
    window.location.href="index.html"
    sessionStorage.removeItem("score")
})

scoreboard.innerText=sessionStorage.getItem("score") || 0;
