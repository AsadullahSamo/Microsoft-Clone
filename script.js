 // For image animation
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let box = document.getElementById("box");
let box2 = document.getElementById("box2");
setInterval(function(){
    if(img1.classList.contains("passive")){
       img1.style.cssText = "animation-name: fade2; animation-duration: 1s"
       img2.style.cssText = "animation-name: fade; animation-duration: 1s"
       box.style.cssText = "animation-name: fade2; animation-duration: 1s"
       box.style.display = 'block';
       box2.style.display = 'none'
       img1.classList.remove('passive');
       img2.classList.add('passive');
    } else {
       img2.classList.remove('passive');
       img1.style.cssText = "animation-name: fade; animation-duration: 1s"
       img2.style.cssText = "animation-name: fade2; animation-duration: 1s"
       box2.style.cssText = "animation-name: fade2; animation-duration: 1s"
       box.style.display = 'none';
       box2.style.display = 'block'
       img1.classList.add('passive');
        }
    }, 3000); 
            
        // For changing menu icon on small screen
let arrayOfClass = ["fa-bars", "fa-close"];
document.getElementById("hidden-nav").addEventListener("click", function(){    
    document.getElementById("hidden-content").classList.toggle("passive");
    let menuIcon = document.getElementsByClassName(arrayOfClass[0]);
    menuIcon[0].classList.replace(arrayOfClass[0], arrayOfClass[1]);
    arrayOfClass.reverse();  
})