const kwH = document.getElementById('kWh');
const btn = document.getElementById('button');
const result = document.getElementById('result');

function checkValid() {
    if (kWh == '' || kwH.value < 0) {
         return result.innerHTML = 'Vui long nhap so thich hop!';
    }
};

function calculate() {
    let roundDown = Math.floor(Number(kWh.value)  / 50);
    switch (roundDown) {
        case 0:
            result.innerHTML = kWh.value * 1984 + ' VND';
            break;
        case 1:
            result.innerHTML = (kWh.value - 50) * 2050 + 50 * 1984 + ' VND';
            break;
        case 2:
            result.innerHTML = ((kWh.value - 50 * 2) * 2380) + 50 * (1984 + 2050) + ' VND'; 
            break;
        case 3: 
            result.innerHTML = ((kWh.value - 50 * 3) * 2998) + 50 * (1984 + 2050 + 2380) + ' VND';
            break;
        case 4:
            result.innerHTML = ((kWh.value - 50 * 4) * 3350) + 50 * (1984 + 2050 + 2380 + 2998) + ' VND';
            break;
        case 5: 
            result.innerHTML = ((kWh.value - 50 * 5) * 3460) + 50 * (1984 + 2050 + 2380 + 2998 + 3350) + ' VND';
            break;
        default:
            result.innerHTML = ((kWh.value - 50 * 5) * 3460) + 50 * (1984 + 2050 + 2380 + 2998 + 3350) + ' VND';
            break;
    }
}

btn.addEventListener('click', () => {
    checkValid();
    calculate();    
})