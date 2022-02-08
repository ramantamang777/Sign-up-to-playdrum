
for(var i = 0; i < document.querySelectorAll(".drum").length ; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        changeBack(buttonInnerHtml);
     });
};

document.addEventListener("keypress", function(event){
     makeSound(event.key);
     changeBack(event.key);
});


function makeSound(key){
    switch(key)
    {
        case 'w':
            var audio1 = new Audio('sounds/tom-1.mp3');
            audio1.play();
                 break;
        case 'a':
                 var audio2 = new Audio('sounds/tom-2.mp3'); 
                 audio2.play();
                 break;
        case 's':
                  var audio3 = new Audio('sounds/tom-3.mp3');
                  audio3.play();
                  break;
        case 'd':
                  var audio4 = new Audio('sounds/tom-4.mp3');
                  audio4.play();
                  break;
        case 'j':
                  var audio5 = new Audio('sounds/kick-bass.mp3');
                  audio5.play();
                  break;
         case 'k':
                  var audio6 = new Audio('sounds/crash.mp3');
                  audio6.play();
                  break;
        case 'l':
                  var audio7 = new Audio('sounds/snare.mp3');
                  audio7.play();
                  break;
         default : 
                  console.log(buttonInnerHtml);
    }
}

function changeBack(event){
   let animationBtn = document.querySelector('.'+event);
   animationBtn.classList.add('pressed');
   setTimeout(function () {
    animationBtn.classList.remove('pressed');
   }, 100);
};







// var btn = document.querySelectorAll("button");

// btn[0].addEventListener("click", handleclick);
// btn[1].addEventListener("click", handleclick);
// btn[2].addEventListener("click", handleclick);
// btn[3].addEventListener("click", handleclick);
// btn[4].addEventListener("click", handleclick);
// btn[5].addEventListener("click", handleclick);

// var firstbtn = document.querySelectorAll("button")[0];
// var secondbtn = document.querySelectorAll("button")[1];
// var thirdbtn = document.querySelectorAll("button")[2];
// var fourthbtn = document.querySelectorAll("button")[3];
// var fifthbtn = document.querySelectorAll("button")[4];
// var sixthbtn = document.querySelectorAll("button")[5];
// var seventhbtn = document.querySelectorAll("button")[6];

// firstbtn.addEventListener('click', handleclick);
// secondbtn.addEventListener('click', handleclick);
// thirdbtn.addEventListener('click', handleclick);
// fourthbtn.addEventListener('click', handleclick);
// fifthbtn.addEventListener('click', handleclick);
// sixthbtn.addEventListener('click', handleclick);
// seventhbtn.addEventListener('click', handleclick);
