// ===============================
// HANUMAN YOUTH
// Premium JavaScript
// ===============================

// Loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
        }, 1200);
    }
});

// ==========================
// AOS Animation
// ==========================

if (typeof AOS !== "undefined") {
    AOS.init({
        duration: 1000,
        once: true,
        easing: "ease-in-out"
    });
}

// ==========================
// Scroll To Top
// ==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (topBtn) {
        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    }

});

if (topBtn) {
    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// ==========================
// Navbar Effect
// ==========================

const navbar = document.querySelector(".glass-nav");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 80) {

        navbar.style.background = "rgba(0,0,0,.85)";
        navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,.4)";

    } else {

        navbar.style.background = "rgba(0,0,0,.45)";
        navbar.style.boxShadow = "none";

    }

});

// ==========================
// Gallery Images
// ==========================

const gallery = document.getElementById("gallery-container");

if (gallery) {

    const images = [
        "001.jpg",
        "002.jpg",
        "003.jpg",
        "004.jpg"
    ];

    gallery.innerHTML = "";

    images.forEach(image => {

        gallery.innerHTML += `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="gallery-item">
                    <a href="gallery/${image}" class="glightbox">
                        <img src="gallery/${image}"
                             class="img-fluid rounded"
                             alt="${image}"
                             loading="lazy">
                    </a>
                </div>
            </div>
        `;

    });

}

// ==========================
// Lightbox
// ==========================

window.addEventListener("load", () => {

    if (typeof GLightbox !== "undefined") {

        GLightbox({
            touchNavigation: true,
            loop: true,
            zoomable: true
        });

    }

});

// ==========================
// Active Menu
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ==========================
// Button Hover Animation
// ==========================

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "translateY(-4px) scale(1.03)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translateY(0) scale(1)";
    });

});

// ==========================
// Hero Parallax
// ==========================

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    if (hero) {
        hero.style.backgroundPosition = `center ${window.scrollY * 0.3}px`;
    }

});

// ==========================
// Console Message
// ==========================

console.log("%c🕉 HANUMAN YOUTH WEBSITE LOADED",
"color:gold;font-size:18px;font-weight:bold;");