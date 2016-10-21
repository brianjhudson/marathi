import termDisplayTemp from "./termDisplay.html";

function termDisplay() {
  return {
    restrict: "E"
    , replace: true
    , template: termDisplayTemp
    , scope: {
        mode: "="
    }
    , controller: function($scope, $state, $rootScope, userService) {
        // Initial State
        $scope.loading = true;
        $scope.currentUser = userService.currentUser;
        $scope.stateName = $state.current.name;
        $scope.lesson = {};
        $scope.term = {};
        $scope.lesson.currentTerm = 0;
        $scope.progress = 0;
        $scope.showCorrectAnswer = false;
        $scope.showCongratulations = false;
        $scope.review = {
          reviewMode: false
          , answers: ["a", "b", "c", "d"]
        }
        $rootScope.$on("userUpdate", function(event, user) {
          setTimeout(() => {
            if ($scope.mode === "lesson") {
              $scope.currentUser = user;
              $scope.lesson = user.selectedLesson;
            } else {
              $scope.lesson = {
                currentTerm: 0
                , lessonDetails: {
                  title: "Review"
                  , terms: user.reviewItems
                }
              }
            }
            $scope.lesson.score = 0;
            if(!$scope.lesson.currentTerm) {
              $scope.lesson.currentTerm = 0;
              $scope.beginning = true;
            }
            $scope.loading = false;
          }, 1000)
        });

        $scope.answerQuestion = (answer) => {
          $scope.revealAnswer = true;
          if (answer === $scope.review.reviewAnswer) {
            $scope.showCongratulations = true;
            $scope.lesson.score++;
          } else {
            $scope.showIncorrectAnswer = true;
            $scope.user.reviewItems.push($scope.review);
          }
        }

        $scope.finishLesson = () => {
          $scope.lesson.completed = true;
          if ($scope.mode === "lesson") {
            userService.saveUserLesson($scope.lesson).then(result => {
              console.log(result);
            });
          }
        }
        $scope.previousTerm = () => {
          $scope.lesson.currentTerm--;
          if ($scope.lesson.currentTerm === 0) $scope.beginning = true;
          $scope.progress = parseInt($scope.lesson.currentTerm / $scope.lesson.lessonDetails.terms.length * 100);
          //Reset review properties
          $scope.review = {
            reviewMode: false
            , answers: ["a", "b", "c", "d"]
            }
          $scope.showInCorrectAnswer = false;
          $scope.showCongratulations = false;
          $scope.revealAnswer = false;

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
            $scope.showInCorrectAnswer = false;
            $scope.showCongratulations = false;
            $scope.revealAnswer = false;

          } else {
            $scope.review = terms[$scope.lesson.currentTerm];
            if ($scope.mode === "lesson") {
              $scope.review.answers = [];
              $scope.review.reviewMode = true;
              $scope.review.answers.push($scope.review.reviewAnswer);
              // Generate three random indices, look up answers, and push to review

              for (let i = 0; i < 3; i++) {
                let answerIndex = Math.floor(Math.random() * lessonLength);
                while ($scope.review.answers.indexOf(terms[answerIndex].term) !== -1 || $scope.review.answers.indexOf(terms[answerIndex].transliteration) !== -1) {
                  answerIndex = Math.floor(Math.random() * lessonLength);
                }
                if ($scope.review.reviewAnswerType === "transliteration")  {
                  $scope.review.answers.push(terms[answerIndex].transliteration)
                } else {
                  $scope.review.answers.push(terms[answerIndex].term)
                }
              }
              // Put answer in random position
              let answerIndex = Math.floor(Math.random() * 4);
              $scope.review.answers.splice(0, 1)
              $scope.review.answers.splice(answerIndex, 0, $scope.review.reviewAnswer);
            }
            $scope.revealAnswer = false;
          }

        }
    }
  }
}

export default termDisplay;
