import _ from 'lodash';

import './style.css';

 function component() {
   const element = document.createElement('div');
   const b = document.createElement('button');
   const t = document.createTextNode('Home');
   element.appendChild(b)
   b.appendChild(t);

   // Lodash, now imported by this script

  element.classList.add('hello','*','html')
  b.classList.add('good')
  
   return element;
 }

 document.body.appendChild(component());

