let totalBox = ''

for(let i=0;i<=9;i++){
   let first =  
    `
   <div class = "ten-box">${i+1}</div>
   `
   
   totalBox += first
  }

  let box2 = document.querySelector(".box2")

  box2.innerHTML = totalBox

  