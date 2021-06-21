const moreBtn = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});

const active = document.querySelectorAll('.info .actions i');

for(let i=0;i<2;i++){
    active[i].addEventListener('click', function(){
        active[i].classList.toggle('active');
    });
}

const subscribe = document.querySelector('.infoAndupNext .channel .subscribe');

subscribe.addEventListener('click', function(){
    if(subscribe.innerText==="SUBSCRIBE"){
        subscribe.innerText="SUBSCRIBED";
    }
    else if(subscribe.innerText==="SUBSCRIBED"){
        subscribe.innerText="SUBSCRIBE";
   }
});