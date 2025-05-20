const height = document.getElementById('height');
const weight = document.getElementById('weight');
const btn = document.getElementById('button');
const result = document.getElementById('result');



btn.addEventListener('click', () => {
    let BMI = Number(weight.value) / (Number(height.value) * Number(height.value));
    if (BMI < 18.5) {
        result.innerHTML = BMI.toFixed(2) + '-Underweight';
    } else if (BMI < 25) {
        result.innerHTML = BMI.toFixed(2) + '-Normal';
    } else if (BMI < 30) {
        result.innerHTML = BMI.toFixed(2) + '-Overweight';
    } else {
        result.innerHTML = BMI.toFixed(2) + '-Obese';
    }
})