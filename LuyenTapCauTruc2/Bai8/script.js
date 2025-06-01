const age = +prompt('Nhap tuoi: ');

if (age == '') {
    alert('Day khong phai la tuoi cua mot nguoi!');
} else if (0 < age  && age < 120) {
    if (Number.isInteger(age)) {
        alert('Day la tuoi cua mot nguoi!');
    } else {
        alert('Day khong phai la tuoi cua mot nguoi!');
    }
} else {
    alert('Day khong phai la tuoi cua mot nguoi!');
}