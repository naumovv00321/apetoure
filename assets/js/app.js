const textBlock = document.querySelector('.title-text-box')
const slides  = document.querySelector('.posts-box');

slides.style.opacity = '0.1'

slides.style.top = "60px"


textBlock.style.opacity = '0.05';


function animateText(){
     setTimeout(()=>{
     textBlock.style.opacity = '1';
     textBlock.style.top = '45vh';
     textBlock.style.transition = '1.6s';
},100)
     
}

animateText();


const  Visible =  (target) =>{
     // Все позиции элемента
     const  targetPosition = {
         top: window.pageYOffset + target.getBoundingClientRect().top,
         left: window.pageXOffset + target.getBoundingClientRect().left,
         right: window.pageXOffset + target.getBoundingClientRect().right,
         bottom: window.pageYOffset + target.getBoundingClientRect().bottom
       },
       // Получаем позиции окна
       windowPosition = {
         top: window.pageYOffset,
         left: window.pageXOffset,
         right: window.pageXOffset + document.documentElement.clientWidth,
         bottom: window.pageYOffset + document.documentElement.clientHeight
       };
   
     if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
       targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
       targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
       targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
      

     setTimeout(()=>{
         
          target.style.opacity = '1',
          target.style.top = "0"
          target.style.transition = '1.2s'
     },100)
    
       
     } else {
       // Если элемент не видно, то запускаем этот код
       console.clear();
     };
   };
   
   // Запускаем функцию при прокрутке страницы
   window.addEventListener('scroll', function() {
     Visible (slides);
   });
   
   // А также запустим функцию сразу. А то вдруг, элемент изначально видно
   Visible (slides);
