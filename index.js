var numberOfDrumButtons = document.querySelectorAll(".btn").length;
for(var i =0 ; i <numberOfDrumButtons; i++)
{
    document.querySelectorAll(".btn")[i].addEventListener("click",function(){
        var buttoninnerHtml=this.innerHTML;  
        this.style.color="#00000091"; 
        makesound(buttoninnerHtml);
    });
}
    document.addEventListener("keydown",function(event)
    { 
      makesound(event.key);
    });
    function makesound(key)
    {
        var buttoninnerHtml=this.innerHTML; 
        switch(key)
        {
            
            case "W":
                var tom1 =new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
                
            case "A":
                var tom2 =new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "S":
                var tom3 =new Audio("sounds/tom-3.mp3") ;
                tom3.play();
            case "D":
                var tom4 =new Audio("sounds/tom-4.mp3");
                tom4.play();
                break; 
            case "J" :
                var snare =new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case "K":
                var crash =new Audio ("sounds/crash.mp3");
                crash.play();
                break;
            case"L" :
            var kick =new Audio ("sounds/kick-bass.mp3");
            kick.play();
            break;             
        }
        }
    
    
    
   
