/**
 * Created by rishabhdev on 15/09/17.
 */

angular.module("gitapp").factory('apiService',function($http,API_URL){

    var apiService = {};
    apiService.getIssues = function(filter){

        var url = API_URL+'issues/';
       // if(filter.)


        $http({
            method:"GET"
        })
    }
});
