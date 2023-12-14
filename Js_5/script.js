/* let arr = [1,'x',2,'y',3,'й',4,5];
let str='';
let arr1 = arr.map(item=>{
    if(typeof(item) =='string') str+=item;
    });
console.log(str.split('').sort().join('')); */

/* object */
/* let person ={
    name: 'Timur',
    gender: 'gay',
    hobby: {
        bdsm: true,
    }
}
person.showYourGender = () => console.log(`I know ${person.name} is ${person.gender}`)
for(let key in person){
    console.log(person[key]);
}*/

/* задание 1 */
 /* let car = {
  marc: 'Audi',
  model: 'Q5',
  year: 2020,
  delta_speed: 120,
}
car.show = () =>{for(let key in car){
    console.log(car[key]);
}};
let S =+prompt('введите расстояние');
function time(car){
 console.log(S/car.delta_speed);
} 
/* задание 2 */
/* let t = S/car.delta_speed;
function time2(){
    for(i=0; i<=S/car.delta_speed; i++){
        if(i%2 == 0){
            t++;
        }
    }
    console.log('Вы в пути', t);
   }   */
   /* задание 3 */
   let arrObj = [];
   for(let i=0; i<3; i++){
       let obj ={
           name: i,
           age: i,
           gender: i
       }
       arrObj.push(obj);
   }