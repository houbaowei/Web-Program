$(document).ready(function () {
    // 删除购物车商品
    $('.alert-close').on('click', function () {
        $(this).parents('.cart_box').fadeOut('slow', function () {
            $(this).remove();
        })
    });

    // 初始化easyResponsiveTabs选项卡插件
    $('#horizontalTab').easyResponsiveTabs({
        type: 'default',
        width: 'auto',
        fit: true
    });

    // 导航栏切换效果
    $('#activator').click(function () {
        $('#box').animate({'left' : '0px'}, 500);
    });
    $('#boxclose').click(function () {
        $('#box').animate({'left' : '-2300px'}, 500);
    })
});