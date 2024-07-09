
 const decrease = document.getElementById("decrease");
 const reset = document.getElementById("rest");
 const increase = document.getElementById("increase");
 const count = document.getElementById("count");
 
 let number = 0;

 increase.onclick = function(){
     number ++;
      count.textContent = number;
 }


 decrease.onclick = function(){
    number--;
    count.textContent = number;
 }

 reset.onclick = function(){
    number = 0 ;
    count.textContent = number;


 }