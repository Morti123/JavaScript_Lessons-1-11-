
/* if(a==1){
 alert('true')
}
else{
    console.lof('0')
}
 */
/* switch(a){
    case 0:
        console.log(0);
        break;
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    default:
        
    console.log('none')
} */

/* Задание 1 */ 
/* let a = +prompt('введите количество км:');
const mile = 0.621371;
console.log(a * mile); */

/* Задание 3 */
/* let a = +prompt('введите число:');
if(a>0){
    console.log('Число ', a  ,' положительное' )
}
else if(a<0){
    console.log('Число ', a  ,' отрицательное' )
}
else{
    console.log( a  ,'=0' )
} */

/* Задание 6 */
/* let a = +prompt('номер месяца:');
switch(a){
    case 1:
        alert('январь');
        break;
    case 2:
        alert('февраль');
        break;
    case 3:
        alert('март');
        break;
    case 4:
        alert('апрель');
        break;
    case 5:
        alert('май');
        break;
    case 6:
        alert('июнь');
        break;
    case 7:
        alert('июль');
        break;
    case 8:
        alert('август');
        break;
    case 9:
        alert('сентябрь');
        break;
    case 10:
        alert('октябрь');
        break;
    case 11:
        alert('ноябрь');
        break;
    case 12:
        alert('декабрь');
        break;
    default:
        alert('в году 12 месяцев неуч!');
        break;
} */
/* for(i=0; i<3; i++){
    for(j=0; j<3; j++){
        console.log('i = '+i, ' j = '+j)
    }
} */
let a = +prompt('начало диапазона:');
let b = +prompt('конец диапазона:');
let sum = 0;
for(i=a; i<=b; i++){
   sum=sum+i;
}
console.log(sum);
