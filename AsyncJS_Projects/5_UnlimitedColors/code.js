const body = document.querySelector('#body')
const randomColor = function getRandomRGB() {
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256); 
    const b = Math.floor(Math.random() * 256); 
    return `rgb(${r}, ${g}, ${b})`; 
}
let stopIt ; 
const changeBg = function(){
    let random = randomColor() ; 
    
    body.style.backgroundColor = random ; 
}
const changing = function(){
    document.getElementById('start').disabled = true ; 
    stopIt = setInterval(changeBg , 1000)
} 


const start = document.getElementById('start').addEventListener('click' , changing ) ; 
const stop = document.getElementById('stop').addEventListener('click' ,function(){
    clearInterval(stopIt)
    document.getElementById('start').disabled = false ; 
    console.log("stopped")
}) ; 

