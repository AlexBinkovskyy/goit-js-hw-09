import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputField = document.querySelector('#datetime-picker');
inputField.addEventListener('click', onclick);

const options = {
  altInput: true,
  altFormat: 'F j, Y',
  dateFormat: 'Y-m-d',
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr('#datetime-picker', options);
// add somestaff
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// function addLeadingZero(value){
//     padStart()
// }
function onclick(event) {
  console.log(event);
}
