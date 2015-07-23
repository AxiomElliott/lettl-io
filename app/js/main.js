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

//   angular.module('SampleApp').controller('rainbowCtrl', function($scope){
//     $scope.val = {
//         initialValue : 50
//     }
// });

  angular.module('SampleApp').directive('ngRainbow', function() {
  return {
    // compile: function(el) {
    //   el.removeAttr('ng-rainbow');
    //   el.attr('style', 'font-size: 60px');
    // },
    controller: ['$scope', '$timeout', function($scope, $timeout) {
      $scope.val = 20;
      $timeout(function() {
        $scope.val = 60;
      }, 5000);
    }],
    scope: { val: '=' },
    link: function(scope, iElement, iAttrs) {
        // iAttrs.$set('style','font-size: ' + scope.val + 'px');
        scope.$watch('val', function(value){
          iAttrs.$set('style','font-size: ' + value + 'px');
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
