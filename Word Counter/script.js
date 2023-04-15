var input = document.querySelectorAll('textarea')[0],
characterCount=document.querySelector('#character'),
wordCount=document.querySelector('#word');

input.addEventListener('keyup',function(){
    console.clear();
    characterCount.innerHTML=input.value.length
    var words=input.value.match(/\b[-?(\w+)?]+\b/gi);
    if(words){
        wordCount.innerHTML=words.length;
    }else
    {
        wordCount.innerHTML=0;
    }
})