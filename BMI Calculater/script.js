window.onload = () => {
    let btn = document.querySelector('#btn')
    btn.addEventListener("click", calculateBmi )
}

function calculateBmi(){
    const height = document.querySelector("#height").value
    const weight = document.querySelector("#weight").value
    const result = document.querySelector("#result")


    if(!weight || weight<0 || isNaN(weight)){
        result.innerText = "Please type the value"
        result.style.color = "red"
        return;
    }else if(!height || height<0 || isNaN(height)){
        result.innerText = "this is wrong"
        result.style.color = "red"
        return;
    }

    const bmi = (weight/((height*height)/10000)).toFixed(2)

    if(bmi <18.5){
        result.innerText = `Under Weight: ${bmi}`;
        result.style.color = "white"
    }else if(bmi >= 18.5 && bmi < 24.9 ){
        result.innerText = `Normal: ${bmi} `
        result.style.color = "white"
    }else if(bmi >= 25 && bmi < 29.9 ){
        result.innerText = `Over Weight: ${bmi} `
        result.style.color = "white"
    }else if(bmi >= 30 && bmi < 34.9 ){
        result.innerText = `Obesity (Class I): ${bmi} `
        result.style.color = "white"
    }else if(bmi >= 35.5 && bmi < 39.9 ){
        result.innerText = `Obesity (Class II): ${bmi} `
        result.style.color = "white"
    }else{
        result.innerText = `Extreme Obesity: ${bmi}`
        result.style.color = "white"
    }
}