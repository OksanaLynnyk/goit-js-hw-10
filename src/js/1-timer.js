import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const picker = document.getElementById('datetime-picker');
const startBtn = document.querySelector('[data-start]');
const timerValues = {
    daysLeft: document.querySelector('[data-days]'),
    hoursLeft: document.querySelector('[data-hours]'),
    minutesLeft: document.querySelector('[data-minutes]'),
    secondsLeft: document.querySelector('[data-seconds]'),
}

let userSelectedDate;
let timer;

startBtn.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    locale: {
        firstDayOfWeek: 1, 
    },
    onClose(selectedDates) {        
        userSelectedDate = selectedDates[0];
        if (userSelectedDate <= Date.now()) {
            iziToast.error({title: 'Error',
            message:"Please choose a date in the future"})
            startBtn.disabled = true;
        }     
        else     
            startBtn.disabled = false;           
    },
};

const fp = flatpickr(picker, options);

const handleTime = () => {
    const currentDate = Date.now();
    const timeDifference = userSelectedDate - currentDate;
    if (timeDifference <= 0) {
        clearInterval(timer);
        picker.disabled = false;
        startBtn.disabled = true;
    } else
        attachToElement(convertMs(timeDifference));
}

function attachToElement({ days, hours, minutes, seconds }) {
    timerValues.daysLeft.textContent = addLeadingZero(days);
    timerValues.hoursLeft.textContent = addLeadingZero(hours);
    timerValues.minutesLeft.textContent = addLeadingZero(minutes);
    timerValues.secondsLeft.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0')
}

startBtn.addEventListener('click', () => { 
    picker.disabled = true;
    startBtn.disabled = true;
    timer = setInterval(handleTime, 1000)
});

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    return { days, hours, minutes, seconds };
}
