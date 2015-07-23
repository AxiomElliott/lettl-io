var mainjs = function(){

angular.module('SampleApp', ['ngRoute'])

  .config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {
      //routes
      $routeProvider
        .when("/", {
             templateUrl:"./partials/home.html"
          // controller:"HomeController"
        })
        .when("/blog", {
          templateUrl:"./partials/blog.html"
        })
        .when("/projects", {
          templateUrl:"./partials/projects.html"
        })
        .when("/contact", {
          templateUrl:"./partials/contact.html"
        })
        .otherwise({
          redirectTo: '/'
        });

        $locationProvider.html5Mode(true);
    }
  ]);


  // // home controller
  // angular.module('SampleApp').controller('HomeController', [
  //   '$scope',
  //   function($scope) {
  //     $scope.content = "Testing ※ Hello";
  //   }
  // ]);

  // // contact controller
  // angular.module('SampleApp').controller('ContactController', [
  //   '$scope',
  //   function($scope) {
  //     $scope.content = "Contact Me!";
  //   }
  // ]);
};
mainjs();
bannerjs();
angular.bootstrap(document,['SampleApp']);
