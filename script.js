gsap.registerPlugin(ScrollTrigger);

// Default ScrollTrigger settings
ScrollTrigger.defaults({
  toggleActions: "play none none reverse"
});

// Zoom the image-container as we scroll
gsap.to('.img-container', {
  scale: 52,
  ease: "ease",
  scrollTrigger: {
    trigger: '.video-section',
    scrub: 1,
    start: "top top",
    end: "bottom",
    pin: true
  }
});

// Fade out intro titles
gsap.to('.right', {
  autoAlpha: 0,
  x: 500,
  duration: 1,
  scrollTrigger: {
    start: 1
  }
});

gsap.to('.left', {
  autoAlpha: 0,
  x: -500,
  duration: 1,
  scrollTrigger: {
    start: 1
  }
});

gsap.to('.txt-bottom', {
  autoAlpha: 0,
  letterSpacing: -10,
  duration: 2,
  scrollTrigger: {
    start: 2
  }
});

// Animate left-side + right-side content
const tl = gsap.timeline();
tl.from('.left-side div', {
  y: 50,
  opacity: 0,
  stagger: {
    amount: 3
  },
  delay: 0.5
}).from('.right-side', {
  opacity: 0,
  duration: 2
}, 0.5);

ScrollTrigger.create({
  animation: tl,
  trigger: '.video-section',
  start: "top top",
  end: "-=10%",
  scrub: 1,
  pin: false
});

// Title text intro animation
const intro = gsap.timeline();
intro.from('.title span', {
  y: 150,
  skewY: 7,
  duration: 1
}).from('.txt-bottom', {
  letterSpacing: -10,
  opacity: 0,
  duration: 1
});

// NEW: Show .v_container after text fades out
const vContainerTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.video-section',
    start: "70% center", // When you've scrolled 70% down the video section
    end: "bottom center",
    scrub: 1
  }
});


gsap.set('.v_container', { opacity: 0, y: 670 });

gsap.to('.v_container', {
  opacity: 1,
  y: 0,
  duration: 6,
  ease: "power3.out",
  scrollTrigger: {
    trigger: '.video-section',
    start: "45% center",
    end: "bottom center",    
    scrub: true              
  }
});





window.addEventListener("DOMContentLoaded", () => {
  let lastScroll = window.scrollY;
  const navbar = document.querySelector(".navbar");

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    start: 0,
    end: "max",
    onUpdate: (self) => {
      const currentScroll = self.scroll();

      if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down
        gsap.to(navbar, {
          y: "-100%",
          duration: 0.4,
          ease: "power2.out"
        });
      } else {
        // Scrolling up
        gsap.to(navbar, {
          y: "0%",
          duration: 0.4,
          ease: "power2.out"
        });
      }

      lastScroll = currentScroll;
    }
  });
});
