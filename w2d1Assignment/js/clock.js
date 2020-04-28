function readTime(){
    let n= new Date();
    let t = `${n.getFullYear()}-${n.getMonth()}-${n.getDate()} ${n.getHours()}:${n.getMinutes}:${n.getSeconds}`;
    document.getElementById('clock').innerHTML=t;
    setTimeout(readTime,500);

}