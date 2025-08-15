/* ===== Header Background Change on Scroll ===== */
const header = document.querySelector(".header_area");
window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 120);
});

/* ===== Mobile Menu Toggle ===== */
const menuCheckbox = document.getElementById('checkbox');
const navLinks = document.querySelector('.nav_links');

if (menuCheckbox) {
    menuCheckbox.addEventListener('change', () => {
        if (menuCheckbox.checked) {
            navLinks.classList.add('active');
        } else {
            navLinks.classList.remove('active');
        }
    });
}

/* ===== Active Link Highlighting ===== */
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.nav_links li a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current)) {
            a.classList.add('active');
        }
    });
});

/* ===== Dynamic Product Cards ===== */
document.addEventListener('DOMContentLoaded', () => {
    const shopContent = document.getElementById('shop_content');

    if (shopContent && typeof products !== 'undefined') {
        shopContent.innerHTML = products.map(product => `
            <div class="row">
                <div class="row-img">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <h3>${product.name}</h3>
                <div class="in_text">
                    <div class="price">
                        <h6>${product.price}</h6>
                    </div>
                    <div class="s-btnn">
                        <a href="#">Order Now</a>
                    </div>
                </div>
                <div class="top_icon">
                    <a href="#"><i class='bx bx-heart'></i></a>
                </div>
            </div>
        `).join('');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const shopContent = document.getElementById('deal_content');

    if (shopContent && typeof deals !== 'undefined') {
        shopContent.innerHTML = deals.map(deal => `
            <div class="row">
                <div class="row-img">
                    <img src="${deal.image}" alt="${deal.name}">
                </div>
                <h3>${deal.name}</h3>
                <p>${deal.description}</p>  
                <div class="in_text">
                    <div class="price">
                        <h6>${deal.price}</h6>
                    </div>
                    <div class="s-btnn">
                        <a href="#">Order Now</a>
                    </div>
                </div>
                <div class="top_icon">
                    <a href="#"><i class='bx bx-heart'></i></a>
                </div>
            </div>
        `).join('');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const dealContainerIndex = document.getElementById('deal-container-index');

    if (dealContainerIndex && typeof deals !== 'undefined') {
        dealContainerIndex.innerHTML = deals.map(deal => `
            <div class="deal-item">
                <div class="deal-img-container">
                    <img src="${deal.image}" alt="${deal.name}">
                </div>
                <div class="deal-text-container">
                    <h3>${deal.name}</h3>
                    <p>${deal.description}</p>
                    <div class="price">
                        <h6>${deal.price}</h6>
                    </div>
                </div>
            </div>
        `).join('');
    }
});

/* ===== Contact Form Submission ===== */
function handleContactSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const notification = document.createElement('div');
    notification.className = 'notification success';
    notification.textContent = 'Message sent successfully!';
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
        form.reset();
    }, 3000);
}
