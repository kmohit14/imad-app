console.log('Loaded!');

//Change the text
var element = document.getElementById('main-text');
element.innerHTML = 'Hello, I am Mohit K...!!';

//Move image on click
var img = document.getElementById('madi');
img.onclick = function(){
    img.style.marginLeft = '150px';
};