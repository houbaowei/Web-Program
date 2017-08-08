$(function () {
    // --- 轮播图 ---
    var imgBox = $('.jd-banner .swipe-img');
    var pageBox = $('.jd-banner .swipe-page');
    var bannerWidth = $('.jd-banner').width();

    var index = 1, timer = null;

    // 过渡效果
    var addTransition = function () {
        imgBox.css('transition', 'all .3s ease 0s');
    };
    var removeTransition = function () {
        imgBox.css('transition', 'none');
    };
    // 改变位置
    var changePosition = function (x) {
        imgBox.css('transform', 'translateX(' + x + 'px)');
    };

    timer = setInterval(function () {
        index++;
        addTransition();
        changePosition(-index * bannerWidth);
    }, 1000);

    document.getElementsByClassName('swipe-img')[0].addEventListener('transitionend', function () {
        console.log('滚完了!');
        if (index >= 9) {
            index = 1;
        } else if(index <= 0) {
            index = 8;
        }
        removeTransition();
        changePosition(-index * bannerWidth);
    });
    // imgBox.on('transitionend', function () {
    //     console.log('滚完了!');
    //     if (index >= 9) {
    //         index = 1;
    //     } else if(index <= 0) {
    //         index = 8;
    //     }
    //     removeTransition();
    //     changePosition(-index * bannerWidth);
    // });

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