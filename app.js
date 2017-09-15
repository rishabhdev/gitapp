/**
 * Created by rishabhdev on 15/09/17.
 */
var app = angular.module("gitapp",['ui.bootstrap', 'ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('dashboard', {
        url: '/dashboard',
        templateUrl: 'js/dashboard/dashboard.html'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/dashboard');


});

app.constant("API_URL","https://api.github.com/");
