
import _ from 'lodash';

import './style.css';
import Icon from './odin.png';
import printMe from './print.js';



 function component() {
 
   const element = document.createElement('div');
   element.id='odin';
   const b = document.createElement('button');
   const t = document.createTextNode('Home');
   const h =  document.createElement('h1');
   const ht = document.createTextNode('Huston Soul Food');
   const p= document.createElement('h2');
   const pt = document.createTextNode('Food fit for Gods. Specializing in soul food since 1833')
   const btn = document.createElement('button');
   
  
 
   element.appendChild(b);
   b.appendChild(t);
   element.appendChild(h);
   h.appendChild(ht);
   element.appendChild(p);
   p.appendChild(pt);
   btn.innerHTML = 'About';

   btn.onclick = printMe;
 
 
   element.appendChild(btn);
   btn.classList.add('button2');
  
 
 

   
   const myIcon = new Image();

   myIcon.src = Icon;
 
 
   element.appendChild(myIcon);
 
 

   // Lodash, now imported by this script

  element.classList.add('hello','*','html');
  b.classList.add('good');
  h.classList.add('gooda');
  myIcon.classList.add('icon');
  p.classList.add('text');
  btn.classList.add('twice');
  
  
  
  
   return element;

 
 }

 document.body.appendChild(component());