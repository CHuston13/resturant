import _ from 'lodash';
import './style.css';
import printMe from './print.js';

export default function Menus(){
    const q3 = document.getElementById('content');
    const qage2 = document.getElementById('odin');
    qage2.innerHTML = '';
    const daf = document.createElement('div');
    daf.id='daffy';
    const mbtn = document.createElement('button');
    const abtn = document.createElement('button');
    const hbtn = document.createElement('button');
    const mt = document.createTextNode('Menu');
    const at = document.createTextNode('About');
    const ht = document.createTextNode('Home');




    q3.appendChild(daf);
    
   
    daf.appendChild(mbtn);
    daf.appendChild(abtn);
    daf.appendChild(hbtn);
    mbtn.appendChild(mt);
    abtn.appendChild(at);
    hbtn.appendChild(ht);
    hbtn.onclick=refreshPage;
    abtn.onclick=printMe;

    
   daf.classList.add('backups');
   mbtn.classList.add('button3');
   abtn.classList.add('button2');
   hbtn.classList.add('good');
   



    return daf;
}


function refreshPage(){
    const refresher = document.getElementById('refresh');
    refresher.onclick = window.location.reload();
   }
 


