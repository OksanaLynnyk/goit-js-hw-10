import"./assets/styles-c3df3af9.js";import{f as h,i as y}from"./assets/vendor-77e16229.js";const s=document.getElementById("datetime-picker"),t=document.querySelector("[data-start]"),o={daysLeft:document.querySelector("[data-days]"),hoursLeft:document.querySelector("[data-hours]"),minutesLeft:document.querySelector("[data-minutes]"),secondsLeft:document.querySelector("[data-seconds]")};let a,u;t.disabled=!0;const L={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,locale:{firstDayOfWeek:1},onClose(e){a=e[0],a<=Date.now()?(y.error({title:"Error",message:"Please choose a date in the future"}),t.disabled=!0):t.disabled=!1}};h(s,L);const b=()=>{const e=Date.now(),n=a-e;n<=0?(clearInterval(u),s.disabled=!1,t.disabled=!0):D(S(n))};function D({days:e,hours:n,minutes:d,seconds:c}){o.daysLeft.textContent=r(e),o.hoursLeft.textContent=r(n),o.minutesLeft.textContent=r(d),o.secondsLeft.textContent=r(c)}function r(e){return String(e).padStart(2,"0")}t.addEventListener("click",()=>{s.disabled=!0,t.disabled=!0,u=setInterval(b,1e3)});function S(e){const i=Math.floor(e/864e5),l=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),m=Math.floor(e%864e5%36e5%6e4/1e3);return{days:i,hours:l,minutes:f,seconds:m}}
//# sourceMappingURL=commonHelpers.js.map