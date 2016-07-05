var app = angular.module('libbyApp', ['ngRoute']);

app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
	$routeProvider.
		when('/services', {
			templateUrl: './partials/services.html'
		}).
		when('/contact', {
			templateUrl: './partials/contact.html'
		}).
		when('/home', {
			templateUrl: './partials/home.html'
		}).
		otherwise({
			redirectTo: '/home'
		});
}]);

app.controller('MainCtrl', function ($scope) {

});
