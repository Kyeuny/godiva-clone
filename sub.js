const subMenu = new Swiper('.sub_inner_menu', {
    slidesPerView: 5,
    freeMode: true,
    speed: 1000,
    navigation: {
        nextEl: '.menu-next-btn',
        prevEl: '.menu-prev-btn',
    },
});

const con3Slider = new Swiper('#con3_wrap', {
    slidesPerView: 4,
    freeMode: true,
    speed: 600,
    navigation: {
        nextEl: '.slider-next-btn',
        prevEl: '.slider-prev-btn',
    },
});
