$(function () {
    // --- 初始化轮播图插件 ---
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 3000, // 自动播放
        loop: true, // 循环播放
        autoplayDisableOnInteraction : false, // 滑动后还能自动轮播
    });

    // 首页header透明显示
    var mainHeader = $('.jd-header .jd-header-box');
    var bannerH = $('.jd-banner').height();

    $(window).scroll(function () {
        var scrollH = $(this).scrollTop();
        if (scrollH > bannerH) {
            mainHeader.css('backgroundColor', 'rgba(201, 21, 35, 1.0)');
        } else {
            mainHeader.css('backgroundColor', 'rgba(201, 21, 35,' + scrollH/bannerH + ')');
        }
    })
});