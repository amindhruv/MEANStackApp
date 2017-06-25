angular.module('myApp', [])
	.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
	var refresh = function() {
		$http.get('/contactlist').then(function(response) {
			$scope.contactlist = response.data;
			$scope.contact = "";
		});
	};

	refresh();

	$scope.add = function() {
		$http.post('/contactlist', $scope.contact).then(function(response) {
			refresh();
		});
	};

	$scope.update = function() {
		$http.put('/contactlist/' + $scope.contact._id, $scope.contact).then(function(response) {
			refresh();
		});
	};

	$scope.clear = function() {
		$scope.contact = "";
	};

	$scope.remove = function(id) {
		$http.delete('/contactlist/' + id).then(function(response) {
			refresh();
		});
	};

	$scope.edit = function(id) {
		$http.get('/contactlist/' + id).then(function(response) {
			$scope.contact = response.data;
		});
	};
}]);
