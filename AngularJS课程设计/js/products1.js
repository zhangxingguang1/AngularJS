//使用$http与服务器通信
angular.module("exampleApp", [])
.constant("baseUrl", "http://localhost:2403/products/")
    //.constant（变量，值）定义全局变量
.controller("defaultCtrl", function ($scope, $http, baseUrl) {
    //在controller中调用全局变量baseUrl
    $scope.message="";
    
    $scope.displayMode = "list";
    //初始化：显示产品列表
    $scope.currentProduct = null;
    //编辑视图中的双向数据绑定的input初始化为空
    $scope.listProducts = function () {
        $http.get(baseUrl).success(function (data) {
            $scope.products = data;
        });
    };
    //显示产品
    $scope.deleteProduct = function (product) {
        $scope.products.splice($scope.products.indexOf(product), 1);
        //splice(index,howmany)方法可删除从index处开始的howmany个元素。
    };
    //删除产品
    $scope.createProduct = function (product) {
        $scope.products.push(product);
        //push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
        $scope.displayMode = "list";
    };
    //添加产品
    $scope.updateProduct = function (product) {
        for (var i = 0; i < $scope.products.length; i++) {
            if ($scope.products[i].id == product.id) {
                $scope.products[i] = product;
                break;
            }
        }
        $scope.displayMode = "list";
    };
    //更新产品
    $scope.editOrCreateProduct = function (product) {
        $scope.currentProduct =product ? product : {};
        //返回要编辑的对象，并调用currentProduct方法添加产品
        $scope.displayMode = "edit";
        //转为编辑视图
    };
    //修改产品
    $scope.saveEdit = function (product) {
        if (angular.isDefined(product.id)) {
            //若产品存在则调用更新函数
            $scope.updateProduct(product);
        } else {
            //若产品不存在则调用添加函数
            $scope.createProduct(product);
        }
    };
    //保存修改
    $scope.cancelEdit = function () {
        $scope.currentProduct = {};
        $scope.displayMode = "list";
    };
    //取消修改
    $scope.listProducts();
    //调用函数，显示产品列表
});
.constant("baseU", "http://localhost:2403/user/")
.controller("main",function($scope,$http,baseU){
    $scope.listUser = function () {
        $http.get(baseU).success(function (data) {
            $scope.user = data;
        });
    }
    $scope.listUser();
    });
