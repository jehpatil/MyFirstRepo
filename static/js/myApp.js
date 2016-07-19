angular.module('myApp', ['ui.router', 'myApp.controllers', 'myApp.service'])
.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: '../html_templates/index.html',
        controller: 'myController'
    })
    .state('login', {
        url: '/login',
        templateUrl: '../html_templates/login.html',
        controller: 'myController'
    })
    .state('register', {
        url: '/register',
        templateUrl: '../html_templates/register.html',
        controller: 'userController'
    });
});