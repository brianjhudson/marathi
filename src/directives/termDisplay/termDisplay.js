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
        $rootScope.$on("userUpdate", function(event, user) {
          console.log(user);
          $scope.currentUser = user;
        });
          // let termIndex = $scope.currentUser.selectedLesson.currentTerm || 0;
          // const terms = $scope.currentUser.selectedLesson.details.terms;
          // if (termIndex = 0) $scope.beginning = true
          // else if (termIndex = terms.length) $scope.finished = true;
          // });

        // $scope.previousTerm = () => {
        //   termIndex--;
        //   $scope.term = terms[lesson.currentTerm];
        //   $scope.currentUser.selectedLesson.currentTerm = termIndex;
        //   if (termIndex === 0) $scope.beginning = true;
        // }
        //
        // $scope.nextTerm = () => {
        //   termIndex++;
        //   $scope.term = terms[lesson.currentTerm];
        //   $scope.currentUser.selectedLesson.currentTerm = termIndex;
        //   if (termIndex = terms.length - 1) $scope.finished = true;
        // }
    }
  }
}

export default termDisplay;
