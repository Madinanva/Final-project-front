var app = angular.module('app',[]);

app.directive('pagination', [function() {
  return {
    restrict: 'E',
    template: "<ul class='pagination'><li ng-class='{disabled:noPrev()}'><a ng-click='prevPage()'><span aria-hidden='true'>&laquo;</span></a></li><li ng-repeat='page in pages'ng-class='{active: isActive(page)}'><a ng-click='selectPage(page)'>{{page}}</a></li><li ng-class='{disabled:noNext()}'><a ng-click='nextPage()'><span aria-hidden='true'>&raquo;</span></a></li></ul>",
    replace: true,
    scope: {
      numPages: '=',
      currentPage: '=',
      onSelectPage: '&'
    },
    link: function(scope, elem, attrs){
      scope.$watch('numPages', function(value) {
        scope.pages = [];
        for(var i=1; i<=value; i++){
          scope.pages.push(i)
        }
        if(scope.currentPage > value) {
          scope.selectPage(value);
        }})
      scope.isActive = function(page) {
        return scope.currentPage == page;
      }
      scope.noPrev = function() {
        return scope.currentPage == 1;
      }
      scope.noNext = function() {
        return scope.currentPage == scope.numPages
      }
      scope.prevPage = function() {
        if(!scope.noPrev()) {
          scope.selectPage(scope.currentPage - 1);
        }
      }
      scope.nextPage = function() {
        if(!scope.noNext()) {
          scope.selectPage(scope.currentPage + 1)
        }
      }
      scope.selectPage = function(page) {
        if (!scope.isActive(page)) {
        
          scope.currentPage = page;
          scope.onSelectPage({page: page});
        }
      }
    }
       
  };
}])

app.controller('MainCtrl', function($scope) {
  $scope.getCurrentPage = function(page) {
    console.log(page)
  }
})
