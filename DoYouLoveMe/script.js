const no = document.getElementById('no');
const yes = document.getElementById('yes');
const result = document.getElementById('result');

yes.addEventListener('click', () => {
    result.innerHTML = 'YES'
})

no.addEventListener('mouseover', () => {
    no.style.position = 'fixed';
    no.style.left = window.innerWidth * Math.random() + 'px';
    no.style.top = window.innerHeight * Math.random() + 'px';
})
