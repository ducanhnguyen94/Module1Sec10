const line = document.getElementById('line');
const amount = document.getElementById('amount');
const limit = document.getElementById('limit');
const price = document.getElementById('price');
const data = document.getElementById('data');
const inline = document.getElementById('inline');
const outline = document.getElementById('outline');
const payment = document.getElementById('payment');

let info = {
    limit: 30,
    price: 150000,
    data: 50,
    inline: 100,
    outline: 150
};

if (line.value == 50 && amount.value == 3) {
    limit.innerHTML = info.limit + ' ngay';
    price.innerHTML = info.price + ' VND';
    data.innerHTML = info.data + ' gb';
    inline.innerHTML = info.inline + ' phut';
    outline.innerHTML = info.outline + ' phut';
    payment.innerHTML = amount.value * info.price + ' VND';
}

line.addEventListener('change', () => {
    if (amount.value == 3)  {
        limit.innerHTML = info.limit + ' ngay';
        price.innerHTML = (info.price  + (line.value - 50) * 1000) + ' VND';
        data.innerHTML = (info.data + (line.value - 50) / 10) + ' gb';
        inline.innerHTML = (info.inline + (line.value - 50) / 10) + ' phut';
        outline.innerHTML = (info.outline + (line.value - 50) / 10) + ' phut';
        payment.innerHTML = amount.value * (info.price  + (line.value - 50) * 1000) + (amount.value - 3) * (line.value - 50) * 1000 + ' VND';
    } else {
        limit.innerHTML = info.limit + ' ngay';
            price.innerHTML = (info.price  + (line.value - 50) * 1000) + ' VND';
            data.innerHTML = (info.data + (line.value - 50) / 10) + ' gb';
            inline.innerHTML = (info.inline + (line.value - 50) / 10) + ' phut';
            outline.innerHTML = (info.outline + (line.value - 50) / 10) + ' phut';
            payment.innerHTML = amount.value * (info.price  + (line.value - 50) * 1000) + (amount.value - 3) * line.value * 1000 + ' VND. Phi them line: ' + line.value * 1000 + ' VND.';
    }
});

amount.addEventListener('change', () => {
        if (amount.value == 3) {
            limit.innerHTML = info.limit + ' ngay';
            price.innerHTML = (info.price  + (line.value - 50) * 1000) + ' VND';
            data.innerHTML = (info.data + (line.value - 50) / 10) + ' gb';
            inline.innerHTML = (info.inline + (line.value - 50) / 10) + ' phut';
            outline.innerHTML = (info.outline + (line.value - 50) / 10) + ' phut';
            payment.innerHTML = amount.value * (info.price  + (line.value - 50) * 1000)+ ' VND';
        } else {
            limit.innerHTML = info.limit + ' ngay';
            price.innerHTML = (info.price  + (line.value - 50) * 1000) + ' VND';
            data.innerHTML = (info.data + (line.value - 50) / 10) + ' gb';
            inline.innerHTML = (info.inline + (line.value - 50) / 10) + ' phut';
            outline.innerHTML = (info.outline + (line.value - 50) / 10) + ' phut';
            payment.innerHTML = amount.value * (info.price  + (line.value - 50) * 1000) + (amount.value - 3) * line.value * 1000 + ' VND. Phi them line: ' + line.value * 1000 + ' VND.';
        }
})


