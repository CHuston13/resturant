import _ from 'lodash';
import './style.css';
import printMe from './print.js';
import Icon from './burger.jpg'

export default function Menus(){
    const q3 = document.getElementById('content');
    const qage2 = document.getElementById('odin');
    qage2.innerHTML = '';
    const daf = document.createElement('div');
    const tre = document.createElement('div');
    daf.id='daffy';
    const mbtn = document.createElement('button');
    const abtn = document.createElement('button');
    const hbtn = document.createElement('button');
    const foo = document.createElement('p');
    const fooT = document.createTextNode('Our full menu can only be viewed in house ');
    const mt = document.createTextNode('Menu');
    const at = document.createTextNode('About');
    const ht = document.createTextNode('Home');


    const myIcons = new Image();

    myIcons.src = Icon;
  
  
    daf.appendChild(myIcons);
  

    q3.appendChild(daf);
    daf.appendChild(tre);
    daf.appendChild(foo);
    foo.appendChild(fooT);
   
    daf.appendChild(mbtn);
    daf.appendChild(abtn);
    daf.appendChild(hbtn);
    mbtn.appendChild(mt);
    abtn.appendChild(at);
    hbtn.appendChild(ht);
    hbtn.onclick=refreshPage;
    abtn.onclick=remove;

    
   daf.classList.add('backups');
   mbtn.classList.add('button3');
   abtn.classList.add('button2');
   hbtn.classList.add('good');
   myIcons.classList.add('burger');
    foo.classList.add('burgerT');
   



    return daf;
}


function refreshPage(){
    const refresher = document.getElementById('refresh');
    refresher.onclick = window.location.reload();
   }
 
function remove(){
  removeStyle();
   printMe();
}

function removeStyle(){
    const removeS = document.getElementById('daffy');
   removeS.innerHTML='';
   removeS.style.background='white';
}
