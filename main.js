const menu = document.querySelector(".menu");
const menuMain = menu.querySelector(".menu-main");
const goBack = menu.querySelector(".go-back");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = menu.querySelector(".mobile-menu-close");
let subMenu;
menuMain.addEventListener("click", (e) => {
    if (!menu.classList.contains("active")) {
        return;
    }
    if (e.target.closest(".menu-item-has-children")) {
        const hasChildren = e.target.closest(".menu-item-has-children");
        showSubMenu(hasChildren);
    }
});
goBack.addEventListener("click", () => {
    hideSubMenu();
})
menuTrigger.addEventListener("click", () => {
    toggleMenu();
})
closeMenu.addEventListener("click", () => {
    toggleMenu();
})
document.querySelector(".menu-overlay").addEventListener("click", () => {
    toggleMenu();
})
function toggleMenu() {
    menu.classList.toggle("active");
    document.querySelector(".menu-overlay").classList.toggle("active");
}
function showSubMenu(hasChildren) {
    subMenu = hasChildren.querySelector(".sub-menu");
    subMenu.classList.add("active");
    subMenu.style.animation = "slideLeft 0.5s ease forwards";
    const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
    menu.querySelector(".current-menu-title").innerHTML = menuTitle;
    menu.querySelector(".mobile-menu-head").classList.add("active");
}

function hideSubMenu() {
    subMenu.style.animation = "slideRight 0.5s ease forwards";
    setTimeout(() => {
        subMenu.classList.remove("active");
    }, 300);
    menu.querySelector(".current-menu-title").innerHTML = "";
    menu.querySelector(".mobile-menu-head").classList.remove("active");
}

window.onresize = function () {
    if (this.innerWidth > 991) {
        if (menu.classList.contains("active")) {
            toggleMenu();
        }

    }
}

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('#myBtn').fadeIn(200);
    } else {
        $('#myBtn').fadeOut(200);
    }
});
$('#myBtn').click(function (event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 500);
});

function toggleNavbar(){
    let navbar = document.querySelector('.navbar');
    navbar.classList.toggle("navs")
}

$(document).ready(function() {
    $('.slick-slider').slick({
        infinite: true,
        autoplay: true,
        arrows: false,
        dots: false,
        slidesToShow: 5,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});
