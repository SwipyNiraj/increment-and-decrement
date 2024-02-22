let div=document.querySelector('#no');

function increment(){
     
     let value=parseInt(div.innerText);
     value=value+1;
     div.innerText=value;
}


function decrement(){
     
    let value=parseInt(div.innerText);
    value=value-1;
    div.innerText=value;
}