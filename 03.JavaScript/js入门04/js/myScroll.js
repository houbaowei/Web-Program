/**
 * Created by ZHUNJIEE on 2017/6/5.
 */
function $(id) {
    return document.getElementById(id);
}

function show(obj) {
    obj.style.display = 'block';
}

function hide(obj) {
    obj.style.display = 'none';
}

function scroll() {
    if (window.pageYOffset != null) {   // ie9+ 和 其他浏览器
        return {
            left : window.pageXOffset,
            top : window.pageYOffset
        }
    } else if (document.compatMode == 'CSS1Compat') {   // 怪异浏览器(未声明<DOCTYPE HTML>)
        return {
            left : document.documentElement.scrollLeft,
            top : document.documentElement.scrollTop
        }
    }

    return {
        left : document.body.scrollLeft,
        top : document.body.scrollTop
    }
}