(function(){

'use strict';

  angular.module('SampleApp', ['ngRoute', 'ngAnimate'])

  .config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {
      //routes
      $routeProvider
        .when("/", {
          templateUrl:"./partials/home.html",
          controller:"HomeController"
        })
        .otherwise({
          redirectTo: '/'
        });
    }
  ]);

  // home controller
  angular.module('SampleApp').controller('HomeController', [
    '$scope',
    function($scope) {
      $scope.test = "Testing...";
      console.log("this fired");
    }
  ]);

}());
