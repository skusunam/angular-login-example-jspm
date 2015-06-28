var angular = require('angular');
require('angular-route');
require('bootstrap/css/bootstrap.css!')

angular.module('myApp', ['ngRoute'])
	.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				controller: 'HomeController',
				template: require('./home/home.view.html!text'),
				controllerAs: 'vm'
			})

			.when('/login', {
				controller: 'LoginController',
				template: require('./login/login.view.html!text'),
				controllerAs: 'vm'
			})


	});

require('./home/home.controller');
require('./login/login.controller');