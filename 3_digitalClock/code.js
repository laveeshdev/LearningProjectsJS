let timeTag = document.getElementById('time')
 
//     // timeTag.innerHTML = currTime 
// while(new Date().toLocaleTimeString()  != timeTag.innerHTML ){
//     timeTag.innerHTML = new Date().toLocaleTimeString() ; 
    


// }
setInterval(function(){
    const currTime  = new Date().toLocaleTimeString() ; 
    console.log(currTime)
    timeTag.innerHTML = currTime ; 
} , 1000)
