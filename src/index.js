
import _ from 'lodash';

import './style.css';
import Icon from './odin.png';

 function component() {
   const element = document.createElement('div');
   const b = document.createElement('button');
   const t = document.createTextNode('Home');
   const h =  document.createElement('h1');
   const ht = document.createTextNode('Huston Soul Food');
   const p= document.createElement('h2');
   const pt = document.createTextNode('Food fit for Gods')

   element.appendChild(b);
   b.appendChild(t);
   element.appendChild(h);
   h.appendChild(ht);
   element.appendChild(p);
   p.appendChild(pt);
   const myIcon = new Image();

   myIcon.src = Icon;
 
 
   element.appendChild(myIcon);
 
 

   // Lodash, now imported by this script

  element.classList.add('hello','*','html');
  b.classList.add('good');
  h.classList.add('gooda');
  myIcon.classList.add('icon');
  p.classList.add('text');
  
  
  
  
   return element;
 }

 document.body.appendChild(component());