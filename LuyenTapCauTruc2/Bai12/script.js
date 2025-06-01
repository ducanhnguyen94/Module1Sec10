const loan = document.getElementById('loan');
const time = document.getElementById('time');
const interest = document.getElementById('interest');
const btn = document.getElementById('button');
const result = document.getElementById('result');

btn.addEventListener('click', () => {
    let loanValue = Number(loan.value);
    let monthInterest = interest.value / 100 / 12;
    let monthAmount = Number(time.value);
    let interestPay = 0;

    for (let i = 0; i < monthAmount; i++) {
        console.log(interestPay);
        interestPay = interestPay + (interestPay + loanValue) * monthInterest;
        
    };

    result.innerHTML = Math.round(interestPay) + ' VND'
})