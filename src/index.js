import _ from 'lodash';

import './style.css';

 function component() {
   const element = document.createElement('div');
   const b = document.createElement('button');
   const t = document.createTextNode('Home');
   const h =  document.createElement('h1');
   const ht = document.createTextNode('Huston Soul Food');
   element.appendChild(b);
   b.appendChild(t);
   element.appendChild(h);
   h.appendChild(ht);

   // Lodash, now imported by this script

  element.classList.add('hello','*','html');
  b.classList.add('good');
  h.classList.add('gooda');
  
  
   return element;
 }

 document.body.appendChild(component());

