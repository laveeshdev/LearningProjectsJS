const form = document.querySelector('form');

form.addEventListener('submit' , function(e){
    console.log("even isidentified ") ; 
    e.preventDefault() ; 
    const height = parseInt(document.getElementById('height').value)
    const weight = parseInt(document.getElementById('weight').value)
    const result = document.getElementById('results')

    if(height<=0 || height > 230 || height ===''){
        result.innerHTML = "Please provide with valid height " ; 
        return ; 
    }
    if(weight<=0 || weight > 130 || weight ===''){
        result.innerHTML = "Please provide with valid weight " ; 
        return ; 
    }

    const bmi = (weight / (height*height/10000)).toFixed(2) ; 
    result.innerHTML = `Your BMI is ${bmi}` ; 



}) ;