/**
 * Created by ZHUNJIEE on 2017/6/19.
 */
function animate(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        // 遍历json
        var flag = true; // 用来判断定时器是否停止
        for (var attr in json) {
            // 获取对象属性的当前值
            var current = 0;
            if (attr === 'opacity') {
                current = Math.round(parseInt(getStyle(obj, attr)*100)) || 0;
                console.log(current);
            } else {
                current = parseInt(getStyle(obj, attr));
            }
            // 计算步长
            var step = (json[attr] - current) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            // 设置属性之前先判断
            if (attr === 'opacity') {
                // 判断浏览器是否支持opacity
                if ('opacity' in obj.style) {
                    obj.style.opacity = (current + step) / 100;
                } else {
                    // ie 6 7 8
                    obj.style.filter = "alpha(opacity = " + (current + step) * 10 + ")";
                }
            } else if (attr === 'zIndex') {
                obj.style.zIndex = json[attr];
            } else {
                obj.style[attr] = current + step + 'px';
            }

            if (current !== json[attr]) { // 只要其中一个不满足条件 就不应该停止定时器  这句一定遍历里面
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);

            // 当定时器停止后,动画结束,执行回调函数
            if (fn) {
                fn();
            }
        }
    }, 30);
}

// 获取CSS样式的正确姿势
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr]; // ie
    } else {
        return window.getComputedStyle(obj, null)[attr]; // w3c
    }
}