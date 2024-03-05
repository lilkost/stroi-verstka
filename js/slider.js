if (document.querySelector('.info-slider')) {
    const infoSlider = document.querySelector('.info-slider');
    const swiper = new Swiper(infoSlider, {
        // Optional parameters
        direction: 'horizontal',
        loop: false,


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

if (document.querySelector('.blog-slider')) {
    const blogSlider = document.querySelector('.blog-slider');
    const swiper = new Swiper(blogSlider, {
        // Optional parameters
        direction: 'horizontal',
        loop: false,

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

if (document.querySelector('.project__tabs-slider')) {

    const projectSliders = document.querySelectorAll('.project__tabs-slider');
    const thumbSlider = document.querySelector('.project__tabs-row');

    let swiper1 = new Swiper(thumbSlider, {
        spaceBetween: 10,
        slidesPerView: 5,
        watchSlidesProgress: true,
        breakpoints: {
            1002: {
                slidesPerView: 5,
            },
            1001: {
                slidesPerView: 4,

            },
            993: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 3.5,
            },
            769: {
                slidesPerView: 3.5,
            },
            768: {
                slidesPerView: 3,
            },
            569: {
                slidesPerView: 3,
            },
            568: {
                slidesPerView: 2.5,
            },
            441: {
                slidesPerView: 2.5,
            },
            440: {
                slidesPerView: 2,
            },
            376: {
                slidesPerView: 2,
            },
            280: {
                slidesPerView: 2,
            }
        },
    });

    let swiper2 = new Swiper(".project__tabs-content", {
        thumbs: {
            swiper: swiper1,
        },
    });
    const sliderWrapperLength = document.querySelectorAll('.project__tabs-slider-wrapper').length
    let countNext = 0;
    let countPrev = 0;
    projectSliders.forEach((sliderId) => {
        // next
        sliderId.querySelector('.project__tabs-button-next').addEventListener('click', () => {
            const lastSlide = sliderId.querySelectorAll('.project__tabs-slide')[sliderId.querySelectorAll('.project__tabs-slide').length - 1];

            if (lastSlide.classList.contains('swiper-slide-active')) {
                console.log(swiper2.activeIndex + 1, sliderWrapperLength)
                swiper2.slideTo(swiper2.activeIndex + 1);
                // if (swiper2.activeIndex + 1 !== sliderWrapperLength && countNext === 0) {
                //     swiper2.slideTo(swiper2.activeIndex + 1);
                // }

                // if (swiper2.activeIndex + 1 === sliderWrapperLength) {
                //     countNext += 1;
                // }

                // if (swiper2.activeIndex + 1 === sliderWrapperLength && countNext === 2) {
                //     swiper2.slideTo(0);
                //     countPrev = 2;
                //     countNext = 0;
                //     console.log(true)
                // }
            }
        })
        // prev
        sliderId.querySelector('.project__tabs-button-prev').addEventListener('click', () => {
            const firstSlide = sliderId.querySelectorAll('.project__tabs-slide')[0];
            console.log(swiper2.activeIndex, countPrev)
            if (firstSlide.classList.contains('swiper-slide-active')) {
                swiper2.slideTo(swiper2.activeIndex - 1);
                // if(swiper2.activeIndex - 1 !== 0 && countPrev === 0) {
                // }
                // if (swiper2.activeIndex !== 0 && countPrev === 0) {
                //     swiper2.slideTo(swiper2.activeIndex - 1);
                // }
                // if (swiper2.activeIndex === 0 && countPrev !== 2) {
                //     countPrev += 1;
                // }
                // if (swiper2.activeIndex === 0 && countPrev === 2) {
                //     console.log('go end', swiper2.slides.length)
                //     swiper2.slideTo(swiper2.slides.length);
                //     countNext = 2;
                //     countPrev = 0;
                // }
            }
        });


        const swiper = new Swiper(sliderId, {
            // Optional parameters
            direction: 'horizontal',
            loop: false,

            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },



            // Navigation arrows
            navigation: {
                nextEl: sliderId.querySelector('.project__tabs-button-next'),
                prevEl: sliderId.querySelector('.project__tabs-button-prev'),
            },
        });
    })
}


