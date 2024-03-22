let sliderList = document.querySelector('.portfolio__list');
const swiperPor = new Swiper(sliderList, {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 60,
    allowTouchMove: false,
    navigation: {
        nextEl: '.portfolio-list__button-next',
        prevEl: '.portfolio-list__button-prev',
    },
    breakpoints: {
        1281: {
            slidesPerView: 'auto',
            loop: false,
            allowTouchMove: false,
            spaceBetween: 60,
        },
        993: {
            slidesPerView: 3,
            loop: true,
            allowTouchMove: true,
            spaceBetween: 60
        },
        992: {
            slidesPerView: 2.3,
            loop: true,
            allowTouchMove: true,
            spaceBetween: 20
        },
        769: {
            slidesPerView: 2.3,
            loop: true,
            allowTouchMove: true,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            loop: true,
            allowTouchMove: true,
            spaceBetween: 20
        },
        569: {
            slidesPerView: 2,
            loop: true,
            allowTouchMove: true,
            spaceBetween: 20
        },
        280: {
            slidesPerView: 1,
            loop: true,
            allowTouchMove: true,
            spaceBetween: 20
        },
    }
});
if (window.innerWidth > 992) {
    // function animate() {
    setTimeout(() => {
        const container = document.querySelector('.top');
        const widthDEfault = (window.innerWidth - document.querySelector('.top__box').clientWidth) - (window.innerWidth - document.querySelector('.top__inner').clientWidth) - 2
        const videoTop = document.querySelector('.top__video');
        videoTop.setAttribute('data-width', widthDEfault);
        videoTop.style.width = widthDEfault + 'px';

        const bodyPage = document.querySelector('body');
        const videoBlock = document.querySelector('.top__video')
        let prPX = window.innerWidth - bodyPage.scrollWidth;
        bodyPage.style.overflow = 'hidden'
        const topBox = document.querySelector('.top__box');
        bodyPage.style.paddingRight = prPX + 'px';
        // videoTop.style.right = prPX + 'px';
        document.querySelector('.header').style.width = window.innerWidth - prPX + 'px';
        console.log(prPX)
        window.addEventListener('wheel', (event) => {
            if (event.deltaY >= 0) {
                videoBlock.style.width = window.innerWidth + 'px';
                topBox.style.opacity = 0;
                document.querySelector('.main').style.zIndex = '13'
                document.querySelector('.main').style.overflow = 'hidden'
                document.querySelector('.wrapper').style.overflow = 'auto'
                setTimeout(() => {
                    bodyPage.style.overflow = ''
                    bodyPage.style.paddingRight = '';
                    // videoTop.style.right = 0 + 'px';
                    bodyPage.style.paddingRight = 0 + 'px';
                    document.querySelector('.header').style.width = window.innerWidth + 'px';
                }, 600);
            }

            if (event.deltaY < 0 && window.scrollY <= 100) {
                topBox.style.opacity = 1;
                bodyPage.style.overflow = 'hidden'
                videoBlock.style.width = widthDEfault - 10 + 'px';
                // videoTop.style.right = prPX + 'px';
                bodyPage.style.paddingRight = prPX + 'px';
                document.querySelector('.header').style.width = window.innerWidth + 'px';
                window.scrollTo(0, 0);
                document.querySelector('.main').style.zIndex = '15'
                document.querySelector('.wrapper').style.overflow = 'hidden'
                document.querySelector('.main').style.overflow = 'unset'
            }

            if (window.scrollY > 0) {
                document.querySelector('.header').style.zIndex = 16
            }
            else {
                document.querySelector('.header').style.zIndex = 13
            }
        })

        if (window.scrollY > 0) {
            bodyPage.style.overflow = ''
            bodyPage.style.paddingRight = '';
            // videoTop.style.right = 0 + 'px';
            bodyPage.style.paddingRight = 0 + 'px';
            videoBlock.style.width = window.innerWidth + 'px';
            topBox.style.opacity = 0;
            document.querySelector('.header').style.width = window.innerWidth + 'px';
            document.querySelector('.header').style.zIndex = 16;
        }

        if (window.innerWidth > 1280) {
            const galleryWrapper = document.querySelector('.portfolio');
            const gallery = document.querySelector('.portfolio__list .swiper-wrapper');
            const galleryItems = document.querySelectorAll('.portfolio__item'); // Replace with your actual class for gallery items
            const totalSlidesWidth = Array.from(galleryItems).reduce((acc, item) => acc + item.offsetWidth, 0);
            const tli = gsap.timeline({
                scrollTrigger: {
                    trigger: galleryWrapper,
                    start: '-=100',
                    end: `+=${totalSlidesWidth}`,
                    pin: true,
                    scrub: 0.5,
                    onUpdate: (event) => {
                        // console.log(tli.progress())
                        let pr = tli.progress();
                        // console.log(pr, event);
                        console.log(tli.progress())
                        if (pr < 0.3) {
                            // galleryItems[0].style.order = '1';
                            // galleryItems[0].classList.add('active');

                            // galleryItems[1].style.order = '2';
                            // galleryItems[1].classList.remove('active');

                            // galleryItems[2].style.order = '3';
                            // galleryItems[2].classList.remove('active');
                            swiperPor.slideTo(0);
                        }

                        if (pr > 0.3 && pr < 0.6) {
                            // galleryItems[0].style.order = '3';
                            // galleryItems[0].classList.remove('active');

                            // galleryItems[1].style.order = '1';
                            // galleryItems[1].classList.add('active');

                            // galleryItems[2].style.order = '2';
                            // galleryItems[2].classList.remove('active');
                            swiperPor.slideTo(1);
                        }

                        if (pr > 0.6) {
                            // galleryItems[0].style.order = '2';
                            // galleryItems[0].classList.remove('active');

                            // galleryItems[1].style.order = '3';
                            // galleryItems[1].classList.remove('active');

                            // galleryItems[2].style.order = '1';
                            // galleryItems[2].classList.add('active');
                            swiperPor.slideTo(2);
                        }


                        // Get the position of the target element
                        // const targetElement = document.querySelector('.desc-pos'); // Replace with your actual target element
                        // const targetPosition = targetElement.getBoundingClientRect().left;

                        // Add your logic to add a class to the target element and remove it from others
                        // galleryItems.forEach((item) => {

                        //     // console.log(item.getBoundingClientRect().left, targetPosition, item)
                        //     if (window.innerWidth > 1550) {
                        //         if (item.getBoundingClientRect().left <= targetPosition && item.getBoundingClientRect().left > 0) {
                        //             item.classList.add('active');
                        //         } else {
                        //             item.classList.remove('active');
                        //         }
                        //     }
                        //     else if (window.innerWidth < 1550 && window.innerWidth > 1440) {
                        //         if (item.getBoundingClientRect().left <= targetPosition && item.getBoundingClientRect().left > -50) {
                        //             item.classList.add('active');
                        //         } else {
                        //             item.classList.remove('active');
                        //         }
                        //     }
                        //     else if (window.innerWidth < 1440 && window.innerWidth > 1380) {
                        //         if (item.getBoundingClientRect().left <= targetPosition && item.getBoundingClientRect().left > -100) {
                        //             item.classList.add('active');
                        //         } else {
                        //             item.classList.remove('active');
                        //         }
                        //     }
                        //     else if (window.innerWidth < 1380 && window.innerWidth > 1280) {
                        //         if (item.getBoundingClientRect().left <= targetPosition && item.getBoundingClientRect().left > -150) {
                        //             item.classList.add('active');
                        //         } else {
                        //             item.classList.remove('active');
                        //         }
                        //     }
                        // });

                        // if (tli.progress() < 0.06) {
                        //     galleryItems.forEach((item) => {
                        //         item.classList.remove('active');
                        //         galleryItems[0].classList.add('active')
                        //     })
                        // }


                    },
                },
            });
            tli.to(gallery, {
                // x: `-${totalSlidesWidth - 250}`,
            });
        }
    }, 100)
    // }
    // animate()
}
if (window.innerWidth <= 1280) {
    const items = document.querySelectorAll('.portfolio__item');
    items.forEach(item => {
        item.classList.remove('w-desktop')
    });
}


if (window.scrollY > 0) {
    document.querySelector('.main').style.overflow = 'auto'
}

window.addEventListener('scroll', () => {
    let bodyHeight = document.querySelector('body').scrollHeight;
    let footerHeight = document.querySelector('.footer').clientHeight;
    let header = document.querySelector('.header');
    const topBox = document.querySelector('.top__box');

    // if (window.innerWidth >= 992) {
    //     if (window.scrollY > 50) {
    //         topBox.style.opacity = 0;
    //     }
    //     else {
    //         topBox.style.opacity = 1;
    //     }
    // }


    if ((bodyHeight - footerHeight - 200) <= window.scrollY) {
        header.style.top = '-200px'
    }
    else {
        header.style.top = '0'
    }

    if (window.scrollY > 2000) {
        header.style.zIndex = '21'
    } else {
        header.style.zIndex = '16'
    }
})
// 123

