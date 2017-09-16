/**
 * Created by rishabhdev on 15/09/17.
 */
var app = angular.module("gitapp",['ui.bootstrap', 'ui.router','angularMoment']);
app.config(function($stateProvider, $urlRouterProvider,$httpProvider) {

    $httpProvider.interceptors.push('addToken');

    $stateProvider.state('dashboard', {
        url: '/dashboard',
        templateUrl: 'js/dashboard/dashboard.html'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/dashboard');


});

app.constant("API_URL","https://api.github.com/")
    .constant("API_TOKEN","cab0ef5a03e7b4494720db4a209c69809b7c4f82");
