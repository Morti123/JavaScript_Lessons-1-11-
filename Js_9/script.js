/* Задание 1 */
/* let a = prompt('введите строку');
let el = document.querySelector('p');
let newEl = [];
for(i = 1; i <= 6;i++){
   newEl.push(document.createElement('h' + i));
   
}
for(i = 0; i < newEl.length;i++){
   
   newEl[i].innerText = a;
}
for(i = 0; i < newEl.length;i++){
   
   el.append(newEl[i]);
} */

/* Задание 2 */
/* let el = document.querySelector('p2')
let b = prompt('введите элемент');
let a = prompt('введите строку');
let c = prompt('введите цвет');
let newEl = document.createElement(b);
 newEl.innerText = a;
 newEl.style.color = c;
  el.append(newEl);*/

  /* Задание 3 */
  /* let el = document.querySelector('p3')
 let newEl = [];
  for(i = 1; i <= 20;i++){
   newEl.push(document.createElement('div'));
}
for(i = 0; i < newEl.length;i++){
   newEl[i].style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ')';

}
for(i = 0; i < newEl.length;i++){
   el.append(newEl[i]);
} */

/* Задание 4 */
/* let el = document.querySelector('p4')
let a =0;
 let newEl = [];
for(i = 0; i < 5;i++){
   newEl.push(document.createElement('p'));
   newEl[i].innerText =  1 + i;
}

function func(){
    if(a<5){
el.append(newEl[a]);
a+=1
}
}
setInterval(func,1000); */

/* Задание 5 */
 let el = document.querySelector('p5');
 let a = 0;
 let b = 0;
  let newEl = [];
  let past= [];
 function func(){
    if(past.length == 36) {
        clearInterval(h);
        console.log(0);
    }
   b = Math.floor(Math.random() * 36 + 1);
    for(i = 0; i < past.length;i++){
       if(b == past[i]){
          return;
       }
    }
    past.push(b);
   newEl.push(document.createElement('p'));
   newEl[a].innerText =  b;
   el.append(newEl[a]);
   a = a + 1;
 }
 let h = setInterval(func,5); 

 /* Задание 6 */
 /* let el = document.querySelector('body')
  let newEl = [];
  function func(){
    let a = Math.floor(Math.random() * 2 + 1);
    switch(a){
        case a=1: newEl.push(document.createElement('p').style.color = 'red');
        el.append(newEl[a]);
        break;
        case a=2: newEl.push(document.createElement('p').style.color = 'green');
        el.append(newEl[a]);
        break;
        case a=3: newEl.push(document.createElement('p').style.color = 'yellow');
        el.append(newEl[a]);
        break;
    }
}
 let g = 0;
 setInterval(func,20);  */
