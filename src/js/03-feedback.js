import { throttle } from 'throttle-debounce';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', inputValue);
form.addEventListener('submit', onSubmit);
const submitBtn = form.lastElementChild;
submitBtn.addEventListener('submit', onSubmit);

const checkValues =
  JSON.parse(localStorage.getItem('feedback-form-state')) ?? '';
const emailInput = form.querySelector('[name="email"]');
const messageInput = form.querySelector('[name="message"]');

emailInput.value = checkValues.email ?? '';
messageInput.value = checkValues.message ?? '';

const throttleFunc = throttle(500, feedbackFormState => {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
});

function inputValue(event) {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;
  let feedbackFormState = {
    email: email.value,
    message: message.value,
  };
  throttleFunc(feedbackFormState);
}

function onSubmit(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  form.reset();
  localStorage.removeItem('feedback-form-state');
}
