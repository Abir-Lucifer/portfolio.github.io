let cursormeter = document.getElementById('cursormeter');
document.addEventListener('mousemove',function(e)
{
cursormeter.style.top = e.clientY + 'px';
cursormeter.style.left = e.clientX + 'px';
})

let percent = document.getElementById('percent');
let pregressbar = document.getElementById('pregressbar');
let totalheight = document.body.scrollHeight - window.innerHeight;
 window.onscroll = function(){
     let progress = (window.pageYOffset/totalheight)*100;
     pregressbar.style.width = progress + '%';
 }


const links = document.querySelectorAll('.scrollto');
links.forEach((item)=>{
    item.addEventListener("click" , ()=>{
        const el = document.getElementById(item.getAttribute('data-link'));
        el.scrollIntoView({behavior:"smooth" , block:"start"})
    })

})

const backtotop = document.querySelectorAll('.totop');
backtotop.forEach((item1)=>{
    item1.addEventListener("click" , ()=>{
        const el = document.getElementById(item1.getAttribute('data-link'));
        el.scrollIntoView({behavior:"smooth" , block:"start"})
    })

})







