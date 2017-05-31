/**
 * Created by ZHUNJIEE on 16/9/7.
 */
//闭包
(function ($) {
    // PageSwitch的实例化方法(懒加载!!!)
    var PageSwitch = (function () {
        function PageSwitch(element, options) {
            this.settings = $.extend(true, $.fn.PageSwitch.default, options||{});
            this.element = element;
            this.init();
        }
        // init初始化方法
        PageSwitch.prototype = {
            init : function () {

            }
        }
        return PageSwitch;
    })();

    // 为jQuery添加动态方法PageSwitch
    $.fn.PageSwitch = function (options) {

        return this.each(function () {
            // 创建PageSwitch单例
            var me = $(this),
                instance = me.data("PageSwitch");
            if(!instance) {
                instance = new PageSwitch(me, options);
                me.data("PageSwitch", instance);
            }
            if ($.type(options) === "string") return instance[options]();
        });
    }

    // 默认的配置参数
    $.fn.PageSwitch.default = {
        selectors : {
            sections : ".sections",
            section : ".section",
            page : ".pages",
            active : ".active"
        },
        index : 0,
        easing : "ease",
        duration : 1000,
        loop : true,
        pagination : true,
        keyboard : true,
        direction : "vertical",
        callback : ""
    }
})(jQuery);