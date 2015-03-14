angular.module('instaSearcher',[])
	.controller('photoCtrl',['$scope','$http', function($scope,$http){
		$scope.searchPhotos = function() {
     	 var url = 'https://api.instagram.com/v1/tags/'+$scope.searchTag+'/media/recent';
			var searchParams = {
				client_id: 'c8bccff528b846e3aff4eb76fb71e4ce',
				callback: 'JSON_CALLBACK'
			};
			$http({
				method: 'JSONP',
				url: url,
				params: searchParams
			})
      		.success(function(data){
        		$scope.results = data;
		        $scope.successfulSearch = true;
		        $scope.keyword = $scope.searchTag;
		        $scope.searchTag = "";
		    })
	      	.error(function(){
	      		$scope.successfulSearch = false;
	      		$scope.failedSearch = true;
	      	})
    	}
  }]);