var mainjs = function(){

angular.module('SampleApp', ['ngRoute'])

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
        .when("/contact", {
          templateUrl:"./partials/contact.html",
          controller:"ContactController"
        })
        .otherwise({
          redirectTo: '/'
        });

        $locationProvider.html5Mode(true);
    }
  ]);


  // home controller
  angular.module('SampleApp').controller('HomeController', [
    '$scope',
    function($scope) {
      $scope.test = "Testing ※ Hello";
    }
  ]);

  // contact controller
  angular.module('SampleApp').controller('ContactController', [
    '$scope',
    function($scope) {
      $scope.test = "Contact Me!";
    }
  ]);
};
