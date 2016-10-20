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
        $scope.review = {
          reviewMode: false
          , answers: ["a", "b", "c", "d"]
        }
        $rootScope.$on("userUpdate", function(event, user) {
          $scope.lesson = user.selectedLesson;
          // Initialize terms
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
          // Activate previous button
          $scope.beginning = false;
          let terms = $scope.lesson.lessonDetails.terms;
          let lessonLength = terms.length;
          // If just finished a review question, proceed to next term and reset review
          if ($scope.review.reviewMode) {
            if($scope.lesson.currentTerm === lessonLength - 1) {
              $scope.finished = true;
            } else {
              $scope.lesson.currentTerm++;
              $scope.progress = parseInt($scope.lesson.currentTerm / lessonLength * 100);
            }
            // Reset reviewObject
            $scope.review = {
              reviewMode: false
              , answers: ["a", "b", "c", "d"]
              }
          } else {
            $scope.review = terms[$scope.lesson.currentTerm];
            $scope.review.answers = [];
            $scope.review.reviewMode = true;
            $scope.review.answers.push($scope.review.reviewAnswer);
            // Generate three random indices, look up answers, and push to review
            for (let i = 0; i < 3; i++) {
              let answerIndex = Math.floor(Math.random() * lessonLength);
              while ($scope.review.answers.indexOf(terms[answerIndex].reviewAnswer) !== -1) {
                answerIndex = Math.floor(Math.random() * lessonLength);
              }
              $scope.review.answers.push(terms[answerIndex].reviewAnswer)
            }
          }

        }
    }
  }
}

export default termDisplay;
