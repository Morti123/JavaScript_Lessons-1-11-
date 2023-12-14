/* let a =0;

function showNextValue(){
    a++;
    console.log(a); */
    /* способ 1 */ 
    /* if(a==10) clearInterval(infinityGo);
}
let infinityGo = setInterval(showNextValue,1000); */
 /* способ 2 */
  /* setTimeout(() =>{clearInterval(infinityGo)},10000); */

  /* let el = document.getElementsByClassName('block');
   let check = 0;
   
   function blikBlock(){
       if(check==0){
        el[0].classList.add('bcColor');
        check++;
        return
       }
       if(check==1){
        el[0].classList.remove('bcColor');
        check =0;
        return
       }
   }
   setInterval(blikBlock,500);
   setInterval(() => {el[0].classList.toggle('bcColor');},500);*/
   
 /* 1 */
  /*  let el1 = document.querySelectorAll('h1');
   let el2 = document.querySelectorAll('p');
   for(i=0; i<el1.length; i++){
    el1[i].classList.add('red');
   }
   for(i=0; i<el2.length; i++){
    el2[i].classList.add('blue');
   }
   */
   /* 2 */
   /* let el1 = document.querySelectorAll('h1');
   let el2 = document.querySelectorAll('p');
   for(i=0; i<el1.length; i++){
    el1[i].classList.add('b');
   }
   for(i=0; i<el2.length; i++){
    el2[i].classList.add('r');
}*/
  
/* 3 */
let el = document.querySelectorAll('div');
let width = 0;
let height =0;
function re() {
    for(i=0; i<el.length; i++){
        width = getComputedStyle(el[i]).width;
        height = getComputedStyle(el[i]).height;
       el[i].style.width = height;
       el[i].style.height = width;
    }
}
setTimeout(re,500);