const img = document.querySelector('.slider_img');

const imgArr = ['./img/slider/slideOne.png', 
                './img/slider/slideTwo.png', 
                './img/slider/slideThree.png'];

let currentIndex = 0;

const slide = (direction) => {
    currentIndex += direction;
        if(currentIndex >= imgArr.length){
        currentIndex = 0;
        }else if(currentIndex < 0){
        currentIndex = imgArr.length - 1;}

    img.src = imgArr[currentIndex];
}