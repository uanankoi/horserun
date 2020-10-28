//宣告 
let run = document.querySelector('.box');
let news = document.querySelector('.news');

// timer

let count = 0;
let on = true;

const time = ()=>{
    if(on)  count++;
    run.style.left=-(count%5201)+'px';
}

let timer = window.setInterval(time,10);

// 監聽事件
news.addEventListener('mouseover',function(){
    on = !on
})
news.addEventListener('mouseout',function(){
    on = !on
})