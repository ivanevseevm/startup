// ---- Preloader and AOS ----
window.onload = function() {
    setTimeout(function() {
        document.querySelector('.preloader').classList.add('end');
        document.querySelector('body').style.overflowY = 'scroll';

        AOS.init({
            disable: 'mobile',
            startEvent: 'DOMContentLoaded',
            easing: 'ease',
            // once: true,
            duration: 800,
        });
    }, 1000);
}
// ---- / Preloader and AOS ----


// ---- Header Menu ----
const headerMenuButtons = document.querySelectorAll('.header__menu-button'),
    headerMenu = document.querySelector('.header__menu'),
    overlay = document.querySelector('.overlay');
    
let headerMenuMod = false;

headerMenuButtons.forEach(headerMenuButton => {
    headerMenuButton.addEventListener('click', function() {
        if (!headerMenuMod) {
            headerMenu.classList.add('_active');
            overlay.classList.add('_active');
            headerMenuMod = true;
        } else {
            headerMenu.classList.remove('_active');
            overlay.classList.remove('_active');
            headerMenuMod = false;
        }
    });
});


overlay.addEventListener('click', function() {
    headerMenu.classList.remove('_active');
    overlay.classList.remove('_active');
    headerMenuMod = false;
});
// ---- / Header Menu ----


// ---- About us Slider ----

$(document).ready(function() {
    $('.about-us__slider').slick({
        arrows: true,           //Стрелки управления
        dots: false,            //Точки
        slidesToShow: 4,        //Кол-во видимых слайдеров
        slidesToScroll: 1,      //Кол-во пролистываемых слайдеров за нажатие
        speed: 650,             //Скорость пролистывания 
        easing: 'ease',         //Тип анимации пролистывания
        infinite: true,         //Бесконечность слайдера

        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});

// ---- / About us Slider ----



// ---- Posts ----
const postsPreviews = document.querySelectorAll('.posts__preview');
heightAsWidth(postsPreviews, -138);

window.addEventListener('resize', function() {
    heightAsWidth(postsPreviews, -138);
});
// ---- / Posts ----



// ---- Additional features ----
function heightAsWidth(collection, difference = 0) {
    collection.forEach(element => {
        element.style.height = element.offsetWidth + difference + 'px';
    });
}
// ----/ Additional features----



// ---- Clients ----
$('.clients__brands-slider').slick({
    arrows: false,
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 7000,
});

$('.clients__reviews-slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    fade: true,
    cssEase: 'linear',
    draggable: false,
})
// ----/ Clients----
