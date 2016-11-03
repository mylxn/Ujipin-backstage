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


var backstage = angular.module('myBackstage',['ngRoute']);
backstage.config(['$routeProvider',function($routeProvider){
  $routeProvider
    .when('/welcome',{
      templateUrl: '/partials/welcome.html',
      controller: 'welcomeController'
    })
    .otherwise({
      redirectTo: '/welcome'
    })

}]);
backstage.controller('welcomeController',['$scope',function($scope){
	$scope.title = "eee";
}])
