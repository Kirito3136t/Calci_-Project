"use strict"

// function calculer() 
// { 
//     let a = document.getElementById("output").value 
//     let b = eval(a) 
//     document.getElementById("output").value = b 
// } 

// function afficher(val) 
// { 
//     document.getElementById("output").value+=val 
// } 

// function effacer() 
// { 
//     document.getElementById("output").value = "" 
// } 
let string='';
let clicked=document.querySelectorAll('.button');

Array.from(clicked).forEach((element) =>{
    element.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string = eval(string);
            document.getElementById('display').innerHTML=string;
        }else if(e.target.innerHTML=='C'){
            string ="";
            document.getElementById('display').innerHTML=string;
        }
        else{
            console.log(e.target);
            string=string + e.target.innerHTML;
            document.getElementById('display').innerHTML=string;
        }
        
    });
  });