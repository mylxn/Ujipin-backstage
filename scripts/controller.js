
var backstage = angular.module('backstage-ctrl',[]);

backstage.controller('welcomeController',['$scope',function($scope){
	$scope.title = "欢迎来到后台管理系统";
}]);
backstage.controller('prolistController',['$scope','$http','$state',function($scope,$http,$state){
	$scope.title = "商品列表";
	$scope.search = "";
	$http({
		url: '/mock/prolist.json',
	})
	.then(function(res){
		$scope.prolist = res.data;
	},function(){

	})
	$scope.remove = function(i) {
		$scope.prolist.splice(i,1);
		//需要后台
		// $http.post('/mock/prolist.json',$scope.prolist)
		// 	.then(function(){
		// 		console.log('success');
		// 	},function(){
		// 		console.log('error');
		// 	})
	}
	$scope.searchpro = function() {
		if($scope.search){
			$state.go('proSearch',{
				search:$scope.search
			})
		}
	}
	$scope.todetail =function(i) {
		$state.go('proDetail',{
			id:i
		})
	}

}]);
backstage.controller('proClassifyController',['$scope',function($scope){
	$scope.message = "商品分类";
}])
backstage.controller('proSearchController',['$scope','$stateParams',function($scope,$stateParams){
	$scope.message = "商品搜索";
	$scope.search = $stateParams.search;
}])
backstage.controller('proDetailController',['$scope','$http','$stateParams',function($scope,$http,$stateParams){
	$scope.message = "商品详情";
	$http({
		url:'/mock/detail.json',
		params: {
			id: $stateParams.id
		},
		method: 'get'
	})
	.then(function(res){
		$scope.prodetail = res.data.data[$stateParams.id];
	})
}])
backstage.controller('proAddController',['$scope',function($scope){
	$scope.message = "请输入商品信息";
}])
