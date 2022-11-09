// 1. Nümunə
const someArr = [1, 2, 3, 4];
someArr.push(5);

const filteredArr = someArr.filter(item => item > 2);

// 2. Nümunə
console.log(Array.prototype);


// 3. Nümunə

function clickHandler(e) {
    console.log(e.target, this);
}

window.addEventListener('click', clickHandler);
