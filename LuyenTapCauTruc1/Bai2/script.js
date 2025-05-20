const age = document.getElementById('age');
const btn = document.getElementById('button');
const result = document.getElementById('result');

btn.addEventListener('click', () => {
    if (age.value == 15) {
        result.innerHTML = "Ban du dieu kien vao hoc lop 10"
    } else {
        result.innerHTML = "Ban khong du dieu kien vao hoc lop 10"
    }
})