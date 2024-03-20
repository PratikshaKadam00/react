let string ="";
let buttons=document.querySelectorAll('.Button1');
Array.from(buttons).forEach((button)=>
  {
    button.addEventListener('click', (e)=>
      {
        console.log(e.target);
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string;
        
      })
  })
