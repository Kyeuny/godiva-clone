// #top_btn 이동 -------------------------------------------
const topBtn = document.querySelector('#top_btn')

topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})


//  메인 슬라이더 ----------------------------------------------
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