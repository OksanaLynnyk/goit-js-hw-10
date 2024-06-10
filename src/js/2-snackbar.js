import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const delay = +(e.currentTarget.elements.delay.value);
    const state = e.currentTarget.elements.state.value;

    createPromise(delay, state).then(() => onFulfilled(delay)).catch(() => onRejected(delay));
})

function createPromise(delay, state) {
    return new Promise ((res, rej) => {
        setTimeout(() => {
            if (state === 'fulfilled')  
                res();        
            else 
                rej(); 
        }, delay);
    });
}

function onFulfilled(delay) {  
    iziToast.success({
        title: '✅',
        message: `Fulfilled promise in ${delay}ms`,});
}

function onRejected(delay) {
    iziToast.warning({
        title: '❌',
        message: `Rejected promise in ${delay}ms`,
    });
}
 