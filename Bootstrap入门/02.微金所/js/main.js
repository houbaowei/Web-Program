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



            // 小图尺寸适应手机屏幕,需要等比例缩放
            if (bigScreen) {
                $(item).html('');
                $(item).css('backgroundImage', 'url("'+imgSrc+'")');
            } else {
                $(item).html('<img src="' + imgSrc + '" alt="#" />');
                $(item).removeAttr('style');
            }

        });

    }

    // 屏幕缩放动态改变图片尺寸
    $(window).on('resize', resizeImg).trigger('resize');
});