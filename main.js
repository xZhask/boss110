const buttonsBoss = document.querySelectorAll('.buttonBoss');
const listTime = document.querySelector('#list_time');
let list=''
for(var i=0;i<buttonsBoss.length;i++)
  {
      buttonsBoss[i].addEventListener("click", function()
      {
        let fecha = new Date();
        let time = this.id+' '+ fecha.getHours()+':'+fecha.getMinutes()+':'+fecha.getSeconds()
        this.className += " active"
        list +='<li>'+time+'</li>';
        listTime.innerHTML=list;
        localStorage.setItem('time',list);
      }); 
  }