// $(".navbar2").text("New Text");


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
        // navbar.style.display='none';

        header.style.position="fixed";
        header.style.width="100%";
        header.style.borderRadius="0";
        header.style.top="0";
        header.style.boxShadow="none";
        header.style.background="white";

    }else{



        header.style.position="relative";
        header.style.width="96%";
        header.style.borderRadius="5rem";
        header.style.top="2rem";
        header.style.boxShadow="1px 5px 41px 5px rgba(0,0,0,0.3)";
        header.style.background="#fff";

    }

        var element = document.getElementById('review');
        var position = element.getBoundingClientRect();
        var scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      
        if (position.top <= scrollPosition) {
          // کاری که می‌خواهید انجام دهید
            $("#header").addClass('transHeader');
            $("#header").css("background-color", "transparent");
        }else{
            $("#header").css("background-color", "white");
            $("#header").removeClass('transHeader');
        }
      

    // var section = $('section')
    $('section').each(function(i,Element) {
        var top = $(window).scrollTop();
        var id = $(Element).attr('id');
        var height= $(Element).height();
        var offset = $(Element).offset().top - 200;
        // var top = offset.top;
        // var left = offset.left;
        if (top>=offset && top < height + offset) {
            $('.navbar ul li a').removeClass('active');
            $('.navbar').find(`a[href="#${id}"]`).addClass('active');
            console.log(`[href="#${id}]"`)
        }
    })
            
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
  
  