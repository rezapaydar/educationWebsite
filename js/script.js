


function clicker() {
    
    let click = document.getElementById('fa-bars')
    let navbar = document.getElementById('navbar2') 


    if (click.classList.contains('fa-times')) {
        click.classList.remove('fa-times');
        click.classList.add('fa-bars');
        navbar.style.display='none';
        navbar.style.transition='0.3s';
        navbar.style.opacity='0';
        navbar.classList.toggle('navbar-toggle');


    }else{
        navbar.style.transition='0.3s';
        navbar.style.display='flex';
        navbar.style.opacity='1';
        navbar.classList.toggle('navbar-toggle');
        click.classList.add('fa-times')
        click.classList.remove('fa-bars')

    }
    
}


window.addEventListener('scroll',()=>{

    let click = document.getElementById('fa-bars')
    let navbar = document.getElementById('navbar') 
    let header = document.getElementById('header') 
    let navbar2 = document.getElementById('navbar2') 

    // let scrollPosition = window.pageYOffset;
    if (window.pageYOffset >= 30) {
        click.classList.remove('fa-times');
        navbar.style.display='none';
        header.style.position="relative";
    }else{
        header.style.position="fixed";

    }
            
});

// setInterval(function() {
//     var scrollPosition = window.scrollY;
//     var result = scrollPosition * 2; // محاسبه نتیجه جدید با استفاده از موقعیت اسکرول
//     console.log('Result:', result); // نمایش نتیجه جدید به کاربر
//   }, 100); // فراخوانی تابع هر 100 میلی ثانیه


//   function calculateScrollPosition() {

    
//     let click = document.getElementById('fa-bars')
//     let navbar = document.getElementById('navbar') 
//     let header = document.getElementById('header') 
//     let navbar2 = document.getElementById('navbar2') 

//     let scrollPosition = window.pageYOffset;
//     if (scrollPosition > 30) {
//         click.classList.remove('fa-times');
//         navbar.style.display='none';
//         header.style.position="fixed";
//     }else{
//         header.style.position="relative";

//     }
    
// }
  
  