import throttle from 'lodash.throttle';

const refs = {
form: document.querySelector('.feedback-form'),
input: document.querySelector('input'),
textarea: document.querySelector('textarea'),
button: document.querySelector('button'),
}

refs.input.addEventListener('input', throttle(onInputText, 500));
refs.textarea.addEventListener('input', throttle(onInputText, 500));
refs.form.addEventListener('submit', onButtonSubmit);
window.addEventListener('load', onLoadPage);

function onInputText (e) {
e.preventDefault();

   localStorage.setItem("feedback-form-state", JSON.stringify({email: refs.input.value, message: refs.textarea.value}));

};

const date = JSON.parse(localStorage.getItem("feedback-form-state"));

function onLoadPage () {
if (date) {
   refs.input.value = date.email;
   refs.textarea.value = date.message;
};
};

function onButtonSubmit (e) {
e.preventDefault();

console.log(date);

localStorage.removeItem("feedback-form-state");

refs.input.value = "";
refs.textarea.value = "";
}
