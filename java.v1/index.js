// Zad1
const div=document.createElement("div")
div.textContent=div
const body=document.querySelector("body")
body.appendChild(div)
  
  
// Zad2  
const title = document.querySelector("h1")
title.style.color = 'red'

// Zad3
var img = document.querySelector("img");
img.setAttribute('scr', 'https://sciencenotes.org/river-definition-formation-facts/');

// Zad4
const text = document.querySelector('p');
text.style.display = 'none'

// Zad5
const mydiv = document.querySelector('.container');
mydiv.classList.add('gg');


// Zad6
const item = document.querySelector('.active')
item.classList.remove('active')


// Zad7
const bb = document.querySelector('button')
bb.textContent = 'Przycisk!'


// Zad8
const input = document.querySelector('input');
input.value = '';


// Zad9
const nn = document.createElement('li');
const unorderedList = document.querySelector('.container ul');
nn.textContent = 'Element 4'
unorderedList.appendChild(nn);


// Zad10
window.onload = function() {
    document.body.style.backgroundColor = "lightblue";
};


// Zad11
const newDiv = document.createElement("div");
newDiv.classList.add("new-div");
const header = document.querySelector("header");
header.appendChild(newDiv);


// Zad12
const headers = document.querySelectorAll('h3');
if (headers.length >= 1) {
    headers[1].style.color = 'green';
}


// Zad13
const foto = document.querySelector('main img');
foto.dataset.src = 'https://sciencenotes.org/river-definition-formation-facts/';
foto.removeAttribute('src');


// Zad14
const paragraphs = document.querySelectorAll('p');
for (let mm = 1; mm < paragraphs.length; mm += 2) {   
  paragraphs[mm].style.display = 'none';          
}


// Zad15
const okkk = document.querySelectorAll('li');
if (okkk.length >= 3) {                      
  const hjk = okkk[2];             
  hjk.classList.add('selected');
}


// Zad16
function addElement() {
  var list = document.querySelector('details > ul > li');      
  var newItem = document.createElement('li');        
  newItem.textContent = 'Nowy element';               
  list.insertBefore(newItem, list.firstChild);      
}


// Zad17
function removeElements() {
  var listItems = document.querySelectorAll('ul li');

  for (var i = 1; i < listItems.length; i += 2) {
    listItems[i].remove();
  }
}

var button = document.createElement('button');
button.textContent = 'usuń co drugi element';

document.body.appendChild(button);

button.addEventListener('click', removeElements);







