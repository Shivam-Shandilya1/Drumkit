
 document.querySelector(".drumw").addEventListener("click",function()
    {
     var audio = new Audio ('sounds/tom-1.mp3');
    audio.play();
    }) ;
document.querySelector(".druma").addEventListener("click",function()
{
    var audio = new Audio ('sounds/tom-2.mp3');
    audio.play();
})
document.querySelector(".drums").addEventListener("click",function()
{
    var audio = new Audio ('sounds/tom-3.mp3');
    audio.play();
})
document.querySelector(".drumd").addEventListener("click",function()
{
    var audio = new Audio ('sounds/tom-4.mp3');
    audio.play();
})
document.querySelector(".drumj").addEventListener("click",function()
{
    var audio = new Audio ('sounds/snare.mp3');
    audio.play();
})
document.querySelector(".drumk").addEventListener("click",function()
{
    var audio = new Audio ('sounds/crash.mp3');
    audio.play();
})
document.querySelector(".druml").addEventListener("click",function()
{
    var audio = new Audio ('sounds/kick-bass.mp3');
    audio.play();
})