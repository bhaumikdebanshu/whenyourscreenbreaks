

var imgArray = new Array();
imgArray[0] = 'screens/01.png';
imgArray[1] = 'screens/02.jpg';
imgArray[2] = 'screens/03.jpeg';
imgArray[3] = 'screens/04.png';

var head = new Array();
head[0] = 'Can you repair this1?';
head[1] = 'Can you repair this2?';
head[2] = 'Can you repair this3?';
head[3] = 'Can you repair this4?';

var subhead = new Array();
subhead[0] = 'Can you repair this1?';
subhead[1] = 'Can you repair this2?';
subhead[2] = 'Can you repair this3?';
subhead[3] = 'Can you repair this4?';

let flag;

var something = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            flag = 0;
        }
    };
})();

something();




function getFullscreenElement() {
    return document.fullscreenElement   //standard property
    || document.webkitFullscreenElement //safari/opera support
    || document.mozFullscreenElement    //firefox support
    || document.msFullscreenElement;    //ie/edge support
 }

//  function toggleFullscreen() {
//     let r = Math.floor(Math.random() * 4); 
    
//     if(getFullscreenElement()) { 
//         document.exitFullscreen();
//         document.getElementById("myBox").style.display = "none";
//         document.getElementById("text").innerHTML = textArray[r];
        

//     }else {
        
//         document.getElementById("myBox").style.backgroundImage = "url(" + imgArray[r] + ")"; 
//         document.getElementById("myBox").style.display = "block";
//         document.getElementById("myBox").requestFullscreen().catch(console.log);
//        // document.removeEventListener('click')
//         setTimeout(function(){flag = 0;}, 5000);
//         document.removeEventListener('click', () =>{
//             //toggleFullscreen()
//             console.log(flag);
//         });
        
        
//     }
//  }

function fullscreenOff(){
    let r = Math.floor(Math.random() * 4);
    document.exitFullscreen();
    document.getElementById("myBox").style.display = "none";
    //document.getElementById("text").innerHTML = head[r];
    //document.getElementById("sub-text").innerHTML = subhead[r];
    window.open('page2.html',"_self");
    flag = 0;

    
}

function fullscreenOn(){
    let r = Math.floor(Math.random() * 4);
    document.getElementById("myBox").requestFullscreen().catch(console.log);
    document.getElementById("myBox").style.backgroundImage = "url(" + imgArray[r] + ")"; 
    document.getElementById("myBox").style.display = "block";
    document.getElementById("text").style.display = "none";
    document.getElementById("sub-text").style.display = "none";
    flag = 1;
    
    var t = setTimeout(function(){
        flag = 0;
        fullscreenOff()
    }, 2500);
    
}


var t;

document.addEventListener('click', () =>{
    if (flag == 0){
        fullscreenOn();
    }  
});




document.addEventListener('fullscreenchange', exitHandler);
document.addEventListener('webkitfullscreenchange', exitHandler);
document.addEventListener('mozfullscreenchange', exitHandler);
document.addEventListener('MSFullscreenChange', exitHandler);

function exitHandler() {
    if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
        console.log('Escape pressed')
        clearTimeout(t);
        //fullscreenOff()
    }
} 

document.addEventListener('fullscreenchange', (event) => {
    // document.fullscreenElement will point to the element that
    // is in fullscreen mode if there is one. If there isn't one,
    // the value of the property is null.
    if (document.fullscreenElement) {
      console.log(`Element: ${document.fullscreenElement.id} entered full-screen mode.`);
    } else {
      console.log('Leaving full-screen mode.');
    }
  });




 

 
 

 