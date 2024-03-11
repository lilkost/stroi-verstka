import { useDynamicAdapt } from './dynamicAdapt.js'
useDynamicAdapt()
// facybox 
Fancybox.bind("[data-fancybox]", {});

// accordion 
if (document.querySelector('.work__accordion')) {
    const accordions = document.querySelectorAll('.work__accordion');

    accordions.forEach(el=> {
        el.querySelector('.work__accordion-top').addEventListener('click',()=> {
            if(el.classList.contains('open')){
                el.classList.remove('open')
            }else {
                accordions.forEach(el2=> {
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
if(document.querySelector('.header-burger')) {
    const burgerBtn = document.querySelector('.header-burger');
    const menu = document.querySelector('.mobile-menu');

    burgerBtn.addEventListener('click', ()=> {
        menu.classList.toggle('open');
        burgerBtn.classList.toggle('open');
    })
}

const arrows = [
    document.querySelector('.services-slider__button-prev'), 
    document.querySelector('.services-slider__button-next'),
    document.querySelector('.info-slider__button-prev'),
    document.querySelector('.info-slider__button-next')
]

arrows.forEach(item=>{
    item.addEventListener("click", function(){
        document.body.style.cssText = '-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;'
    });
    item.addEventListener("mouseout", function(){
        document.body.style.cssText = ''
    });
})