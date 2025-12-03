//change background to a set of images
document.addEventListener('DOMContentLoaded', () => {
    const selector = document.getElementById('background-selector');
    const body = document.body;

    const imageBasePath = 'images/'; 

    selector.addEventListener('change', function() {
        const selectedValue = this.value;

        if (selectedValue === 'none') {
            body.style.backgroundImage = 'none';
        } else {
            body.style.backgroundImage = `url('${imageBasePath}${selectedValue}')`;
        }
    });
});

//set current date and time using built in date function && defines local variable && global variable
let day = document.getElementById("current-date");

    let da = new Date();
    day.innerHTML = da.toDateString();


let time = document.getElementById("current-time");

setInterval(() => {
    let d = new Date();
    time.innerHTML = d.toLocaleTimeString();
}, 1000)

//changes font size on index && defines local variable
document.addEventListener('DOMContentLoaded', () => {
    const increaseBtn = document.getElementById('increase-font');
    const decreaseBtn = document.getElementById('decrease-font');
    const rootHtml = document.documentElement;

    function getRootFontSize() {
        const currentSizeStr = window.getComputedStyle(rootHtml).fontSize;
        return parseFloat(currentSizeStr); 
    }

    increaseBtn.addEventListener('click', () => {
        let currentSize = getRootFontSize();
        rootHtml.style.fontSize = `${currentSize + 2}px`; 
    });

    decreaseBtn.addEventListener('click', () => {
        let currentSize = getRootFontSize();
        if (currentSize > 10) { 
            rootHtml.style.fontSize = `${currentSize - 2}px`;
        }
    });
});

//change text color
const colorPicker = document.getElementById('color-picker');
const targetText = document.getElementById('text-to-change');

colorPicker.addEventListener('input', function(event) {
    
    const newColor = event.target.value;

    targetText.style.color = newColor; 
});

//change font
const fontSelector = document.getElementById('font-selector');
const contentParagraph = document.getElementById('text-to-change');

fontSelector.addEventListener('change', (event) => {
    contentParagraph.style.fontFamily = event.target.value;
});