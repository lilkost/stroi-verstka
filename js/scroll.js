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

            if(window.scrollY > 150) {
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
            console.log(true)
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

                        if (pr < 0.3) {
                            galleryItems[0].style.order = '1';
                            galleryItems[0].classList.add('active');

                            galleryItems[1].style.order = '2';
                            galleryItems[1].classList.remove('active');

                            galleryItems[2].style.order = '3';
                            galleryItems[2].classList.remove('active');
                        }

                        if (pr > 0.3 && pr < 0.6) {
                            galleryItems[0].style.order = '3';
                            galleryItems[0].classList.remove('active');

                            galleryItems[1].style.order = '1';
                            galleryItems[1].classList.add('active');

                            galleryItems[2].style.order = '2';
                            galleryItems[2].classList.remove('active');
                        }

                        if (pr > 0.6) {
                            galleryItems[0].style.order = '2';
                            galleryItems[0].classList.remove('active');

                            galleryItems[1].style.order = '3';
                            galleryItems[1].classList.remove('active');

                            galleryItems[2].style.order = '1';
                            galleryItems[2].classList.add('active');
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

if (window.innerWidth <= 1280) {
    const sliderList = document.querySelector('.portfolio__list');
    const slides = document.querySelectorAll('.portfolio__item');

    slides.forEach(sl => {
        sl.classList.remove('active')
        sl.classList.add('swiper-slide')
    })


    const swiper = new Swiper(sliderList, {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        // If we need pagination
        // pagination: {
        //     el: '.portfolio__list-pagination',
        //     type: 'fraction'
        // },

        // Navigation arrows
        navigation: {
            nextEl: '.portfolio-list__button-next',
            prevEl: '.portfolio-list__button-prev',
        },

        breakpoints: {
            // when window width is >= 320px
            993: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 2.3,
                spaceBetween: 20
            },
            769: {
                slidesPerView: 2.3,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            569: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            280: {
                slidesPerView: 1,
                spaceBetween: 20
            },
        }
    });
}
