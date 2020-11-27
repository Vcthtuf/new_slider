
// hamburger

window.addEventListener('DOMContentLoaded', () => {

    let slideIndex = 1,  // номер текущего слайда
        position = document.querySelector('.slider__track'),  // позиция слайдера
        slides = document.querySelectorAll('.slider__item'),  // слайды
        prev = document.querySelector('.button__prev'),  // кнопка назад
        next = document.querySelector('.button__next'),  // кнопка вперед
        dotsWrap = document.querySelector('.slider__dots'),  // контейнер для точек
        dots = document.querySelectorAll('.dot'); // точки
    let automatic = false; // автоматическая прокрутка

    if (automatic) {                 // включение автоматической прокрутки
        prev.style.display = 'none';
        next.style.display = 'none';
        let auto = setInterval(function show() {
            slideIndex += 1;
            showSlides(slideIndex);
        }, 1000);
    } else {                        // или отмена автоматической прокрутки
        showSlides(slideIndex);
    }

    // функция показа одного из слайдов

    function showSlides(n) {

        if (n > slides.length) {  // если закончились слайды, то переходим к первому
            slideIndex = 1;
        }

        if (n < 1) {                   // если меньше первого слайда, то переходим к последнему
            slideIndex = slides.length;
        }

        dots.forEach((item) => item.classList.remove('dot_active')); // убираем активность всех точек

        position.style.left = (-slideIndex + 1) * 100 + "%";
        dots[slideIndex - 1].classList.add('dot_active'); // делаем активной одну точку

    }

    // функция перебора слайдов

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // функция показа текущего слайда

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function () {  // обработчик кнопки "Назад"
        plusSlides(-1);
    });

    next.addEventListener('click', function () { // обработчик кнопки "Вперед"
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function (event) {  // обработчик нажатия на точки 
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i - 1] && event.target.classList.contains('dot_active') == false) {
                currentSlide(i);
            }
        }
    });

})