/**
 * Created by rishabhdev on 15/09/17.
 */

angular.module("gitapp").controller('dashboardCtrl',function($scope,apiService,API_URL){

    $scope.API_URL = API_URL;
    $scope.bucket = {};

    $scope.loadIssues = function(){
        apiService.getBoundryIssues($scope.bucket.repoName,true)
            .then(function(res){
                console.log("OLD",res);
                $scope.oldest = res.data[0];
               return apiService.getBoundryIssues($scope.bucket.repoName,false)
            })
            .then(function(res){
                $scope.recent = res.data[0];
                return  $scope.fetchIssues()

            })
    }
    $scope.fetchIssues = function(){
        return apiService.getIssues({repoName:$scope.bucket.repoName,sortBy:$scope.bucket.singleSelect})
            .then(function(res){
                $scope.issues = res.data;
            })

    }
});
