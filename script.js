document.addEventListener("DOMContentLoaded", function () {
    const app = document.getElementById("app");

    // Main container
    const container = document.createElement("div");
    container.classList.add("container");

    // Mobile Navbar
    const navMobile = document.createElement("nav");
    navMobile.classList.add("nav-mobile");
    navMobile.innerHTML = `
        <div class="navbar-brand">
            <img src="./assets/images/img1.jpg" alt="" class="brand-img">
            <h1 class="brand-name">Ritika Singh</h1>
        </div>
        <ion-icon name="menu-outline" class="menu-toggler"></ion-icon>
    `;
    container.appendChild(navMobile);

    // Sidebar
    const sidebar = document.createElement("div");
    sidebar.classList.add("side-bar");
    sidebar.innerHTML = `
        <img src="./assets/images/img1.jpg" alt="" class="brand-img">
        <h1 class="brand-name">Graphic Designer<br> Ritika Singh</h1>
        <nav>
            <ul class="nav">
                <li><a href="#" class="active">About</a></li>
                <li><a href="#">Resume</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
        <div class="social-btn-groups">
            <a href="https://wa.me/+919235960321?text=Hello%20...!!" class="btn">
                <ion-icon name="logo-whatsapp"></ion-icon>
            </a>
            <a href="#" class="btn"><ion-icon name="logo-linkedin"></ion-icon></a>
            <a href="https://www.instagram.com/thakur_ritika.07/" class="btn">
                <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a href="mailto:ritikasgh.07@gmail.com" class="btn">
                <ion-icon name="mail-outline"></ion-icon>
            </a>
        </div>
        <footer class="side-bar-footer">
            <p>© 2024 Ritika Singh. All Rights Reserved.</p>
        </footer>
    `;
    container.appendChild(sidebar);

    // About Section
    const aboutSection = document.createElement("section");
    aboutSection.classList.add("about", "page", "active");
    aboutSection.innerHTML = `
        <div class="hero">
            <div class="hero-img-bx">
                <img src="./assets/images/img1.jpg" alt="">
            </div>
            <div class="hero-content">
                <div class="hero-content-wrapper">
                    <p class="title">Student | Graphic Designer | Photographer</p>
                    <h1 class="name">RITIKA SINGH</h1>
                    <div class="desc">
                        <p>"Hi! I'm Ritika, a BFA student with a passion for capturing nature's beauty through photography."</p>
                        <p>I’m a creative professional with expertise in photography, videography, writing, and design.</p>
                    </div>
                    <a href="/Ritika_Singh_CV.pdf" class="btn-primary">Download CV</a>
                </div>
            </div>
        </div>
    `;
    container.appendChild(aboutSection);

    // Portfolio Section
    const portfolioSection = document.createElement("section");
    portfolioSection.classList.add("portfolio", "page");
    portfolioSection.innerHTML = `
        <h1 class="section-heading">Portfolio</h1>
        <h4 class="section-sub-heading">My Gallery</h4>
        <ul class="filter-box">
            <li class="filter-item active" data-filter="all">All</li>
            <li class="filter-item" data-filter="myself">It's Me</li>
            <li class="filter-item" data-filter="sky">Sky & Clouds</li>
            <li class="filter-item" data-filter="flowers">Flowers</li>
            <li class="filter-item" data-filter="3d-art">3D Art & Graphic Designs</li>
            <li class="filter-item" data-filter="video-edit">Video Editing</li>
        </ul>
        <div class="portfolio-grid">
            <div class="portfolio-item" data-category="myself">
                <img src="./assets/images/A1.jpg" alt="Myself">
                <h4 class="item-name">Self Portrait</h4>
            </div>
            <div class="portfolio-item" data-category="sky">
                <img src="./assets/images/A2.jpg" alt="Sky & Clouds">
                <h4 class="item-name">Sunset Sky</h4>
            </div>
            <div class="portfolio-item" data-category="flowers">
                <img src="./assets/images/A3.jpg" alt="Flowers">
                <h4 class="item-name">Blooming Rose</h4>
            </div>
            <div class="portfolio-item" data-category="3d-art">
                <img src="./assets/images/A4.jpg" alt="3D Art">
                <h4 class="item-name">3D Artwork</h4>
            </div>
        </div>
    `;
    container.appendChild(portfolioSection);

    // Append everything to main app
    app.appendChild(container);
});