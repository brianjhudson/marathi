import progressCircleTemp from "./progressCircle.html";

function progressCircle() {
  return {
    restrict: "E"
    , replace: true
    , template: progressCircleTemp
    , scope: {
        progress: "="
    }
    , controller: progressController
  }
}
function progressController($scope, $rootScope, userService) {
   setTimeout(animateCounter(), 500)
   function animateCounter() {
      for (let i = 0; i <= $scope.progress; i++) {
      setTimeout(logCounter(i), i * 10);
      }
   }
   function logCounter (i) {
      return function() {
      $('.text').text(i + "%");
      }
   }
}
progressController.$inject = ["$scope", "$rootScope", "userService"]

export default progressCircle;
