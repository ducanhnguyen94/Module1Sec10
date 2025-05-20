const number = document.getElementById('number');
const btn = document.getElementById('button');
const result = document.getElementById('result');

btn.addEventListener('click', () => {
    let value = Number(number.value);
    if (Number.isInteger(value)) {
        if (value < 0) {
            result.innerHTML = number.value + " nho hon 0";
        } else if (value > 0) {
            result.innerHTML = number.value + " lon hon 0";
        } else {
            result.innerHTML = number.value + " bang 0";
        }
    } else {
        result.innerHTML = "Vui long nhap mot so nguyen!"
    }
})