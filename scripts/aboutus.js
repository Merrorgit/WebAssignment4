const button = document.querySelector('.change');
const colors = ['#995f18', '#1a488b', '#550f4d', '#7b1515', '#2d7b15', '#4caca4', '#ac544c'];

button.addEventListener('click', () =>{
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}) 