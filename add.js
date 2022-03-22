let button = document.querySelector("#btn");
button.addEventListener("click", calculateBMI);
let type = ["Under weight","Normal","Over weight","Obese"];
function calculateBMI() {
    let height = parseInt(document.querySelector("#height").value);

    let weight = parseInt(document.querySelector("#weight").value);

    let result = document.querySelector("#result");

        // Fixing upto 2 decimal places
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // Dividing as per the bmi conditions
    if (bmi < 18.5) {
        result.innerHTML = `<div class="type" style="color:red">${type[0]}</div> : <span>${bmi}</span>`;
    } else if (bmi < 25) {
            result.innerHTML = `<div class="type"style="color:green;">${type[1]}</div> : <span>${bmi}</span>`;
    }else if(bmi < 30){
        result.innerHTML = `<div class="type"style="color:#9B870C">${type[2]}</div> : <span>${bmi}</span>`;
    }else {
        result.innerHTML = `<div class="type" style="color:red">${type[3]}</div> :<span>${bmi}</span>`;
    }
}