function shuffle(){
    const img=document.getElementById("img");
    let random=Math.floor(Math.random()*6)+1;
    img.setAttribute("src",`/Pics/${random}.png`);
}
function anim(){
  setTimeout(shuffle,500);
  const img=document.getElementById("img");
  img.setAttribute("src","/Pics/dice-roll.gif");
}