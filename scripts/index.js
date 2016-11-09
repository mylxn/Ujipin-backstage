$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}

	var accordion = new Accordion($('#accordion'), false);
});


var backstage = angular.module('myBackstage',['ui.router','backstage-ctrl','backstage-service']);
backstage.config(function($urlMatcherFactoryProvider){
	$urlMatcherFactoryProvider.caseInsensitive(true);
})
backstage.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
  $stateProvider
    .state('welcome',{
			url: '/welcome',
      templateUrl: '/partials/welcome.html',
      controller: 'welcomeController'
    })
		.state('productlist',{
			url:'/productlist',
			templateUrl:'/partials/productlist.html',
			controller: 'prolistController'
		})
		.state('proClassify',{
			url:'/proClassify',
			templateUrl:'partials/productclassify.html',
			controller: 'proClassifyController'
		})
		.state('proSearch',{
			url:'/proSearch/:search',
			templateUrl:'partials/productSearch.html',
			controller: 'proSearchController'
		})
		.state('proDetail',{
			url:'/proDetail/:id',
			templateUrl:'partials/productDetail.html',
			controller: 'proDetailController'
		})
		.state('proAdd',{
			url:'/proAdd',
			templateUrl:'partials/productAdd.html',
			controller: 'proAddController'
		})

		$urlRouterProvider.otherwise('/welcome');

}]);
