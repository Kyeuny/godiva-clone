const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
    speed: 600,
});