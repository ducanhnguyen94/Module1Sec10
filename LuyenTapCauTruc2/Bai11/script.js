const income = document.getElementById('income');
const btn = document.getElementById('button');
const result = document.getElementById('result');

const calculate = () => {
    let thuNhap = income.value / 1000000;
    if (income.value == '' || income.value < 0) {
        return result.innerHTML = 'Vui long nhap so phu hop!';
    };

    if (thuNhap <= 5) {
        return result.innerHTML = income.value * 5 / 100 + ' VND. Muc thue: 5%';
    } else if (thuNhap <= 10) {
        return result.innerHTML = income.value * 10 / 100 - 250000 + ' VND. Muc thue: 10%';
    } else if (thuNhap <= 18) {
        return result.innerHTML = income.value * 15 / 100 - 750000 + ' VND. Muc thue: 15%';
    } else if (thuNhap <= 32) {
        return result.innerHTML = income.value * 20 / 100 - 1650000 + ' VND. Muc thue: 20%';
    } else if (thuNhap <= 52) {
        return result.innerHTML = income.value * 25 / 100 - 3250000 + ' VND. Muc thue: 25%';
    } else if (thuNhap <= 80) {
        return result.innerHTML = income.value * 30 / 100 - 5850000 + ' VND. Muc thue: 30%';
    } else {
        return result.innerHTML = income.value * 35 / 100 - 9850000 + ' VND. Muc thue: 35%';
    };
}


btn.addEventListener('click', () => {

    calculate();
})