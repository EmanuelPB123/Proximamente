
var btn = document.getElementById('btn'),
caja = document.getElementById('bgimg'),
caja2 = document.getElementById('intro'),
caja3 = document.getElementById('introB'),
caja4 = document.getElementById('introC'),
caja5 = document.getElementById('info'),
caja6 = document.getElementById('light1'),
contador=0;


function cambio()

{   if(contador == 0)
{
        caja.classList.add('bgimg2');
        caja2.classList.add('intro2');
        caja3.classList.add('introB');
        caja4.classList.add('introC');
        caja5.classList.add('info2');
/*         caja6.classList.add('light1off'); */
        contador = 1;
    }
    else
    {
        caja.classList.remove('bgimg2');
        caja2.classList.remove('intro2');
        caja3.classList.remove('introB');
        caja4.classList.remove('introC');
        caja5.classList.remove('info2');
/*         caja6.classList.remove('light1off'); */
        contador = 0}
 
}

btn.addEventListener('click',cambio,true)

