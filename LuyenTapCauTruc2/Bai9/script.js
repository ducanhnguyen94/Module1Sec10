const a = +prompt('Nhap canh a: ');
const b = +prompt('Nhap canh b: ');
const c = +prompt('Nhap canh c: ');

if (a == '' || b == '' || c == '') {
    alert('Nhap so thich hop!');
} else if ( isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('Nhap so thich hop!');
} else if (a < 0 || b < 0 || c < 0) {
    alert('Nhap so thich hop!');
} else {
    let ab = a + b;
    let ac = a + c;
    let bc = b + c;

    if (ab > c && ac > b && bc > a) {
        alert('Day la 3 canh cua mot tam giac')
    } else {
        alert('Day khong phai 3 canh cua mot tam giac')
    }
}