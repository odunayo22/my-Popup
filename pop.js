const loginPopup = document.querySelector(".login");
const close = document.querySelector(".close");

window.addEventListener("load", function(){

    this.setTimeout(function(){
     loginPopup.classList.add("show");
    }, 5000)
    
})

const closeLoginPopup = function(){
   loginPopup.classList.add('unshow')
}

close.addEventListener('click', closeLoginPopup)

// i need to re-push this to edit some things 

//   function showPopup(){
 //   const timeLimit = 5 // seconds;
  //  let i=0;
   // const timer = setInterval(function(){
//  i++;
//        if(i == timeLimit){
 //           clearInterval(timer);
 //           loginPopup.classList.add("show");
 //       }
 //       console.log(i)
  //  },5000);
//}

