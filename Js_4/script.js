/* let showText = function (text){
    console.log('я учу${text}');
}
function learnJS(lang, callback){
 lang = lang.UpperCase();
 callback(lang);
}
learnJS('js', showText);
 */
/* function showText(){
    console.log('привет');
}
 let showText2 = (a) => {return a+1;} */

/*  1 */
/* function equel(a,b){
    if(a<b){
        return a;
    }
    if(b<a){
        return b;
    }
}
let a = +prompt('введите 1 число');
let b = +prompt('введите 2 число');
console.log(equel(a,b))
 */
/* 2 */
 /* function app(a){
  for(i=2; i<=9; i++){
    console.log(a*i);
  }
}
let a = +prompt('введите число');
console.log(app(a)); */

/* 3 */
/* let a = prompt('введите своё имя');
function num(a){
  console.log('Hi', a);
} 
console.log(num(a)) */

/* 4 */
/* function pr(a,b){
let c =a/b;
return c - Math.floor(c);
}
let a = +prompt('введите 1 число');
let b = +prompt('введите 2 число');
console.log(pr(a,b)); */

/* 5-1 */
/* function sum(a=0,b=0,c=0,d=0,e=0){
    return a + b + c + d + e;
}
console.log(sum()); */

/* 5-2 */
/* function app(a=0,b=0,c=0,d=0,e=0){
    switch(a){
    case a>b && a>c && a >d && a >e: return a;
    case b>a && b>c && b >d && b >e: return b;
    case c>a && c>b && c >d && b >e: return c;
    case d>a && d>c && d >b && d >e: return d;
    case e>a && e>c && e >d && e >b: return e;
        }
}
console.log(app()); */

/* 6 */
let a = +prompt('введите начало диапазона');
let b = +prompt('введите конец диапазона');
function dip (a,b){
    let c;
  for(i=a;i<=b;i++){
      if(i%2==0){
          c = true;
          return c;
      }
      if(i%2!=0){
          c = false
        return c;
    }
    if(c == true){
        
    }
    for(i=a; i<b; i++){
        if(c==true && i%2==0){
            console.log(i);
        }
        if(c==false && i%2!=0){
            console.log(i);
        }
    }
}
console.log(dip());
}