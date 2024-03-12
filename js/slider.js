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
        direction: 'horizontal',
        loop: true,
        observer: true,
        observeParents: true,
        spaceBetween: 10,
        breakpoints: {
            1441: {
                slidesPerView: 1.54,
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
        spaceBetween: 20,
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

if (document.querySelector('.project-page__slider')) {
    const servicesSlider = document.querySelector('.project-page__slider');
    const swiper = new Swiper(servicesSlider, {
        // Optional parameters
        slidesPerView: 1,
        direction: 'horizontal',
        spaceBetween: 20,
        loop: true,

        navigation: {
            nextEl: '.project-page-slider__button-next',
            prevEl: '.project-page-slider__button-prev',
        },
    });
}

if (document.querySelector('.project__tabs-slider')) {

    const projectSliders = document.querySelectorAll('.project__tabs-slider');
    const thumbSlider = document.querySelector('.project__tabs-row');
    const tabs = document.querySelectorAll('.project__tab');

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
                slidesPerView: 1.5,
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
    let arraySwiper = [];

    projectSliders.forEach((sliderId) => {
        let sw = new Swiper(sliderId, {
            // Optional parameters
            direction: 'horizontal',
            loop: false,
            spaceBetween: 20,
            initialSlide: 0,

            // effect: 'fade',
            // fadeEffect: {
            //     crossFade: true
            // },

            // Navigation arrows
            navigation: {
                nextEl: sliderId.querySelector('.project__tabs-button-next'),
                prevEl: sliderId.querySelector('.project__tabs-button-prev'),
            },
        });
        arraySwiper.push(sw)
    })

    const lastMinSwiper = arraySwiper[arraySwiper.length - 1];
    const firstMinSwiper = arraySwiper[0];

    let btnNextLast = lastMinSwiper.navigation.nextEl;
    let btnPrevLast = lastMinSwiper.navigation.prevEl;

    let btnNextFirst = firstMinSwiper.navigation.nextEl;
    let btnPrevFirst = firstMinSwiper.navigation.prevEl;

    let nextIndex = 0;
    let prevIndex = 0;
    let inx = 0;
    let inx2 = 0;
    // lats
    btnNextLast.addEventListener('click', () => {
        if (lastMinSwiper.activeIndex === lastMinSwiper.slides.length - 1 && nextIndex !== 2) {
            nextIndex += 1;
        }
        inx2 = 0
        if (lastMinSwiper.activeIndex === lastMinSwiper.slides.length - 1 && nextIndex === 2) {

            swiper2.slideTo(0);
            nextIndex = 0;

            arraySwiper.forEach(sl => {
                sl.update();
                sl.slideTo(0)
                sl.updateProgress();
            })
            firstMinSwiper.update();
            firstMinSwiper.slideTo(0)
            firstMinSwiper.updateProgress();
            lastMinSwiper.update();
            lastMinSwiper.slideTo(0)
            lastMinSwiper.updateProgress();
            inx2 = 2;
        }
    });

    btnPrevLast.addEventListener('click', () => {
        nextIndex = 0;
        if (lastMinSwiper.slides[0].classList.contains('swiper-slide-active') && inx2 !== 2) {
            inx2 += 1;
        }
        if (lastMinSwiper.slides[0].classList.contains('swiper-slide-active') && inx2 === 2) {
            swiper2.slideTo(swiper2.slides.length - 2);
            arraySwiper.forEach(sl => {
                sl.update();
                sl.slideTo(0)
                sl.updateProgress();
            })
            firstMinSwiper.update();
            firstMinSwiper.slideTo(0)
            firstMinSwiper.updateProgress();
            lastMinSwiper.update();
            lastMinSwiper.slideTo(0)
            lastMinSwiper.updateProgress();
            inx2 = 2;
        }

    });
    // first
    let nextIndx = 0;
    btnNextFirst.addEventListener('click', () => {
        prevIndex = 1;
        inx2 = 0;
        if (firstMinSwiper.slides.length - 1 === firstMinSwiper.activeIndex && nextIndx !== 2) {
            nextIndx += 1;
        }
        if (firstMinSwiper.slides.length - 1 === firstMinSwiper.activeIndex && nextIndx === 2) {
            nextIndx += 1;
            swiper2.slideTo(1);
            nextIndx = 0;
            inx = -2;
            console.log(inx)
            arraySwiper.forEach(sl => {
                sl.update();
                sl.slideTo(0)
                sl.updateProgress();
            })
            firstMinSwiper.update();
            firstMinSwiper.slideTo(0)
            firstMinSwiper.updateProgress();
            lastMinSwiper.update();
            lastMinSwiper.slideTo(0)
            lastMinSwiper.updateProgress();
        }
    });

    btnPrevFirst.addEventListener('click', () => {

        nextIndx = 0
        if (prevIndex === 0) {
            arraySwiper.forEach(sl => {
                sl.update();
                sl.slideTo(0)
                sl.updateProgress();
            })
            firstMinSwiper.update();
            firstMinSwiper.slideTo(0)
            firstMinSwiper.updateProgress();
            lastMinSwiper.update();
            lastMinSwiper.slideTo(0)
            lastMinSwiper.updateProgress();

            swiper2.slideTo(swiper2.slides.length - 1);
            prevIndex = 0;
            inx2 = 2;
        }
        if (prevIndex !== 0) {
            prevIndex -= 1;
        }
    });


    // ////////////////////////////////////////

    let arrayNotFirstAndLast = arraySwiper
    arrayNotFirstAndLast.shift();
    arrayNotFirstAndLast.pop();

    arrayNotFirstAndLast.forEach(sliderId => {
        sliderId.navigation.nextEl.addEventListener('click', () => {
            const lastSlide = sliderId.slides[sliderId.slides.length - 1];
            inx = -2;
            console.log(countNext, countPrev, inx)
            if (lastSlide.classList.contains('swiper-slide-active') && countNext !== 2) {
                countNext += 1;
                inx += 2;
            }
            if (lastSlide.classList.contains('swiper-slide-active') && countNext == 2) {
                swiper2.slideTo(swiper2.activeIndex + 1);
                countNext = 0;
                arraySwiper.forEach(sl => {
                    sl.update();
                    sl.slideTo(0)
                    sl.updateProgress();
                })
                inx = -2;
                firstMinSwiper.update();
                firstMinSwiper.slideTo(0)
                firstMinSwiper.updateProgress();
                lastMinSwiper.update();
                lastMinSwiper.slideTo(0)
                lastMinSwiper.updateProgress();
                inx2 = 2;
            }
        })
        // prev

        sliderId.navigation.prevEl.addEventListener('click', () => {
            const firstSlide = sliderId.slides[0];

            // swiper2.slideTo(swiper2.activeIndex - 1);
            if (firstSlide.classList.contains('swiper-slide-active') && inx !== -2) {
                inx -= 1;
            }
            if (firstSlide.classList.contains('swiper-slide-active') && inx === -2) {
                swiper2.slideTo(swiper2.activeIndex - 1);
                inx = -2;
                countNext = 0;
                arraySwiper.forEach(sl => {
                    sl.update();
                    sl.slideTo(0)
                    sl.updateProgress();
                })
                firstMinSwiper.update();
                firstMinSwiper.slideTo(0)
                firstMinSwiper.updateProgress();
                lastMinSwiper.update();
                lastMinSwiper.slideTo(0)
                lastMinSwiper.updateProgress();
            }

        });
    })

    tabs.forEach(tb => {
        tb.addEventListener('click', () => {
            countNext = 0;
            nextIndx = 2
            inx = -2
            inx2 = 2;
        });
    });
}