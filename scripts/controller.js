
var backstage = angular.module('backstage-ctrl',[]);

backstage.controller('welcomeController',['$scope',function($scope){
	$scope.title = "欢迎来到后台管理系统";
}]);
backstage.controller('prolistController',['$scope','$http',function($scope,$http){
	$scope.title = "商品列表";
	$http({
		url: '/mock/prolist.json',
	})
	.then(function(res){
		$scope.prolist = res.data;
	},function(){

	})
}]);
backstage.controller('proClassifyController',['$scope',function($scope){
	$scope.message = "商品分类";
}])
