const css = document.querySelector('h3'); 
const color1 = document.querySelector('.color1'); 
const color2 = document.querySelector('.color2'); 
const body = document.querySelector('.gradient'); 

const showBackground = () => {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value} )`
    showCss(); 
}

const showCss = () => {
    css.innerText = `linear-gradient(to right, ${color1.value}, ${color2.value} )`
}

color1.addEventListener('input', showBackground); 

color2.addEventListener('input', showBackground); 



