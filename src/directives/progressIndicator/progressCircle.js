import progressCircleTemp from "./progressCircle.html";

function progressCircle() {
  return {
    restrict: "E"
    , replace: true
    , template: progressCircleTemp
    , scope: {}
    , link: function(scope, element, attr) {
    }
    , controller: function($scope, $rootScope, userService) {
        const progress = 100;
        setTimeout(animateCounter(), 500)
        function animateCounter() {
          for (let i = 0; i <= progress; i++) {
            setTimeout(logCounter(i), i * 10);
          }
        }
        function logCounter (i) {
          return function() {
            $('.text').text(i + "%");
          }
        }
    }

  }
}

export default progressCircle;
