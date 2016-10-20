import termDisplayTemp from "./termDisplay.html";

function termDisplay() {
  return {
    restrict: "E"
    , replace: true
    , template: termDisplayTemp
    , scope: {
    }
    , link: function(scope, element, attr) {
    }
    , controller: function($scope, $state, $rootScope, userService) {
        // Call userService to get user

        $scope.currentUser = userService.currentUser;
        $scope.stateName = $state.current.name;
        $scope.lesson = {};
        $scope.term = {};
        $scope.lesson.currentTerm = 0;
        $scope.progress = 0;
        $rootScope.$on("userUpdate", function(event, user) {
          $scope.lesson = user.selectedLesson;
          if(!$scope.lesson.currentTerm) {
            $scope.lesson.currentTerm = 0;
            $scope.beginning = true;
          }
        });

        $scope.previousTerm = () => {
          $scope.lesson.currentTerm--;
          if ($scope.lesson.currentTerm === 0) $scope.beginning = true;
        }

        $scope.nextTerm = () => {
          $scope.beginning = false;
          $scope.lesson.currentTerm++;
          if($scope.lesson.currentTerm === $scope.lesson.lessonDetails.terms.length - 1) {
            $scope.finished = true;
          };
          $scope.progress = parseInt($scope.lesson.currentTerm / $scope.lesson.lessonDetails.terms.length * 100);


        }
    }
  }
}

export default termDisplay;
