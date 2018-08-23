/**
 * Created by HouGe on 1970-01-01
 */
'use strict';

$(function () {
    // 获取元素
    var js_slider = $('#js_slider'); // 最大盒子
    var slider_main = $('#slider_main'); // 存放图片的盒子
    var imgs = slider_main.children(); // 需要滚动的图片组
    var slider_page = $('#slider_page'); // 页数控制器盒子

    // 操作元素
    // 动态生成页数控制器
    var html = '';
    for (var i = 0; i < imgs.length; i++) {
        // 小技巧:这里将页数直接写在了span里面,后面我们直接取出来用就好了不用再计算页数
        html += '<span class="slider-page-con">' + (i+1) + '</span>';
    }

    // spans.eq(0).after(html);
    $(html).insertAfter(slider_page.children().eq(0));

    // 第一页默认蓝色
    var spans = slider_page.children();
    spans.eq(1).addClass('current');

    var scrollW = js_slider.width(); // 大盒子宽度,也就是后面每次要移动的距离

    // 初始化时除第一张图显示,其他图片去不移动到右侧等待显示
    for (var j = 1; j < imgs.length; j++) {
        $(imgs[j]).css('left' , scrollW + 'px');
    }

    // 设置page按钮功能
    var iNow = 0; // 控制播放张数
    var animateTime = 1000;
    spans.each(function (index, ele) {
        $(ele).on('click', function (event) {
            // 图片没有滚动完毕之前禁止点击 css3属性
            $(this).css('pointer-events', 'none');
            var that = this;

            if ($(this).hasClass('slider-page-prev')) { // 前一张 : 图片向右走 数组倒序
                // 当前这张向右慢慢移出视野
                $(imgs[iNow]).animate({left: scrollW}, animateTime);
                // 确定下一张是否在左侧等待移入?
                --iNow < 0 ? iNow = imgs.length - 1 : iNow;
                $(imgs[iNow]).css('left', -scrollW + 'px');
                // 下一张移入视野
                $(imgs[iNow]).animate({left: 0}, animateTime, function () {
                    $(that).css('pointer-events', 'auto');
                });
                setSliderPage();

            } else if ($(this).hasClass('slider-page-next')) { // 后一张 : 图片向左走 数组正序
                autoplay(function () {
                    $(that).css('pointer-events', 'auto');
                });

            } else { // 具体张数
                var page = $(this).html() - 1;
                if (page > iNow) { // 点了当前显示后面的page按钮,类似下一张
                    $(imgs[iNow]).animate({left: -scrollW}, animateTime);
                    $(imgs[page]).css('left', scrollW + 'px');

                } else if (page < iNow) {
                    $(imgs[iNow]).animate({left: scrollW}, animateTime);
                    $(imgs[page]).css('left', -scrollW + 'px');

                }
                // 这是重点
                iNow = page;
                $(imgs[iNow]).animate({left: 0}, animateTime, function () {
                    $(that).css('pointer-events', 'auto');
                });
                setSliderPage();
            }
        });
    });


    // 创建定时器自动播放
    var timer = null;
    timer = setInterval(autoplay, 5000);

    // 鼠标经过清除定时器
    js_slider.on('mouseover', function () {
        clearInterval(timer);
    });
    js_slider.on('mouseout', function () {
        clearInterval(timer);
        timer = setInterval(autoplay, 5000);
    });

    // 切换页数指示器
    function setSliderPage() {
        for (var i = 1; i < spans.length - 1; i++) {
            spans[i].className = 'slider-page-con';
        }
        $(spans[iNow + 1]).addClass('current');
    }

    // 下一张
    function autoplay(fn) {
        // 当前这张向左慢慢移出视野
        $(imgs[iNow]).animate({left: -scrollW}, animateTime);
        // 确定下一张是否在右侧等待移入?
        ++iNow > imgs.length - 1 ? iNow = 0 : iNow;
        $(imgs[iNow]).css('left', scrollW + 'px');
        // 下一张移入视野
        $(imgs[iNow]).animate({left: 0}, animateTime, fn);
        setSliderPage();
    }
});