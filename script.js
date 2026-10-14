/* =========================================================
   BEST SWEET CONFECTIONARIES & PASTRIES
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");


if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (navLinks.classList.contains("active")) {

            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    });


    /* Close mobile menu after clicking a link */

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        });

    });

}


/* =========================================================
   CART
========================================================= */

let cartCount = 0;

const cartCounter = document.getElementById("cartCount");

const addCartButtons = document.querySelectorAll(".add-cart");


addCartButtons.forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        cartCounter.textContent = cartCount;


        const originalText = button.innerHTML;


        button.innerHTML = `
            <i class="fa-solid fa-check"></i>
            Added to Cart
        `;


        button.style.background = "#328b59";

        button.style.color = "#ffffff";


        setTimeout(() => {

            button.innerHTML = originalText;

            button.style.background = "";

            button.style.color = "";

        }, 1200);

    });

});


/* =========================================================
   FAVOURITES
========================================================= */

const favoriteButtons =
    document.querySelectorAll(".favorite-btn");


favoriteButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("active");

        const icon = button.querySelector("i");


        if (button.classList.contains("active")) {

            icon.classList.remove("fa-regular");

            icon.classList.add("fa-solid");

        } else {

            icon.classList.remove("fa-solid");

            icon.classList.add("fa-regular");

        }

    });

});


/* =========================================================
   PRODUCT SEARCH
========================================================= */

const searchInput =
    document.getElementById("searchInput");

const searchBtn =
    document.getElementById("searchBtn");

const productCards =
    document.querySelectorAll(".product-card");


function searchProducts() {

    const searchValue =
        searchInput.value.trim().toLowerCase();


    productCards.forEach(card => {

        const productName =
            card.dataset.name.toLowerCase();

        const productCategory =
            card.dataset.category.toLowerCase();


        const matches =
            productName.includes(searchValue) ||
            productCategory.includes(searchValue);


        if (matches) {

            card.classList.remove("hidden");

        } else {

            card.classList.add("hidden");

        }

    });


    if (searchValue !== "") {

        document
            .getElementById("featured-products")
            .scrollIntoView({
                behavior: "smooth"
            });

    }

}


if (searchInput) {

    searchInput.addEventListener(
        "input",
        searchProducts
    );

}


if (searchBtn) {

    searchBtn.addEventListener(
        "click",
        searchProducts
    );

}


/* =========================================================
   BOOKING FORM
========================================================= */

const bookingForm =
    document.getElementById("bookingForm");


if (bookingForm) {

    bookingForm.addEventListener("submit", event => {

        event.preventDefault();


        const submitButton =
            bookingForm.querySelector(".submit-btn");


        submitButton.innerHTML = `
            <i class="fa-solid fa-check"></i>
            Order Request Sent
        `;


        submitButton.style.background =
            "#328b59";


        setTimeout(() => {

            bookingForm.reset();

            submitButton.innerHTML = `
                Place My Order
                <i class="fa-solid fa-arrow-right"></i>
            `;

            submitButton.style.background = "";

        }, 2500);

    });

}


/* =========================================================
   NAVIGATION ACTIVE STATE
========================================================= */

const sections =
    document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let currentSection = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================================
   CART BUTTON
========================================================= */

const cartBtn =
    document.getElementById("cartBtn");


if (cartBtn) {

    cartBtn.addEventListener("click", () => {

        if (cartCount === 0) {

            alert(
                "Your cart is currently empty. Add a product to continue."
            );

        } else {

            alert(
                `You currently have ${cartCount} item(s) in your cart.`
            );

        }

    });

}