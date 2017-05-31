/**
 * Created by ZHUNJIEE on 16/8/31.
 */
// 当网页加载完毕时调用
window.onload = function () {
    var titles = document.getElementById("tab-header").getElementsByTagName("li");
    var contents = document.getElementById("tab-content").getElementsByClassName("dom");

    console.log(titles, contents);
    if(titles.length !== contents.length) return;

    for(var i = 0; i < titles.length; i++) {
        var li = titles[i];
        li.id = i;
        console.log(li);
        li.onmousemove = function () {
            // 清除其他标签的效果
            for (var j = 0; j < contents.length; j++) {
                titles[j].className = "";
                contents[j].style.display = "none";
            }

            // 设置选中标签效果
            this.className = "selected";
            contents[this.id].style.display = "block";
        }
    }
}


// 采用jQuery写法
// $(document).ready(function () {
//     $('#tab-header').find('li').mouseover(function () {
//         // 清除所有的状态
//         $('#tab-header').find('li').attr('class', '');
//         $('#tab-content').find('.dom').css('display', 'none');
//
//         // 重新设置状态
//         $(this).attr('class', 'selected');
//         $('#tab-content').find('.dom').eq($(this).index()).css('display', 'block');
//     });
// });