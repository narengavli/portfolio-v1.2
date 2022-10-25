
var swiper = new Swiper(".mySwiper", {
    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 30
        },
        1023: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 40
        }
    },
    loop: true,
    loopFillGroupWithBlank: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});