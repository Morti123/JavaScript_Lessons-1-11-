/* let blocks = document.querySelectorAll('.block');
for(let item of blocks){
item.addEventListener('click',(event)=>changeColorBlock(event));
}
function changeColorBlock(event){
    console.log(event);
    event.target.classList.toggle('blockColor');
} */
/* Задание 1 */
/* let block = document.querySelector(".block");
let angle = 0;
block.addEventListener('click',func);
function func(){
    angle = angle + 45;
    block.style.transform = "rotate("+ angle +"deg)";
} */

/* Задание 2 */
/* let cl = document.querySelector('span');
let bt = document.querySelector('button')
let kv = 0;
bt.addEventListener('click', func);
function func(){
    cl.innerText = + kv;
    kv++
} */

/* Задание 3 */
 /* let block = document.querySelectorAll('.block2');
 for(let item of block){
    item.addEventListener('click',(event)=>changeBlock(event));
    }
 function changeBlock(event){
    event.target.classList.toggle('scale');
} 
 */
/* 4 */
let block = document.querySelectorAll('.block3');
let block2 = document.querySelector('.block4');
for(i =0; i<block.length; i++){
    block[i].style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 256) + ', ' 
    + Math.floor(Math.random() * 256) + ', ' 
    + Math.floor(Math.random() * 256) + ')';
}
for(let item of block){
    item.addEventListener('click',(event)=>changeBlock(event));
    }
 function changeBlock(event){
    block2.style.backgroundColor =   getComputedStyle(event.target).backgroundColor;
} 
