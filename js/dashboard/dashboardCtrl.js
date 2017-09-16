/**
 * Created by rishabhdev on 15/09/17.
 */

angular.module("gitapp").controller('dashboardCtrl',function($scope,apiService,API_URL){

    $scope.API_URL = API_URL;
    $scope.bucket = {};

    $scope.fetchIssues = function(){

        apiService.getBoundryIssues($scope.bucket.repoName,true)
            .then(function(res){
                console.log("OLD",res);
               return apiService.getBoundryIssues($scope.bucket.repoName,false)
            })
            .then(function(res){
                console.log("NEW",res);
                return apiService.getIssues({repoName:$scope.bucket.repoName})

            })
            .then(function(res){
                console.log(res);
                $scope.issues = res.data;
            })
    }
});
