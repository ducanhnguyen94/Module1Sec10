const a = document.getElementById('a');
const b = document.getElementById('b');
const math = document.getElementById('math');
const equal= document.getElementById('equal');
const btn = document.getElementById('button');
const result = document.getElementById('result');

btn.addEventListener('click', () => {
    
    if (math.value === '+') {
        return result.innerHTML = Number(equal.value)
    }
})