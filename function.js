function change(){
    title.style.fontSize = '100px';
}


let count = 0;

function timer(){
    count +=1;
    
    if (count % 3 ===0){
        subtitle.style.color = 'gray';
    } else if(count % 3 ===1){
        subtitle.style.color = 'black';
    } else if(count % 3 ===2){
        subtitle.style.color = 'red';
    }
    console.log(count);
}

btn.onclick = change;
setInterval(timer, 1000)