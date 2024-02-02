let buttons = document.querySelectorAll(".button");
let display = document.querySelector(".display");
let string="";
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if(e.target.innerText==='='){
        try{
            string=eval(string);
            display.value=string;
            string="";
        }
       catch{
        display.value="ERROR";
       }
    }
    else if(e.target.innerText==='AC'){
        string="";
        display.value="0";
    }
    else if(e.target.innerText==='DEL'){
        string= string.substring(0,string.length-1);
        display.value=string;
    }
    else{
        string+=e.target.innerText;
        display.value=string;
    }
  });
});
