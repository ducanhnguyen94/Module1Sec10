const a = document.getElementById('a');
const b = document.getElementById('b');
const btn = document.getElementById('button');
const result = document.getElementById('result');

btn.addEventListener('click', () => {
    if(a.value % b.value === 0) {
        result.innerHTML = a.value + ' chia het cho ' + b.value
    } else {
        result.innerHTML = a.value + ' khong chia het cho ' + b.value
    }
})