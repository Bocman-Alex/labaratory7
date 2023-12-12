let c=0;
function fun(){
    c++;
    let it =document.getElementById('search');
   ((c%2)==0)? it.style.visibility='hidden': it.style.visibility='visible';
   
}