const allButtons = document.querySelectorAll('.btn-success-post')
allButtons.forEach((itemButtons)=>{
     itemButtons.addEventListener('click', (e)=>{
          e.preventDefault()
        
         const selector =   itemButtons.getAttribute('data-type')
         const blockItem = document.querySelector(selector)
        
         const arrayBlock  = blockItem.childNodes
        const elem =   arrayBlock[1]
       
   const text =  elem.childNodes[3]
   
   text.style.transition   = '1s'
   text.classList.remove('no-active')
        setTimeout(()=>{
          text.style.opacity = '1'
         
        },)
     })
}) 
