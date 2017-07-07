/**
 * Created by ZHUNJIEE on 2017/7/5.
 */
'use strict';

window.onload = function () {
    waterfull('main', 'box');
}

function waterfull(parent, box) {
    var oParent = document.getElementById(parent);
    var oBoxs = getByClass(oParent, box);
    // 获取屏幕可视区域宽度
    var clientWidth = client().width;
    // 获取box的宽度
    var boxWidth = oBoxs[0].offsetWidth;
    // 计算列数
    var columns = Math.floor(clientWidth / boxWidth);
    console.log(columns);
}

// 根据class获取元素
function getByClass(parent, clsName) {
    var boxArr = new Array(),
        oElements = parent.getElementsByClassName(clsName);
    for (var i = 0; i < oElements.length; i++) {
        if (oElements[i].className === clsName) {
            boxArr.push(oElements[i]);
        }
    }
    return boxArr;
}


// 获取可是区域兼容写法
function client() {
    if (window.innerWidth != null) {    // ie9+最新浏览器
        return {
            width : window.innerWidth,
            height : window.innerHeight
        }
    } else if (document.compatMode === 'CSS1Compat') {  // 标准模式浏览器
        return {
            width : document.documentElement.clientWidth,
            height : document.documentElement.clientHeight
        }
    } else {    // 怪异模式浏览器
        return {
            width : document.body.clientWidth,
            height : document.body.clientHeight
        }
    }
}