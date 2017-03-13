/**
 * 
 */

var app=angular.module('app',['ngRoute'])

app.config(function($routeProvider){
	
	$routeProvider.when('/',{
		templateUrl:'template/login.html',
		controller:'loginController'
	}).when('/home',{
		templateUrl:'template/landing.html',
		controller:'landingController'
	})
	.otherwise({redirectTo: '/'});
	
});