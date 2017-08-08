$(function () {
    // --- 初始化轮播图插件 ---
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 3000, // 自动播放
        loop: true, // 循环播放
        autoplayDisableOnInteraction : false, // 滑动后还能自动轮播
    });


    // --- 首页header透明显示 ---
    var mainHeader = $('.jd-header .jd-header-box');
    var bannerH = $('.jd-banner').height();

    $(window).scroll(function () {
        var scrollH = $(this).scrollTop();
        if (scrollH > bannerH) {
            mainHeader.css('backgroundColor', 'rgba(201, 21, 35, 1.0)');
        } else {
            mainHeader.css('backgroundColor', 'rgba(201, 21, 35,' + scrollH/bannerH + ')');
        }
    });


    // --- 秒杀倒计时 ---
    var timeList = $('.jd-product .miaosha-time .num');
    console.log(timeList.length);

    var times = 8 * 60 * 60;
    var timer = null;
    timer = setInterval(function () {

        times > 0 ? times-- : clearInterval(timer);

        var h = Math.floor(times/(60*60));
        var m = Math.floor(times/60%60);
        var s = times%60;

        timeList.eq(0).html(h > 10 ? Math.floor(h/10) : 0);
        timeList.eq(1).html(h % 10);
        timeList.eq(2).html(m > 10 ? Math.floor(m/10) : 0);
        timeList.eq(3).html(m % 10);
        timeList.eq(4).html(s > 10 ? Math.floor(s/10) : 0);
        timeList.eq(5).html(s % 10);
    }, 1000);
});


function formatTime(time) {
    if (time.length < 2) {
        return '0' + time;
    } else {
        return time;
    }
}