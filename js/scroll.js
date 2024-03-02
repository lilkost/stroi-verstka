if(document.getElementById('agreement')) {
    const btn = document.getElementById('btnAgreement');
    const bodyModal = document.querySelector('.top__agreement-content')
    const parentBody = document.querySelector('.top__agreement');

    btn.addEventListener('click', ()=> {
        bodyModal.style.top = '-50px';
        setTimeout(()=>{
            bodyModal.style.opacity = '0';
        },300)

        setTimeout(()=> {
            parentBody.style.opacity = '0';
        },600)
        setTimeout(()=> {
            parentBody.style.zIndex = '-1'
        },700)
        setTimeout(()=> {
            parentBody.style.display = 'none'
        },900)
    })
}

if(window.innerWidth > 992) {
    gsap.registerPlugin(ScrollTrigger, Observer);

    function animate() {
        setTimeout(()=>{
            const container = document.querySelector('.top');
            const widthDEfault = (window.innerWidth - document.querySelector('.top__box').clientWidth) - (window.innerWidth - document.querySelector('.top__inner').clientWidth)
            
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    start: "top top",
                    end:  () => (window.innerHeight),
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
                    onUpdate: () => {
                        if(tl.progress() >= 0.9 && tl.progress() < 1){
                            const promise = document.querySelector('.top__video').play();
                            console.log(promise)
                            if(promise !== undefined){
                                promise.then(() => {
                                    document.querySelector('.top__video').muted =false;
                                    document.querySelector('.top__video').play()
                                }).catch(error => {
                                    console.log(error)
                                    // Autoplay was prevented.
                                    document.querySelector('.top__video').muted = false;
                                    document.querySelector('.top__video').play();
                                });
                            }
                        }
                        else{
                            const promise = document.querySelector('.top__video').pause();
                            if(promise !== undefined){
                                promise.then(() => {
                                    document.querySelector('.top__video').muted =true;
                                    document.querySelector('.top__video').pause()
                                }).catch(error => {
                                    // Autoplay was prevented.
                                    document.querySelector('.top__video').muted = true;
                                    document.querySelector('.top__video').pause();
                                });
                            }
                        }
                    },

                },
            )

            // 
            const hero = document.querySelector(".portfolio");

            const t = gsap.to(".portfolio", {
            //   paused: true,
            onComplete: () => intentObserver.disable()
            });
            
            const intentObserver = Observer.create({
            target: '.portfolio',
            type: "wheel, touch, pointer",
            preventDefault: true,
            onDown: (e) => {
                if (e.event.type !== "wheel") return;
                gsap.to(t, {
                progress: t.progress() + 0.1
                });
            },
            onUp: (e) => {
                if (e.event.type !== "pointermove") return;
                gsap.to(t, {
                progress: t.progress() + 0.1
                });
            }
            });
            
            const slidesContainer = document.querySelector(".portfolio__list");
            const slides = gsap.utils.toArray(".portfolio__item ", slidesContainer);
            gsap.to(slidesContainer, {
            x: (window.innerWidth - slidesContainer.scrollWidth) * -1,
            ease: "none",
            scrollTrigger: {
                trigger: ".portfolio",
                start: "top top",
                end: "+=" + 20 * (slides.length) + "%",
                scrub: true,
                pin: '.portfolio__list',
                // markers: true
            }
            });
        },100)
    }
    animate()

    window.addEventListener('resize', ()=> {
        animate()
    })

    window.addEventListener('scroll',()=> {
        const topBox = document.querySelector('.top__box')
        if(window.scrollY > 150) {
            topBox.style.opacity = 0;
        }
        else {
            topBox.style.opacity = 1;
        }
    });
}