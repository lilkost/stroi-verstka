import { useDynamicAdapt } from './dynamicAdapt.js'
useDynamicAdapt()
// facybox 
Fancybox.bind("[data-fancybox]", {});

// accordion 
if (document.querySelector('.work__accordion')) {
    const accordions = document.querySelectorAll('.work__accordion');

    accordions.forEach(el => {
        el.querySelector('.work__accordion-top').addEventListener('click', () => {
            if (el.classList.contains('open')) {
                el.classList.remove('open')
            } else {
                accordions.forEach(el2 => {
                    el2.classList.remove('open');
                })
                el.classList.add('open')
            }
        })
    })

}
// tabs
// if (document.querySelector('.project__tab')) {
//     const tabs = document.querySelectorAll('.project__tab');
//     const sliders = document.querySelectorAll('.project__tabs-slider');

//     tabs.forEach(tab => {
//         tab.addEventListener('click', (e) => {
//             tabs.forEach(tb => tb.classList.remove('active'));
//             e.currentTarget.classList.add('active');
//             const currentId = e.currentTarget.dataset.id;

//             sliders.forEach(slide => {
//                 if (slide.id === currentId) {
//                     slide.classList.add('active')
//                 } else {
//                     slide.classList.remove('active')
//                 }
//             })
//         })
//     })
// }

// burger
if (document.querySelector('.header-burger')) {
    const burgerBtn = document.querySelector('.header-burger');
    const menu = document.querySelector('.mobile-menu');

    burgerBtn.addEventListener('click', () => {
        menu.classList.toggle('open');
        burgerBtn.classList.toggle('open');
    })
}
if (document.querySelector('.top__video')) {
    const arrows = [
        document.querySelector('.services-slider__button-prev'),
        document.querySelector('.services-slider__button-next'),
        document.querySelector('.info-slider__button-prev'),
        document.querySelector('.info-slider__button-next'),
        document.querySelector('.portfolio-list__button-prev'),
        document.querySelector('.portfolio-list__button-next'),
        document.querySelector('.project__tabs-button-next'),
        document.querySelector('.project__tabs-button-prev'),
        document.querySelector('.blog-slider__button-prev'),
        document.querySelector('.blog-slider__button-next'),
    ]

    arrows.forEach(item => {
        item.addEventListener("click", function () {
            document.body.style.cssText = '-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;'
        });
        item.addEventListener("mouseout", function () {
            document.body.style.cssText = ''
        });
    })
}


// modal form 
if (document.querySelector('.modal')) {
    const modal = document.querySelector('.modal');
    const modalInner = document.querySelector('.modal-inner');
    const btnOpen = document.getElementById('openModal');
    const btnClose = document.getElementById('modalClose');
    const phone = document.getElementById('phoneModal')

    function toggleClass(state) {
        if (state === 'active') {
            modalInner.classList.add('open');
            setTimeout(() => {
                modal.style.top = 0;
                modal.style.transform = 'scale(1)';
            }, 100)

            setTimeout(() => {
                modal.style.opacity = 1;
            }, 150)
        }

        if (state === 'remove') {
            setTimeout(() => {
                modal.style.top = '50px';
                modal.style.transform = 'scale(0.9)';
            }, 100)
            setTimeout(() => {
                modal.style.opacity = 0;
            }, 150)
            setTimeout(() => {
                modalInner.classList.remove('open');
            }, 300)
        }
    }

    btnOpen.addEventListener('click', () => {
        toggleClass('active');
    });

    btnClose.addEventListener('click', () => {
        toggleClass('remove');
    });

    window.addEventListener('click', (e) => {
        if (e.target === modalInner) {
            toggleClass('remove');
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            toggleClass('remove');
        }
    });

    const maskOptions = {
        mask: '+{7}(000)000-00-00'
    };
    const mask = IMask(phone, maskOptions);
}