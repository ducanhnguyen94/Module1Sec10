const month = document.getElementById('month');
const btn = document.getElementById('button');
const outPut = document.getElementById('outPut');


btn.addEventListener('click', ()=> {
switch (month.value) {
    case '1':
    case '3':
    case '5':
    case '7':
    case '8':
    case '10':
    case '12':
        outPut.innerHTML = 'Thang ' + month.value + ' co 31 ngay';
        break;
    case '4':
    case '6':
    case '9':
    case '11':
        outPut.innerHTML = 'Thang ' + month.value + ' co 30 ngay';
        break;
    case '2':
        outPut.innerHTML = 'Thang ' + month.value + ' co 28 hoac 29 ngay';
        break;
    default:
        outPut.innerHTML = 'Vui long nhap dung thang'
        break;
}

})