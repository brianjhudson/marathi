import lessonListDisplayTemp from "./lessonListDisplayTemp.html";

function lessonListDisplay() {
  return {
    restrict: "E"
    , replace: true
    , template: lessonListDisplayTemp
    , scope: {}
    , link: function(scope, element, attr) {
    }
    , controller: function($scope, $rootScope, userService, lessonService) {
        $scope.currentUser = userService.currentUser;
        $rootScope.$on("userUpdate", function(event, user) {
          $scope.currentUser = user;
          if (!$scope.currentUser.loggedIn) {
            lessonService.getLessons().then(result = {
              $scope.currentUser.lessons = lessonService.formatGuestLessons(result.data);
            })
          }
          // TODO: Add regular getLessons for guest
        });
        $scope.selectLesson = (lesson) => {
          userService.selectLesson(lesson).then(result => {
            console.log(result);
          });
        }

    }

  }
}

export default lessonListDisplay;
