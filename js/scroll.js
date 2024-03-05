if (window.innerWidth > 992) {
    function animate() {
        setTimeout(() => {
            const container = document.querySelector('.top');
            const widthDEfault = (window.innerWidth - document.querySelector('.top__box').clientWidth) - (window.innerWidth - document.querySelector('.top__inner').clientWidth)

            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    start: "top top",
                    end: () => (window.innerHeight),
                    scrub: true,
                    pin: container,
                }
            })

            tl.fromTo('.top__video ',
                {
                    width: widthDEfault,
                    height: 662,
                    duration: 1,
                },
                {
                    width: window.innerWidth,
                    height: window.innerHeight + 20,
                    duration: 1,
                    // onUpdate: () => {
                    //     if(tl.progress() >= 0.9 && tl.progress() < 1){
                    //         const promise = document.querySelector('.top__video').play();
                    //         console.log(promise)
                    //         if(promise !== undefined){
                    //             promise.then(() => {
                    //                 document.querySelector('.top__video').play()
                    //             }).catch(error => {
                    //                 console.log(error)
                    //                 // Autoplay was prevented.
                    //                 document.querySelector('.top__video').play();
                    //             });
                    //         }
                    //     }
                    //     else{
                    //         const promise = document.querySelector('.top__video').pause();
                    //         if(promise !== undefined){
                    //             promise.then(() => {
                    //                 document.querySelector('.top__video').pause()
                    //             }).catch(error => {
                    //                 // Autoplay was prevented.
                    //                 document.querySelector('.top__video').pause();
                    //             });
                    //         }
                    //     }
                    // },

                },
            )
            if (window.innerWidth > 1280) {
                console.log(true)
                const galleryWrapper = document.querySelector('.portfolio');
                const gallery = document.querySelector('.portfolio__list .swiper-wrapper');
                const galleryItems = document.querySelectorAll('.portfolio__item'); // Replace with your actual class for gallery items
                const totalSlidesWidth = Array.from(galleryItems).reduce((acc, item) => acc + item.offsetWidth, 0);
                const tli = gsap.timeline({
                    scrollTrigger: {
                        trigger: galleryWrapper,
                        start: '-=150',
                        end: `+=${totalSlidesWidth}`,
                        pin: true,
                        scrub: 0.5,
                        onUpdate: () => {
                            // console.log(tli.progress())

                            // Get the position of the target element
                            const targetElement = document.querySelector('.desc-pos'); // Replace with your actual target element
                            const targetPosition = targetElement.getBoundingClientRect().left;

                            // Add your logic to add a class to the target element and remove it from others
                            galleryItems.forEach((item) => {

                                // console.log(item.getBoundingClientRect().left, targetPosition, item)
                                if (window.innerWidth > 1550) {
                                    if (item.getBoundingClientRect().left <= targetPosition && item.getBoundingClientRect().left > 0) {
                                        item.classList.add('active');
                                    } else {
                                        item.classList.remove('active');
                                    }
                                }
                                else if (window.innerWidth < 1550 && window.innerWidth > 1440) {
                                    if (item.getBoundingClientRect().left <= targetPosition && item.getBoundingClientRect().left > -50) {
                                        item.classList.add('active');
                                    } else {
                                        item.classList.remove('active');
                                    }
                                }
                                else if (window.innerWidth < 1440 && window.innerWidth > 1380) {
                                    if (item.getBoundingClientRect().left <= targetPosition && item.getBoundingClientRect().left > -100) {
                                        item.classList.add('active');
                                    } else {
                                        item.classList.remove('active');
                                    }
                                }
                                else if (window.innerWidth < 1380 && window.innerWidth > 1280) {
                                    if (item.getBoundingClientRect().left <= targetPosition && item.getBoundingClientRect().left > -150) {
                                        item.classList.add('active');
                                    } else {
                                        item.classList.remove('active');
                                    }
                                }
                            });

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
                    x: `-${totalSlidesWidth - 500}`,
                });
            }
        }, 100)
    }
    animate()

    window.addEventListener('resize', () => {
        animate()
    })
}

window.addEventListener('scroll', () => {
    let bodyHeight = document.querySelector('body').scrollHeight;
    let footerHeight = document.querySelector('.footer').clientHeight;
    let header = document.querySelector('.header');
    const topBox = document.querySelector('.top__box');

    if (window.innerWidth >= 992) {
        if (window.scrollY > 150) {
            topBox.style.opacity = 0;
        }
        else {
            topBox.style.opacity = 1;
        }
    }


    if ((bodyHeight - footerHeight - 200) <= window.scrollY) {
        header.style.top = '-200px'
    }
    else {
        header.style.top = '0'
    }

    if (window.scrollY > 2000) {
        header.style.zIndex = '21'
    } else {
        header.style.zIndex = '14'
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
