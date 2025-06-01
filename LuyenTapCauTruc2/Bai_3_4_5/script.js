const a = document.getElementById('canhA');
const b = document.getElementById('canhB');
const square = document.getElementById('square');
const rec = document.getElementById('rectangle');
const tri = document.getElementById('triangle');
const btn = document.getElementById('button');

btn.addEventListener('click', () => {
    let x = a.value;
    let y = b.value;

    if (x < 0 || isNaN(x) || x == '') {
        if (y < 0 || isNaN(y) || y == '') {
            a.value = 'Nhap so a thich hop!';
            b.value = 'Nhap so b thich hop!';
            square.innerHTML = 'Nhap so thich hop!';
            rec.innerHTML = 'Nhap so thich hop!';
            tri.innerHTML = 'Nhap so thich hop!';
            return;
        } else {
            a.value = 'Nhap so a thich hop!';
            square.innerHTML = 'Nhap so a thich hop!';
            rec.innerHTML = 'Nhap so a thich hop!';
            tri.innerHTML = 'Nhap so a thich hop!';
            return;
        };
    } else {
        if (y < 0 || isNaN(y) || y == '') {
            b.value = 'Nhap so b thich hop!'
            square.innerHTML = x * x;
            rec.innerHTML = 'Nhap so b thich hop!';
            tri.innerHTML = 'Nhap so b thich hop!';
            return;
        } else {
            square.innerHTML = x * x;
            rec.innerHTML = x * y;
            tri.innerHTML = (x * y) / 2;
            return;
        }
   }
})