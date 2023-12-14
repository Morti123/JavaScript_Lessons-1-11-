/* let btn = document.querySelector('.btn'); */
/* let squer = document.querySelector('.block');
squer.addEventListener('click',() => {
    squer.classList.toggle('blockColor');
}) */
let numSlider =1;
let pic = ['dark.jpg', 'photo4.jpg',];
let rightBtn = document.querySelector('#right');
let leftBtn = document.querySelector('#left');
let img = document.querySelector('img');
rightBtn.addEventListener('click',()=>{ moveSlider('right')});
leftBtn.addEventListener('click',()=>{ moveSlider('left')});
function moveSlider(dir){
    switch(dir){
        case 'right':
            numSlider++;
            if(numSlider > pic.length) numSlider = 1;
            break;
            case 'left':
                numSlider--;
                if(numSlider < 1) numSlider = pic.length;
                break;
        }
       img.src = pic[numSlider-1];
}
