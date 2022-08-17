import component from './index.js';

export default function printMe() {
  const p3 = document.getElementById('content');
const page2 = document.getElementById('odin');
page2.innerHTML = '';
const d2 = document.createElement('div');
const b2 = document.createElement('button');
const bt2 = document.createTextNode('Home');
b2.onclick=component;
p3.appendChild(d2);
d2.appendChild(b2);
b2.appendChild(bt2);


return d2;

  }





 

  