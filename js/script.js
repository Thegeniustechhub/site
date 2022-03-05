

$(document).ready(function(){

      // Feather Icon Js
		feather.replace();

        // dark mode

       const toggle = document.querySelector('.toggle');

       if(localStorage.getItem('toggle') == 'null') {
        localStorage.setItem('toggle', 'light');
    }

         let localData = localStorage.getItem('toggle');

       if(localData == 'light') {
         document.body.classList.remove('dark');
    }
       else if(localData == 'dark'){
        document.body.classList.add('dark');

    }

       
       function changeMode() {
        document.body.classList.toggle('dark');
        if(document.body.classList.contains('dark')) {
            localStorage.setItem('toggle', 'dark');
        }
        else {
            localStorage.setItem('toggle', 'light');
        } 
       }

       toggle.addEventListener('click', changeMode);

    //    Active Menu
    // const links = document.querySelectorAll('.nav-link');
    // const sections = document.querySelectorAll('section');

    // function activeMenu() {
    //     let len = sections.length;
    //     while (--len && window.screenY + 97 < sections[len].offsetTop) {}
    //     links.forEach(ltx => ltx.classList.remove('active'));
    //     links[len].classList.add('active');
    // }

    // window.addEventListener('scroll', activeMenu);

    $('.link').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });

    // wow initiation
    new WOW().init();

    // navigation bar toggle
    $('#navbar-toggler').click(function(){
        $('.navbar-collapse').slideToggle(400);
    });

    // navbar bg change on scroll
    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        let logo = document.getElementById('logo');
        if(pos >= 100){
            $('.navbar').addClass('cng-navbar');
            logo.src = 'assets/Logo1.png';
        } else {
            $('.navbar').removeClass('cng-navbar');
            logo.src = 'assets/Logo3.png';
        }
    });

    // Projct Carousel

    $('.video .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        nav: false,
        items: 1
    });

    // team carousel 
    $('.team .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        dots: true,
        nav: false,
        responsiveClass: true,
        responsive:{
            0:{
                items: 1
            }, 
            600:{
                items: 2
            },
            1000:{
                items: 3
            }
        }
    });

    // faq accordion
    $('.faq-head').each(function(){
        $(this).click(function(){
            $(this).next().toggleClass('show-faq-content');
            let icon = $(this).children('span').children("i").attr('class');

            if(icon == "fas fa-plus"){
                $(this).children('span').html('<i class = "fas fa-minus"></i>');
            } else {
                $(this).children('span').html('<i class = "fas fa-plus"></i>');
            }
        });
    });

    // testimonial carousel 
    $('.testimonial .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        nav: false,
        items: 1
    });


    // Contact Form
    let form = document.getElementById("contact-form");
    let response = document.querySelector('.response-card');
    let container = document.querySelector('.form-container');
    let status = document.getElementById("my-form-status");

    async function handleSubmit(event) {
    event.preventDefault();
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {

        status.classList.add("success");
        status.innerHTML = "Thank you, your message has been received! We will get back to you shortly.";
        
        form.reset();
      }).catch(error => {
        status.classList.add("error");
        status.innerHTML = "Oops! Something went wrong, pls try again later";
      });

      container.style.visibility = "hidden";
       container.style.height = "0px";
        response.style.visibility = "visible";

    }
    form.addEventListener("submit", handleSubmit);

    // Back to top button 
    $(window).scroll(function(){
        if($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        }
        else {
            $('.back-to-top').fadeOut('slow');
        }  
    });

    $('.back-to-top').click(function() {
       $('html, body').animate({scrollTop: 0}, 1500);
       return false;
    });

});