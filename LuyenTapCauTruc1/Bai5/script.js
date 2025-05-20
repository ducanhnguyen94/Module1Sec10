const test1 = document.getElementById('test1');
const test2 = document.getElementById('test2');
const test3 = document.getElementById('test3');
const btn = document.getElementById('button');
const final = document.getElementById('final');
const mid = document.getElementById('mid');
const result = document.getElementById('result');

btn.addEventListener('click', () => {
    let score = [];
    let heSo = [1, 1, 1, 2, 3];

    let tongScore = 0;
    let tongHeSo = 0;

    score.push(Number(test1.value));
    score.push(Number(test2.value));
    score.push(Number(test3.value));
    score.push(Number(mid.value));
    score.push(Number(final.value));
    console.log(score);

    if (score.some(el => el < 0 || el > 10)) {
        return result.innerHTML = 'Nhap diem phu hop';
    };
  
    for (let i = 0; i < score.length; i++) {
        score[i] *= heSo[i];
        tongScore += score[i];
        tongHeSo += heSo[i];
    };

    let diemTB = tongScore / tongHeSo;
    
    if (diemTB <= 5) {
        return result.innerHTML = 'Yeu. Diem Trung Binh la: ' + diemTB.toFixed(1);
    } else if (diemTB <= 6.5) {
        return result.innerHTML = 'Trung Binh. Diem Trung Binh la: ' + diemTB.toFixed(1);
    } else if (diemTB < 8) {
        return result.innerHTML = 'Kha. Diem Trung Binh la: ' + diemTB.toFixed(1);
    } else  {
        return result.innerHTML = 'Gioi. Diem Trung Binh la: ' + diemTB.toFixed(1);
    };
})