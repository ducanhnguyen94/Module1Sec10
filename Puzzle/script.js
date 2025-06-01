const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');


let pictureArr = ['Picture/1.png','Picture/2.png','Picture/3.png'];

function changePic(img) {
    if (img.src == 'file:///D:/CodeGym/Module_1_C05/Muc%2010/Puzzle/Picture/1.png') {
        img.src = pictureArr[1];
    } else if (img.src == 'file:///D:/CodeGym/Module_1_C05/Muc%2010/Puzzle/Picture/2.png') {
        img.src = pictureArr[2];
    } else {
        img.src = pictureArr[0];
    };
};

function checkMatch() {
    if (zero.src === one.src && one.src === two.src) {
        zero.style.boxShadow = '10px 10px red';
        two.style.boxShadow = '10px 10px red';
        one.style.boxShadow = '10px 10px red';
    } else {
        zero.style.boxShadow = 'none';
        two.style.boxShadow = 'none';
        one.style.boxShadow = 'none';
    }
};

zero.addEventListener('click', () => {
    changePic(zero);
    checkMatch();
});

one.addEventListener('click', () => {
    changePic(one);
    checkMatch();
});

two.addEventListener('click', () => {
    changePic(two);
    checkMatch();
})