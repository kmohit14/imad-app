console.log('Loaded!');

//Change the text
var element = document.getElementById('main-text');
element.innerHTML = 'Hello, I am Mohit K...!!';

//Move image on click
var img = document.getElementById('madi');
function moveRight(){
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight, 100);
};