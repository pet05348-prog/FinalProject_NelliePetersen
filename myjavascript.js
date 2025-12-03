//toggles table
document.body?.addEventListener("click", (ev) => {
    const isExpandableTitle = !!ev.target.closest(".expandable__title-bar");
    const expandable = ev.target.closest(".expandable");

    if(!isExpandableTitle) {
        return
    }
    
    expandable.classList.toggle("expandable--open");
});

//defines global variable
var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

//name must not be empty requirement && defines local variable
function ValidateName() {
    var name = document.getElementById("contact-name").value;

    if(name.length == 0) {
        nameError.innerHTML = "Name is required";
        console.log("test1");
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Please write full name";
        console.log("test2");
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    console.log("test3");
    return true;
}

//email must have @ requirement && defines local variable
function ValidateEmail() {
    var email = document.getElementById("contact-email").value;

    if(email.length == 0) {
        emailError.innerHTML = "Email is required";
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innterHTML = "Email Invalid"
        return false;
    }
    
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true;
}

//message must not be empty or too short requirement && defines local variable
function ValidateMessage() {
    var message = document.getElementById("contact-message").value;
    var required = 30;
    var left = required - message.length;

    if(left > 0) {
        messageError.innerHTML = left + " more characters required"
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

//prevent from submitting if there are errors && defines local variable
function ValidateForm() {
    var isNameValid = ValidateName();
    var isEmailValid = ValidateEmail(); 
    var isMessageValid = ValidateMessage();

    if(isNameValid && isEmailValid && isMessageValid) {
        submitError.style.display = 'none';
        return true;
    } 
    else {
        submitError.innerHTML = 'Please fix errors to submit';
        submitError.style.display = 'block';
        return false; // Prevent form submission
    }
}

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

//madlibs game to create a text prompt
const storySection = document.getElementById('completed-story');
const madLibsForm = document.getElementById('madlibs-form');

const submitMadLibs = (event) => {
    event.preventDefault();
    madLibsForm.classList.add('hide');

    const form = new FormData(event.target);
    const userSubmission = Object.fromEntries(form);

    const story = `
        <h3>Your text prompt:</h3>
        <p>In a <span class="inserted-text">${userSubmission.noun_place}</span>
        , a <span class="inserted-text">${userSubmission.adverb_1}</span>
        <span class="inserted-text">${userSubmission.noun_person_animal}</span> 
        , weary and tired, <span class="inserted-text">${userSubmission.verb_present_tense}</span> 
        into a <span class="inserted-text">${userSubmission.adverb_2}</span> 
        <span class="inserted-text">${userSubmission.noun_item}</span>
        , <span class="inserted-text">${userSubmission.verb_with_ing_ending} </span> 
        why life was so <span class="inserted-text">${userSubmission.adverb_3}</span>.</p>
    `;

    storySection.innerHTML += story;
    storySection.classList.remove('hide');

}

let resetButton = `<button id="madlibs-reset" onclick="resetMadLibs()">Play Again</button>`;
storySection.innerHTML += resetButton;

const resetMadLibs = () => {
    storySection.classList.add('hide');
    storySection.innerHTML = '';
    madLibsForm.reset();
    madLibsForm.classList.remove('hide');
} 