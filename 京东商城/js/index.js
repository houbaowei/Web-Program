/**
 * Created by ZHUNJIEE on 17/2/24.
 */

// 入口函数, 所有的代码写在里面
window.onload = function () {
    // 关闭顶部广告栏
    var closeBanner = document.getElementsByClassName('close-banner')[0];
    var topBanner = document.getElementsByClassName('topbanner')[0];
    closeBanner.onclick = function () {
        topBanner.style.display = 'none';
    }

    // 循环创建"生活服务"栏目
    var serveLis = document.getElementById('lifeservice').getElementsByTagName('i');

    for (var i = 0; i < serveLis.length; i++) {
        serveLis[i].style.backgroundPosition = '-25px '+(-i*25)+'px';
    }
}