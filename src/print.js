import _ from 'lodash';


import './style.css'



export default function printMe() {
  const p3 = document.getElementById('content');
const page2 = document.getElementById('odin');
page2.innerHTML = '';
const d2 = document.createElement('div');
const d3 = document.createElement('div');

const b2 = document.createElement('button');
b2.id='refresh';
b2.onclick=refreshPage;
const bt2 = document.createTextNode('Home');
const b3 = document.createElement('button');
const b4 = document.createElement('button');
const bt3 = document.createTextNode('About');
const bt4 = document.createTextNode('Menu');

//all dynamic styling && appending
p3.appendChild(page2);
p3.appendChild(d2);
p3.appendChild(b2);
d2.appendChild(b2);
d2.appendChild(d3);
b2.appendChild(bt2);
d2.classList.add('*','html');
b2.classList.add('good');
b3.classList.add('button2');
b4.classList.add('button3');
d3.classList.add('dummy');
d2.appendChild(b3);
d2.appendChild(b4);
b3.appendChild(bt3);
b4.appendChild(bt4);






const p5 = document.createElement('li');
const pt5 = document.createTextNode('Address.)123 Alphabet Street');
const p6 = document.createElement('li');
const pt6 =document.createTextNode('Phone Number.) (123)-456-7890');
const p7 = document.createElement('li');
const pt7 = document.createTextNode('Fax.)(615)-123-4567');
const p8 =document.createElement('li');
const pt8 = document.createTextNode('Education.)University of Make believe ');
d3.appendChild(p6);
p6.appendChild(pt6);
d3.appendChild(p7);
d3.appendChild(p8);
p7.appendChild(pt7);
p8.appendChild(pt8);


d3.appendChild(p5);
p5.appendChild(pt5);


p5.classList.add('textdummy');
p6.classList.add('textdummy2');
p7.classList.add('textdummy3');
p8.classList.add('textdummy4');



return d2;

  }


  function refreshPage(){
   const refresher = document.getElementById('refresh');
   refresher.onclick = window.location.reload();
  }



  

 

  