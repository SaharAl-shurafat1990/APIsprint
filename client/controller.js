angular.module('cats',[])
.controller('catsController',function ($scope, $http){
	$scope.cats={};
	$scope.cat={};

	$scope.show = function(){
		return $http({
		method: 'GET',
		url: '/api/getAll',
		})
		.then(function (res) {
			console.log(res.data)
			 $scope.cats=res.data;
		});

	}
	$scope.create=function(){
		console.log($scope.cat)

		return $http({
			method: 'POST',
			url: '/api/addcat',
			data: $scope.cat
		}).then(function (res) {
			return res;
		});

	}
	
	


})