const sale = document.getElementById('sale');
const btn = document.getElementById('button');
const result = document.getElementById('result');

let giaBan = 10000;
let doanhSo = [10, 20, 30, 40, 50];
let hoaHong = [0, 1, 2, 3, 4, 5];

btn.addEventListener('click', () => {
    let saleValue = Number(sale.value);

    if (saleValue < 0 || !Number.isInteger(saleValue)) {
        result.innerHTML = 'Nhap doanh so hop le';
        return;
    };

    for (let i = 0; i < doanhSo.length; i++) {
        if (saleValue < doanhSo[i]) {
            return result.innerHTML = 'Doanh so la ' + sale.value + '. Hoa Hong la ' + hoaHong[i] + ' %';
        } else {
            result.innerHTML = 'Doanh so la ' + sale.value + '. Hoa Hong la ' + hoaHong[hoaHong.length - 1] + ' %';
            return;
        }
    }
})