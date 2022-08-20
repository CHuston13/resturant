import _ from 'lodash';


import './style.css'
export default function printMe() {
  const p3 = document.getElementById('content');
const page2 = document.getElementById('odin');
page2.innerHTML = '';
const d2 = document.createElement('div');
const b2 = document.createElement('button');
b2.id='refresh';
b2.onclick=refreshPage;
const bt2 = document.createTextNode('Home');
//all dynamic styling && appending
p3.appendChild(page2);
p3.appendChild(d2);
p3.appendChild(b2);
d2.appendChild(b2);
b2.appendChild(bt2);




return p3;

  }


  function refreshPage(){
   const refresher = document.getElementById('refresh');
   refresher.onclick = window.location.reload();
  }



 

  