import gsap from 'gsap';

// ---------------------------------GSAP Animation for header section
export const animateHeader = () => {
    const tl = gsap.timeline();

    tl.from(".box", {
        y: -100,
        opacity: 0,
        duration: 1,
    })
        .to(".box", {
            y: 0,
            opacity: 1,
            duration: 1,
        });

    gsap.from(".head-style", {
        y: -10,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        delay: 1,
    });

    gsap.from(".nav-style", {
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        delay: 1,
    });

    gsap.to(".nav-style", {
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        delay: 1.2,
    });
};

// ---------------------------------GSAP Animation for Paragraph
export const animateHero = () => {
    gsap.from(".para1-style", {
        y: 0,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        delay: 2,
    });

    // ---------------------------------GSAP Animation for Buttons

    gsap.from(".btn1-style", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        delay: 2.3,
    });
};

// ---------------------------------GSAP Animation for Gallery

export const animateGallery = () => {

    gsap.from(".skill-heading", {
        scrollTrigger: {
            trigger: ".skill-heading",
            start: "top 85%",
            toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: -20,
        duration: 1,
        ease: "power2.out",
    });

    document.querySelectorAll(".skill-logos").forEach(card => {
        gsap.from(".gallery-card", {
            scrollTrigger: {
                trigger: ".gallery-card",
                start: "top 90%",
                toggleActions: "play none none reverse",
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out",
        });
    });
}