const update = () => {
    const time = document.querySelector('.header__time');
    const nowTime = new Date();
    const dateTime = nowTime.toLocaleString();

    time.textContent = dateTime;
}
update();
setInterval(update, 1000);



const form = document.querySelector('.form');
const sortButt = document.querySelector('.sort');

sortButt.addEventListener('click', (e) => {
    const numbers = document.getElementById('numbers').value;
    const order = document.getElementById('order').value;
    const result = document.getElementById('result');

    result.textContent = '';

    let numbersArray = numbers.split(',').map(num => num.trim());
    numbersArray = numbersArray.map(Number);

    if (numbersArray.some(isNaN) == true) {
        result.textContent = 'Error';
        return;
    }

    if(order == 'asc'){
        numbersArray.sort((a, b) =>  a - b);
    }
    else{
        numbersArray.sort((a, b) => b - a);
    }

    result.textContent = numbersArray.join(', ');
})
