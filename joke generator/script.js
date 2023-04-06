const jokeContainer=document.getElementById("jokeContainer");
const jokebtn =document.getElementById('jokebtn');

const API_URL=`https://v2.jokeapi.dev/joke/Any?type=single`;

getjoke();

async function getjoke() {
 const res=await fetch(API_URL);
 const data=await res.json();

 jokeContainer.innerHTML=data.joke;
}
jokebtn.addEventListener('click',getjoke);