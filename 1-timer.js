import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{f as h,i as d}from"./assets/vendor-BbSUbo7J.js";const i=document.getElementById("datetime-picker"),o=document.querySelector("button[data-start]"),f=document.querySelector("[data-days]"),y=document.querySelector("[data-hours]"),p=document.querySelector("[data-minutes]"),S=document.querySelector("[data-seconds]");let a=null,s=null;const g={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=new Date;a=t[0],a<=e?(d.error({title:"Invalid Date",message:"Please choose a date in the future.",position:"topRight"}),o.disabled=!0):o.disabled=!1}};h(i,g);o.addEventListener("click",()=>{o.disabled=!0,i.disabled=!0,s=setInterval(()=>{const e=a-new Date;if(e<=0){clearInterval(s),alert("Time is up!");return}const n=w(e);D(n)},1e3)});function w(t){const c=Math.floor(t/864e5),u=Math.floor(t%864e5/36e5),l=Math.floor(t%36e5/6e4),m=Math.floor(t%6e4/1e3);return{days:c,hours:u,minutes:l,seconds:m}}function D({days:t,hours:e,minutes:n,seconds:r}){f.textContent=String(t).padStart(2,"0"),y.textContent=String(e).padStart(2,"0"),p.textContent=String(n).padStart(2,"0"),S.textContent=String(r).padStart(2,"0")}d.show({title:"Hey",message:"What would you like to add?"});
//# sourceMappingURL=1-timer.js.map
