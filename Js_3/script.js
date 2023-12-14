/* let arr = [1,2,3,5,4,6,8,7]; */
/* for(let i=0; i<arr.length; i++){
    arr[i]++;
} */
/* for(m of arr){
    console.log(++m);
} */
/* присвоить последний элемент */
/* arr.push(false); */
/* получить последний элемент */
/* arr.pop(); */
/* присвоить первый элемент */
/* arr.unshift(); */
/* удалить элемент(empty) */
/* delete arr[2]; */
/*  удалить/заменить элемент(not empty) */
/* arr.splice('start(index), kol, change'); */
/* сортировка массива */
/* arr.sort(); */

/* 1 */
/* let arr =[];
for(i =0; i<10; i++){
    let a =+prompt('введите элементы массива');
    arr[i] = a;
    if(arr[i]%2==0){
        console.log(arr[i]);
    }
}
console.log(arr); */

/* 2 */
/* let arr =[];
let brr =[];
for(i =0; i<10; i++){
    let a =+prompt('введите элементы массива');
    arr[i] = a;
    brr[i]=arr[i]*arr[i];
}
console.log(brr); */

/* 3 */
/* let arr =[];
let a=+prompt('введите длину массива')
arr.length=a;
for(i=0; i<a; i++){
    let b=+prompt('введите элементы массива')
    arr[i]=b;
}
console.log(arr);
console.log(arr.reverse()); */

/* 4 */
/* let arr =[];
let brr =[];
for(i=0; i<10; i++){
 arr[i]=Math.ceil(Math.random(0)*9);
 brr[i]=Math.ceil(Math.random(0)*9);
}
for(i=0; i<10; i++){
    if(arr[i] == arr[i++]){
        console.log(arr[i], arr[i++])
    }
    if(brr[i] == brr[i++]){
        console.log(brr[i], brr[i++])
    }
} */


