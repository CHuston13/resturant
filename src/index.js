import _ from 'lodash';


 function component() {
  const element = document.createElement('button');
  let e = document.createTextNode('hey');
  element.appendChild(e)

   
  
   


  // Lodash, now imported by this script
  
   return element  ;
 }
const currentDiv = document.getElementById('content')
 document.body.appendChild(component());