let mySlider = [
    'assets/images/slider1.jpg',
    'assets/images/slider2.jpg',
    'assets/images/slider3.jpg'
]
let img=document.querySelector('#slider img');
img.src=mySlider[0];

let index=0;

let next=document.querySelector('.next');

next.addEventListener('click',function() {
    index++;
    
     if(index>mySlider.length-1){
            index=0;
     }

    img.src=mySlider[index];
})

let prev=document.querySelector('.prev');

prev.addEventListener('click',function() {
    index--; 
     if(index==-1){
            index=mySlider.length-1;
     }

    img.src=mySlider[index];
})

function AutoPlay() {
    index++;
    
    if(index>mySlider.length-1){
           index=0;
    }

   img.src=mySlider[index];
}

setInterval(() => {
    AutoPlay();
}, 4000);