var sliderimg = document.querySelector('.slider-img');
var Images = ['Image1.jpg','Image2.jpg','Image3.jpg'];
var i = 0;

function prev() {
    if(i<=0) i=Images.length;
    i--;
    return setImg();
}
function next() {
    if(i >= Images.length - 1) i= -1;
    i++;
    return setImg();

}
function setImg(){
    return sliderimg.setAttribute('src', 'Images/' + Images[i]);
}
