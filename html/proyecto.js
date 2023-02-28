const cambioColor=document.querySelector('.color-fondo');
const boton=document.querySelector('button');
let contador=1
boton.addEventListener('click',()=>{
   if(contador==0){
        cambioColor.classList.add('color-fondo')
        contador=1
   }
   else{
        cambioColor.classList.remove('color-fondo')
        contador=0;
   }
},true)