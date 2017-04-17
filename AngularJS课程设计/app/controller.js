// Ìí¼Ó¿ØÖÆÆ÷
app.constant("baseUrl", "http://localhost:2403/")
app.controller("shiCtrl",function($scope,$http,baseUrl){
	 $scope.listUser = function () {
        $http.get(baseUrl+"user/").success(function (data) {
            $scope.user = data;
        });
    };
    $scope.listUser();
});
app.controller("naviCtrl",function($scope,$http,baseUrl){
	 $scope.listNavi = function () {
        $http.get(baseUrl+"navigation/").success(function (data) {
            $scope.navigation = data;
        });
    };
    $scope.listNavi();
});
app.controller("defaultCtrl", function ($scope, $http, baseUrl) {
	$scope.message=null;
    $scope.listProducts = function () {
        $http.get(baseUrl+"products/").success(function (data) {
            $scope.products = data;
        });
    };
    $scope.listProducts();
    $scope.createProduct = function (product) {
        $scope.products.push(product);
        //push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
        $scope.counts="defined";
    };
});
