// #top_btn 이동 -------------------------------------------
const topBtn = document.querySelector('#top_btn')

topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})


// 서브 메뉴 슬라이더  --------------------------------------
const subMenu = new Swiper('.sub_inner_menu', {
    slidesPerView: 5,
    freeMode: true,
    speed: 1000,
    navigation: {
        nextEl: '.menu-next-btn',
        prevEl: '.menu-prev-btn',
    },
});

// con3 슬라이더 ----------------------------------------------
const con3Slider = new Swiper('#con3_wrap', {
    slidesPerView: 4,
    freeMode: true,
    speed: 600,
    navigation: {
        nextEl: '.slider-next-btn',
        prevEl: '.slider-prev-btn',
    },
});
