const good = document.getElementById('good');
const fast = document.getElementById('fast');
const cheap = document.getElementById('cheap');

console.log(good.value)

function goodClick() {
    if (fast.value == 0 && cheap.value == 0) {
        good.stepUp();
    } else if (fast.value == 1 && cheap.value == 0) {
        good.stepUp();
    } else if (fast.value == 0 && cheap.value == 1) {
        good.stepUp();
    } else {
        good.stepUp();
        let random = Math.round(Math.random() * 2);
        if (random === 1) {
            fast.stepDown();
        } else {
            cheap.stepDown();
        }
    }
}

function fastClick() {
    if (good.value == 0 && cheap.value == 0) {
        fast.stepUp();
    } else if (good.value == 1 && cheap.value == 0) {
        fast.stepUp();
    } else if (good.value == 0 && cheap.value == 1) {
        fast.stepUp();
    } else {
        fast.stepUp();
        let random = Math.round(Math.random() * 2);
        if (random === 1) {
            good.stepDown();
        } else {
            cheap.stepDown();
        }
    }
}

function cheapClick() {
    if (good.value == 0 && fast.value == 0) {
        cheap.stepUp();
    } else if (fast.value == 1 && good.value == 0) {
        cheap.stepUp();
    } else if (fast.value == 0 && good.value == 1) {
        cheap.stepUp();
    } else {
        cheap.stepUp();
        let random = Math.round(Math.random() * 2);
        if (random === 1) {
            fast.stepDown();
        } else {
            good.stepDown();
        }
    }
}