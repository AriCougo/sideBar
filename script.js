const  menuBar = document.querySelectorAll('.menu-bar');

function selectedItem(){
    menuBar.forEach((item)=>
        item.classList.remove('default')
       
    ) 
    this.classList.add('default');
} 

menuBar.forEach((item)=>
    item.addEventListener('click', selectedItem)
)

let sideBar = document.querySelector('.side-bar');
let moon = document.getElementById('moon-icon');

moon.addEventListener('click', () => {
   if(moon.classList.contains('fa-moon')){
    moon.classList.remove('fa-moon');
    moon.classList.add('fa-sun');

    sideBar.classList.add('active');
    return;
   }

   moon.classList.add('fa-moon');
   moon.classList.remove('fa-sun');
   sideBar.classList.remove('active');
})
