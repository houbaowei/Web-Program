/*
* 入口模块
* */
var YiKe = angular.module('YiKe', ['ngRoute', 'Controllers', 'Directives']);

YiKe.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    /**
     * 使用ng-route大于1.6.0的版本时，地址中的 "/" 会自动被解析 而且还会在URL地址中加入#！ 导致路由不能正常的工作
     * 添加以下方法可以有效解决这个问题
     * $locationProvider.hashPrefix('');
     */
    $locationProvider.hashPrefix('');

    $routeProvider.when('/today', {
        templateUrl: './views/today.html',
        controller: 'TodayController'
    }).when('/older', {
        templateUrl: './views/older.html',
        controller: 'OlderController'
    }).when('/author', {
        templateUrl: './views/author.html',
        controller: 'AuthorController'
    }).when('/category', {
        templateUrl: './views/category.html',
        controller: 'CategoryController'
    }).when('/favourite', {
        templateUrl: './views/favourite.html',
        controller: 'FavouriteController'
    }).when('/settings', {
        templateUrl: './views/settings.html',
        controller: 'SettingsController'
    }).otherwise({
        redirectTo: '/today'
    });
}]);

YiKe.run(['$rootScope', function ($rootScope) {
    // 设置初始值, 控制菜单栏的展开
    $rootScope.collapsed = false;

    // 全局菜单展开方法
    $rootScope.toggle = function () {
        $rootScope.collapsed = !$rootScope.collapsed;
        // 获取所有导航
        var navs = document.querySelectorAll('.navs dd');
        if ($rootScope.collapsed) {
            // 打开
            console.log('打开');
            for (var i = 0; i < navs.length; i++) {
                navs[i].style.transform = 'translate(0)';
                navs[i].style.transitionDelay = '0.2s';
                navs[i].style.transitionDuration = (i + 1) * 0.15 + 's';
            }
        } else {
            // 关闭
            console.log('关闭');
            var len = navs.length - 1;
            for (var j = len; j > 0 ; j--) {
                navs[j].style.transform = 'translate(-100%)';
                navs[j].style.transitionDelay = '';
                navs[j].style.transitionDuration = (len - j) * 0.15 + 's';
            }
        }
    }
}]);