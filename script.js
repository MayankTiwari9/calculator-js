let result = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      result = eval(result);
      document.querySelector('input').value = result;
    }
    else if(e.target.innerHTML == 'AC'){
      result = "";
      document.querySelector('input').value = result;
    }else if(e.target.innerHTML == 'C'){
      result = result.slice(0, -1);
        document.querySelector('input').value = result;
    }
    else{ 
      result = result + e.target.innerHTML;
    document.querySelector('input').value = result;
      }
  })
})