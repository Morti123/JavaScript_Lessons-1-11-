/* Тип данных (как узнать)*/
/* let a ='привет'; */
/* console.log(typeof(a));  */

/* Количество символов */
/* console.log(a.length); */

/* Вывод конкретного символа(строки) */
/* console.log(a.charAt(3)); */

/* Объединение строк */
/* console.log(a.concat(x)); */

/* Проверка наличия символа(true/false) */
/* console.log(a.includes('е')); */

/* Номер вхождения символа в строку(number)*/
/* console.log(a.indexOf('е')); */

/* Обрезать элемент(диапазон) */
/* console.log(a.slice(0, 3)); */

/* Данные->Массив */
/* console.log(a.split('')); */

/* Массив->Строка */
/* console.log(a.join("")); */

/* Обрезать пробелы в начале и конце */
/* console.log(a.trim()); */

/* -1 Регистр */
/* console.log(b.toLowerCase()); */
/* +1 Регистр */
/* console.log(b.toUpperCase()); */

/* Числа */
/* let b = 1234.5678; */
/* Выделение части(знаки после запятой) */
/* console.log(b.toFixed(1)); */

/* Вызов библиотеки со встроеннами значениями */
/* console.log(Math.PI); */

/* Округление в меньшую сторону */
/* console.log(Math.floor(b)); */

/* Округление в большую сторону */
/* console.log(Math.ceil(b)); */

/* Random */
/* console.log(Math.ceil(Math.random()*(max - min) + min)); */

/* number */
 /* Задание 1-1 */
 /* let a ='52.5 триста десять тон';
 console.log(parseInt(a)); */
 /* Задание 1-2 */
  /* let a ='52.5 триста десять тон';
 console.log(parseFloat(a));  */
 /* Задание 1-3 */
   /* let a ='52.565484565';
 console.log(parseFloat(a).toFixed(4));  
  */
 /* Задание 2 */
   /* let a =+prompt('введите радиус круга');
   console.log(Math.ceil(Math.PI*a*a));
   console.log(Math.floor(Math.PI*a*a)); 
   console.log(Math.trunc(Math.PI*a*a)); */ 
 /* Задание 3-1 */ 
 /* for(i=0; i<5; i++){
 console.log(Math.trunc(Math.random()*(48 - 15) + 15));
}  */
/* Задание 3-2 */ 
/*  for(i=0; i<5; i++){
 console.log(Math.trunc(Math.random()*(7 + 30) - 30));
}   */
/* Задание 3-3 */ 
  /* for(i=0; i<5; i++){
 console.log(Math.trunc(Math.random()*(161 - 150) + 150));
}   */
/* Задание 4 */ 
/* let a=+prompt('введите начало диапазона');
let b=+prompt('введите конец диапазона');
if(a>b){
    console.log('Ошибка');
}
if(a>0){
for(i=0; i<5; i++){
    console.log(Math.trunc(Math.random()*( b - a) + a));
   } 
}
if(a<0){
    for(i=0; i<5; i++){
        console.log(Math.trunc(Math.random()*( b + a) - a));
       } 
    }*/

   /* string */
   /* Задание 1 */ 
  /*  let a=prompt('введите 1 имя');
   let b=prompt('введите 2 имя');
   let c=prompt('введите 3 имя');
   let num=a.concat(b,c)
   console.log(num);
   console.log(num.charAt(6), ' ', num.length); */

   /* Задание 2 */ 
   /* let a=prompt('введите эмейл');
   let b=a.indexOf('@');
   console.log(a.slice(a,b)); */

   /* Задание 3 */ 
   let a=prompt('введите эмейл');
   let b= a[a.length-4];
   let c= a[a.length-3];
   if(a.length>10){
       if(a.includes('@')){
           if(b.includes('.') || c.includes('.')){
               console.log('Верно')
           }
           else{
            console.log('Неверно');
        }
       }
       else{
        console.log('Неверно');
    }
   }
else{
    console.log('Неверно');
}