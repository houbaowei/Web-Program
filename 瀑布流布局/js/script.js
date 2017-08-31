/**
 * Created by ZHUNJIEE on 2017/7/5.
 */
'use strict';

window.onload = function () {
    waterfull('main', 'box');

    var dataInt = {'data':[{'src':'21.jpg'}, {'src':'22.jpg'}, {'src':'23.jpg'}, {'src':'24.jpg'}, {'src':'25.jpg'}, {'src':'26.jpg'}, {'src':'27.jpg'}, {'src':'28.jpg'}, {'src':'29.jpg'}, {'src':'30.jpg'}, {'src':'31.jpg'}, {'src':'32.jpg'}, {'src':'22.jpg'}, {'src':'34.jpg'}, {'src':'35.jpg'}, {'src':'36.jpg'}]};

    var timer = null;
    window.onscroll = function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            if (checkScrollSide()) {
                console.log('滚动了!');
                var main = document.getElementById('main');
                for (var i = 0; i < dataInt.data.length; i++) {
                    var oBox = document.createElement('div');
                    oBox.className = 'box';
                    main.appendChild(oBox);
                    var oPic = document.createElement('div');
                    oPic.className = 'pic';
                    oBox.appendChild(oPic);
                    var oImg = document.createElement('img');
                    oImg.src = 'images/' + dataInt.data[i].src;
                    oPic.appendChild(oImg);
                }
            }
            waterfull('main', 'box');
        }, 300);
    }
};



function waterfull(parent, box) {
    var oParent = document.getElementById(parent);
    var oBoxs = getByClass(oParent, box);
    // 获取屏幕可视区域宽度
    var clientWidth = client().width;
    // 获取box的宽度
    var boxWidth = oBoxs[0].offsetWidth;
    // 计算列数
    var columns = Math.floor(clientWidth / boxWidth);
    // 设置main居中显示
    oParent.style.cssText = 'width:' + boxWidth * columns + 'px; margin: 0 auto;';

    /**
     * 瀑布流原理:
     * 第一行依次排列,取出第一行高度成为数组,找出数组中最小值,将要放置的图片放到它的下面(绝对定位)
     * 放完后将最小值加上刚才放置图片的高度,再次找出数组中最小的值,放置图片....
    */
    var heightArr = [];
    for (var i = 0; i < oBoxs.length; i++) {
        if (i < columns) {  // 将第一行的高度存入数组,这是第二行如何排列的依据
            heightArr.push(oBoxs[i].offsetHeight);
        } else { // 第二行以后
            // 找到最小的高度
            var minHeight = Math.min.apply(null, heightArr);
            // 最小高度的索引
            // var index = heightArr.indexOf(minHeight);
            var index = getMinIndex(heightArr, minHeight);
            // 进行绝对定位
            oBoxs[i].style.position = 'absolute';
            oBoxs[i].style.top = minHeight + 'px';
            oBoxs[i].style.left = index * boxWidth + 'px';
            // 最小高度加上图片的高度后进行下次循环比较
            heightArr[index] += oBoxs[i].offsetHeight;
        }
    }
}


// 判断什么时候加载新数据
function checkScrollSide() {
    var oParent = document.getElementById('main');
    var oPic = getByClass(oParent, 'pic');
    // 触发加载新元素的高度 = 最后一张图片的offsetTop + 图片高度的一半
    var lastPicH = oPic[oPic.length -1 ].offsetTop + Math.floor(oPic[oPic.length - 1].offsetHeight / 2);
    // 滚动的距离
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    // 浏览器的高度
    var documentH = document.documentElement.clientHeight || document.body.clientHeight;

    var result = true;
    return (scrollTop + documentH > lastPicH) ? result : !result;
}

// 根据class获取元素 - IE9以下不支持getElementsByClassName
function getByClass(parent, clsName) {
    parent = parent || document;
    if (parent.getElementsByClassName) {
        return parent.getElementsByClassName(clsName);
    } else {
        var boxArr = [], oElements = parent.getElementsByTagName('*');
        for (var i = 0; i < oElements.length; i++) {
            // 形如 class="test1 test2" 这种形式
            var tempArr = oElements[i].className.split(' ');
            for (var j = 0; j < tempArr.length; j++) {
                if (tempArr[j].className === clsName) {
                    boxArr.push(tempArr[j]);
                }
            }
        }
        return boxArr;
    }
}

// 获取minIndex在数组中的索引
function getMinIndex(arr, minIndex) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === minIndex) {
            return i;
        }
    }
}

// 获取可视区域兼容写法
function client() {
    if (window.innerWidth !== null) {    // ie9+最新浏览器
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