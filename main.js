const Bp1 = document.querySelector('#p1');
Bp1.addEventListener('click', ()=> 
    { let fecha = new Date();
      alert(fecha.getHours()+':'+fecha.getMinutes()+':'+fecha.getSeconds());
    })
