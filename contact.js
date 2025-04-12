// Initialize EmailJS
window.addEventListener("load", () => {
    emailjs.init("YyFXXjYx4OK2Eirma"); // Replace with your actual EmailJS user ID
  
    // Animate container
    gsap.to(".container", {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "power3.out"
    });av
  
    // Handle form submit
    document.getElementById("contact-form").addEventListener("submit", function (e) {
      e.preventDefault();
      emailjs.sendForm("service_k3n1ug5", "template_txiktgh", this) // Replace with your actual service and template IDs
        .then(() => alert("Message sent!"))
        .catch(error => alert("Failed to send: " + error));
    });
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
  
  