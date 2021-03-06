	'use strict';

	angular.module('clouddataFrontendApp')
		.controller('LoginCtrl', function($scope, $window, $rootScope, $routeParams, $timeout, $location, Restangular, authService) {

			$scope.login = function() {
				Restangular.all("user/authenticate").withHttpConfig({
					transformRequest: angular.identity
				})
					.customPOST("username=" + $scope.user.username + "&password=" + $scope.user.password, undefined, undefined, {
						'Content-Type': "application/x-www-form-urlencoded"
					}).then(function(response) {
						authService.loginConfirmed();
						$window.sessionStorage.setItem('token', response.token);
						$location.path("main");
					});
			}
		});