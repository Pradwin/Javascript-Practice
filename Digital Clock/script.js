const hour=document.getElementById("hour");         //initialiing which Id to use for changes
const minute=document.getElementById("min")
const seconds=document.getElementById("sec")
const ampm=document.getElementById("ampm")

function formatTime(time) {
    return time.toString().padStart(2,"0");    //To show 0 at the start of numbers from 0 to 9 ie:01,02,03
}
function isAmPm(hours){
    return hours >= 12 ? "PM":"AM";
}
function clock(){
    const date=new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    hour.textContent=formatTime(h);        //getting access to change the content using textcontent
    minute.textContent=formatTime(m);
    seconds.textContent=formatTime(s);
    ampm.textContent=isAmPm(h);
}
 setInterval(clock,1000);