$(function () {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 3000, // 自动播放
        loop: true, // 循环播放
        autoplayDisableOnInteraction : false, // 滑动后还能自动轮播
    });
});