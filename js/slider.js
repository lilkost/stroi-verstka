if (document.querySelector('.info-slider')) {
    const infoSlider = document.querySelector('.info-slider');
    const swiper = new Swiper(infoSlider, {
        // Optional parameters
        direction: 'horizontal',
        loop: false,

        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },

        // If we need pagination
        pagination: {
            el: ".info-slider__pagination",
            type: 'fraction'
        },

        // Navigation arrows
        navigation: {
            nextEl: '.info-slider__button-next',
            prevEl: '.info-slider__button-prev',
        },
    });
}

if (document.querySelector('.services-slider')) {
    const servicesSlider = document.querySelector('.services-slider');
    const swiper = new Swiper(servicesSlider, {
        // Optional parameters
        slidesPerView: 1.561,
        direction: 'horizontal',
        loop: true,
        observer: true,
        observeParents: true,

        breakpoints: {
            1281: {
                slidesPerView: 1.561,
            },
            1280: {
                slidesPerView: 1.3,
            },
            1101: {
                slidesPerView: 1.3,
            },
            280: {

                slidesPerView: 1,
            }
        },
        navigation: {
            nextEl: '.services-slider__button-next',
            prevEl: '.services-slider__button-prev',
        },
    });
}

if (document.querySelector('.project__tabs-slider')) {
    const projectSliders = document.querySelectorAll('.project__tabs-slider');

    projectSliders.forEach(slider => {
        const swiper = new Swiper(slider, {
            // Optional parameters
            direction: 'horizontal',
            loop: true,

            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },

            // Navigation arrows
            navigation: {
                nextEl: slider.querySelector('.project__tabs-button-next'),
                prevEl: slider.querySelector('.project__tabs-button-prev'),
            },
        });
    })
}

if (document.querySelector('.blog-slider')) {
    const blogSlider = document.querySelector('.blog-slider');
    const swiper = new Swiper(blogSlider, {
        // Optional parameters
        direction: 'horizontal',
        loop: false,

        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },

        // If we need pagination
        pagination: {
            el: ".blog-slider__pagination",
            type: 'fraction'
        },

        // Navigation arrows
        navigation: {
            nextEl: '.blog-slider__button-next',
            prevEl: '.blog-slider__button-prev',
        },
    });
}
