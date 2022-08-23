
import _ from 'lodash';

import './style.css';
import Icon from './odin.png';
import printMe from './print.js';



 function component() {
 
   const element = document.createElement('div');
   const wb = document.createElement('div');
   element.id='odin';
   const b = document.createElement('button');
   const t = document.createTextNode('Home');
   const h =  document.createElement('h1');
   const ht = document.createTextNode('Olympus');
   const p= document.createElement('h2');
   const pt = document.createTextNode('Lorem Ipsum is simply dummy text of the printing and typesetting industry. ')
   const btn = document.createElement('button'); 
   const Menu = document.createElement('button');
    const MenuT = document.createTextNode('Menu');
  
 
   element.appendChild(b);
   element.appendChild(wb);
   b.appendChild(t);
   element.appendChild(h);
   h.appendChild(ht);
   wb.appendChild(p);
   p.appendChild(pt);
   btn.innerHTML = 'About';
   element.appendChild(Menu);
   Menu.appendChild(MenuT);
   Menu.classList.add('button3');
   wb.classList.add('about');

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
  
  btn.classList.add('twice');
  
  
  
  
   return element;

 
 }

 document.body.appendChild(component());