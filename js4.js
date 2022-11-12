let color=['pink','green','blue'];
let button=document.getElementById('button');
button.addEventListener('click',function(){
    var randomcolor=color[Math.floor(Math.random() * color.length)]
    let container=document.getElementById('col');
    container.style.background=randomcolor;
})
function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}
var opacity=0;
var intervalID=0;
function fadeOut(){
    intervalID=setInterval(hide,20);
}
function hide(){
    var img=document.getElementById("main");
    opacity=Number(window.getComputedStyle(img).getPropertyValue("opacity"));
    if(opacity>0)
    {
        opacity=opacity-0.1;
        img.style.opacity=opacity;
    }
    else{
        clearInterval(intervalID);
    }
}