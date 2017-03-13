/**
 * 
 */

app.controller('loginController',function($scope, $http, $location) {

	$scope.submit = function() {

		$http.get('json/user.json').then(
				function (response) {
					if ($scope.username == response.data.username
							&& $scope.password == response.data.password) {
						console.log("login sucessfull!!");
						$location.path("/home");
					}

					else {
						console.log("login failed");
					}
				}, function (response) {

					console.log("failed");
				});
	}

});