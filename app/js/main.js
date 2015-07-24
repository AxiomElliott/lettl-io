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
  ])
  .run(['$rootScope','$interval',function($rootScope, $interval) {
      $rootScope.textColourRotation = 0;
      var duration = 60000;
      var maxRotation = 360;
      var updateLength = duration / maxRotation;
      $rootScope.transitionTimer = $interval(function() {
        $rootScope.textColourRotation += 1;
        if ($rootScope.textColourRotation > maxRotation) {
          $rootScope.textColourRotation = 0;
        }
      }, updateLength);
  }]);

  angular.module('SampleApp').directive('ngRainbow', function() {
  return {
    link: function(scope, iElement, iAttrs) {
      scope.$watch('textColourRotation', function(value){
        iAttrs.$set('style','-webkit-filter: hue-rotate(' + value + 'deg)');
      })
    }
  }
});


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
