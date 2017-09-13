/*
* 自定义指令模块
* */

angular.module('Directives', [])
// 自定义指令
.directive('loading', function () {
    return {
        restrict: 'A',
        replace: true, // 是否替换原有标签
        template: '<img src="" alt="" />'
    }
});