const a = document.getElementById('a');
const b = document.getElementById('b');
const c = document.getElementById('c');
const btn = document.getElementById('button');
const result = document.getElementById('result');


btn.addEventListener('click', () => {
    let max = Number(a.value);
    if (Number(b.value) > max) {
        max = Number(b.value);
        if (Number(c.value) >= max) {
            max = c.value;
            return result.innerHTML = 'So lon nhat la ' + max;
        } else {
            return result.innerHTML = 'So lon nhat la ' + max;
        }
    } else if (Number(c.value) >= max) {
        max = c.value;
        return result.innerHTML = 'So lon nhat la ' + max;
    } else {
        return result.innerHTML = 'So lon nhat la ' + max;
    }
})