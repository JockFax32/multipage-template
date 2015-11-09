// Create app
var myApp = angular.module('myApp', ['ui.router'])
// Configure app
myApp.config(function($stateProvider){
    $stateProvider
        .state('home', {
            url:'/',
            templateUrl: 'templates/home.html',
            controller: 'HomeController',
        }).state('content',{
            url:'/content',
            templateUrl:'templates/content.html',
            controller: 'ContentController',
        }).state('about',{
            url:'/about',
            templateUrl:'templates/about.html',
            controller:'AboutController'
        })
})

// Landing page controller: define $scope.number as a number
.controller('HomeController',function($scope){
    $scope.number= 24;
})

// About page controller: define $scope.about as a string
.controller('AboutController', function($scope){
    $scope.about='Expression from Angular';
})


// Content controller: define $scope.url as an image
.controller('ContentController', function($scope){
    $scope.url = 'https://upload.wikimedia.org/wikipedia/commons/d/df/Fox_study_6.jpg'
})

