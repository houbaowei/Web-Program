/*
 * 控制器模块
 * */
angular.module('Controllers', [])
    .controller('DemoController', ['$scope', function ($scope) {
        console.log('启动啦!!!');
    }])

    // 导航菜单
    .controller('NavController', ['$scope', function ($scope) {
        // 导航数据
        $scope.navs = [{
                link: '#/today',
                text: '今日一刻',
                icon: 'icon-home'
            },
            {
                link: '#/older',
                text: '往期内容',
                icon: 'icon-file-empty'
            },
            {
                link: '#/author',
                text: '热门作者',
                icon: 'icon-pencil'
            },
            {
                link: '#/category',
                text: '栏目浏览',
                icon: 'icon-menu'
            },
            {
                link: '#/favourite',
                text: '我的喜欢',
                icon: 'icon-heart'
            },
            {
                link: '#/settings',
                text: '设置',
                icon: 'icon-cog'
            }
        ];
    }])

    // 今日一刻
    .controller('TodayController', ['$rootScope', '$scope', '$http', '$filter', function ($rootScope, $scope, $http, $filter) {
        $rootScope.title = '今日一刻';
        $rootScope.index = 0;
        $rootScope.loaded = false;

        // 获取计算机时间
        var filter = $filter('date');
        var today = filter(new Date(), 'yyyy-MM-dd');

        $http({
            url: './api/today.php',
            method: 'get',
            params: {
                today: today
            }

        }).then(function successCallback(response) {
            $rootScope.loaded = true;
            $scope.date = response.data.date;
            $scope.posts = response.data.posts;

        }, function errorCallback(response) {
            console.log(response);
        })
    }])
    // 往期内容
    .controller('OlderController', ['$rootScope', '$scope', '$http', function ($rootScope, $scope, $http) {
        $rootScope.title = '往期内容';
        $rootScope.index = 1;
        $rootScope.loaded = false;

        $http({
            url: './api/older.php'
        }).then(function (response) {
            $rootScope.loaded = true;
            $scope.date = response.data.date;
            $scope.posts = response.data.posts;
        })
    }])
    // 热门作者
    .controller('AuthorController', ['$rootScope', '$scope', '$http', function ($rootScope, $scope, $http) {
        $rootScope.title = '热门作者';
        $rootScope.index = 2;
        $rootScope.loaded = false;

        $http({
            url: './api/author.php'
        }).then(function (response) {
            $rootScope.loaded = true;
            $scope.authors = response.data.authors;
        })
    }])
    // 栏目浏览
    .controller('CategoryController', ['$rootScope', '$scope', function ($rootScope, $scope) {
        $rootScope.title = '栏目浏览';

    }])
    // 我的喜欢
    .controller('FavouriteController', ['$rootScope', '$scope', function ($rootScope, $scope) {
        $rootScope.title = '我的喜欢';

    }])
    // 设置
    .controller('SettingsController', ['$rootScope', '$scope', function ($rootScope, $scope) {
        $rootScope.title = '设置';

    }]);