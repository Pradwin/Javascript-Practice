const wrapper=document.querySelector(".wrapper");
const loginlink=document.querySelector(".login-link");
const registerlink=document.querySelector(".register-link");
const btnpop=document.querySelector(".btn-pop");
const btnclose=document.querySelector(".btn-close");
const btnrclose=document.querySelector(".btn-rclose");



registerlink.addEventListener('click',()=>{
    wrapper.classList.add('active')
});
loginlink.addEventListener('click',()=>{
    wrapper.classList.remove('active')
});
btnpop.addEventListener('click',()=>{
    wrapper.classList.add('active-popup')
});
btnclose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup')
});
btnrclose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup')
});