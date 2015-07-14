angular.module('SampleApp').controller('bannerController', ['$scope','$window','$timeout', function($scope,$window,$timeout){
  $scope.bannerdata = [
    {'index':1, 'char':'e'},
    {'index':-1, 'char':'l'},
    {'index':2, 'char':'l'},
    {'index':3, 'char':'i'},
    {'index':3, 'char':'o'},
    {'index':-3, 'char':'t'},
    {'index':-3, 'char':'t'},
    {'index':-2, 'char':'.'}
  ];
  var surname = [
    {'index':0, 'char':'t'},
    {'index':0, 'char':'h'},
    {'index':0, 'char':'o'},
    {'index':0, 'char':'m'},
    {'index':0, 'char':'p'},
    {'index':0, 'char':'s'},
    {'index':0, 'char':'o'},
    {'index':0, 'char':'n'}
  ];


  $scope.charclasses = "char";
  var charspacing = 30;
  // offset the first 8 chars by half of their total width
  $scope.offset = (charspacing * 8) / 2;
  $scope.fasttransition = false;

  // changes the index of the chars 'elliott.' so that they have a correct visual order
  // fires off after 4 seconds
  $timeout(function() {
    for(i = 0; i < $scope.bannerdata.length; i++) {
      $scope.bannerdata[i].index = 0;
    }
  }, 4000);

  // adds my last name to the banner
  // creates a tada animation using animate.css
  // fires off after 15 seconds
  $timeout(function() {
    $scope.bannerdata = $scope.bannerdata.concat(surname);
    for(i = 0; i < $scope.bannerdata.length; i++) {
      $scope.charclasses += ' animated tada';
    }
    $scope.fasttransition = true;
    $scope.offset = 0;
  }, 15000);

// text color animation for the banner, loops the hue over 60 s
  $timeout(function() {
    for(i = 0; i < $scope.bannerdata.length; i++) {
      $scope.charclasses += ' huechange';
    }
  }, 17000);


  $scope.getCharStyling = function(index){
    return {'left':(index * charspacing + $scope.offset) + 'px', 'transition':$scope.fasttransition? 0.5 + 's' : 9 + 's'};
  }

}]);
