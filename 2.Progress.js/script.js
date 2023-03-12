const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");


let currentActive = 0 ;
prev.disabled = true;

next.addEventListener("click",()=>{
     currentActive++;
     
     if(currentActive> circles.length){
         currentActive = circles.length;
        }
        //  console.log(currentActive);
    
     update();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive <= 0) {
      currentActive = 0;
    }
    // console.log(currentActive);
  update();
});


function update(){
    circles.forEach((circle,idx)=>{
       if(idx < currentActive){
        circle.classList.add("active");
       }else{
        circle.classList.remove("active");
       }
    })

    const actives = document.querySelectorAll(".active");
    progress.style.width = (((actives.length-1)/(circles.length -1 ))* 100 + '%');

    let p = ((actives.length-1)/(circles.length -1 ))* 100 + '%';
    console.log(p);

    if(currentActive === 0){
        prev.disabled = true;
    }else if(currentActive === 4){
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;

    }
}
 