/**
 * Created by ZHUNJIEE on 2017/7/11.
 */
$(function () {
    function resizeImg() {
        // 获取屏幕宽度
        var screenWidth = $(window).width();

        var bigScreen = screenWidth > 768;

        var $items = $('#carousel-weijinsuo > .carousel-inner > .item');

        $items.each(function (i, item) {
            // var imgSrc = $(item).data(screenWidth > 768 : 'img-lg' : 'img-sm');
            var imgSrc = bigScreen ? $(item).data('img-lg') : $(item).data('img-sm');



            // -------- 小图尺寸适应手机屏幕,需要等比例缩放 ----------
            if (bigScreen) {
                $(item).html('');
                $(item).css('backgroundImage', 'url("'+imgSrc+'")');
            } else {
                $(item).html('<img src="' + imgSrc + '" alt="#" />');
                $(item).removeAttr('style');
            }


            // ------- 产品 tab栏 设置滚动条 ----------
            var $tabs = $('#products .nav-tabs');
            var width = 20; // 20是因为tab栏默认有20的padding
            $tabs.find('li').each(function (index, element) {
                width += $(element).width();
            });

            // 超过屏幕宽度以后ul设置实际宽度,盛放ul的div设置横向滚动
            if (width > $(window).width()) {
                $tabs.css('width', width).parent().css('overflow-x', 'scroll');
            }
            // 默认撑满会自动换行
        });

    }

    // 屏幕缩放动态改变图片尺寸
    $(window).on('resize', resizeImg).trigger('resize');


    // ----- 激活 static tooltip 提示框效果 -------
    $('[data-toggle="tooltip"]').tooltip();


    // 新闻模块点击切换标题
    $('.news-nav a').on('click', function () {
       $('.news-title').text($(this).data('title'));
    });


    // 轮播左滑/右滑
    var $carousel = $('#carousel-weijinsuo'),
        startX = 0, endX = 0,
        offset = 50;

    $carousel.on('touchstart', function (event) {
        endX = startX = event.originalEvent.targetTouches[0].clientX;
    });
    $carousel.on('touchmove', function (event) {
        endX = event.originalEvent.targetTouches[0].clientX;
    });
    $carousel.on('touchend', function (event) {
        console.log(startX + '---' + endX);

        var distance = Math.abs(startX - endX);
        if (distance > offset) {
            $(this).carousel(startX > endX ? 'next' : 'prev');
        }
        startX = 0;
        endX = 0;
    });
});