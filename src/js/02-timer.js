import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputField = document.querySelector('#datetime-picker');
let startBtn = document.querySelector('[data-start]');
startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    checkDate(selectedDates);
  },
};

flatpickr('#datetime-picker', options);

function checkDate(selectedDates) {
  const date = new Date();
  const currentMinutes = date.getHours();
  const currentHours = date.getMinutes();
  const currentDate = date.getDate();
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();

  const selectedMinutes = selectedDates[0].getHours();
  const selectedHours = selectedDates[0].getMinutes();
  const selectedDate = selectedDates[0].getDate();
  const selectedMonth = selectedDates[0].getMonth();
  const selectedYear = selectedDates[0].getFullYear();

  if (
    selectedYear <= currentYear &&
    selectedMonth <= currentMonth &&
    selectedDate <= currentDate &&
    selectedHours <= currentHours &&
    selectedMinutes <= currentMinutes
  ) {
    startBtn.disabled = true;
    alert('Please choose a date in the future')
  } else {
    startBtn.disabled = false;
  }
}

// function addLeadingZero(value){
//     padStart()
// }

// function convertMs(ms) {
//     // Number of milliseconds per unit of time
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;

//     // Remaining days
//     const days = Math.floor(ms / day);
//     // Remaining hours
//     const hours = Math.floor((ms % day) / hour);
//     // Remaining minutes
//     const minutes = Math.floor(((ms % day) % hour) / minute);
//     // Remaining seconds
//     const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//     return { days, hours, minutes, seconds };
//   }
