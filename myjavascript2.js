//clears form after submitting & submit addEventListener && defines local variable && global variable
const myForms = document.getElementsByClassName('myForm');
const confirmationMessage = document.getElementById('confirmationMessage');

for (let i = 0; i < myForms.length; i++) {
    const currentForm = myForms[i];

    currentForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(currentForm);
        console.log("Form data collected:", Object.fromEntries(formData.entries()));

        currentForm.reset();

        if (confirmationMessage) {
            confirmationMessage.style.display = 'block';

            setTimeout(() => {
                confirmationMessage.style.display = 'none';
            }, 3000);
        }
    });
}

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

