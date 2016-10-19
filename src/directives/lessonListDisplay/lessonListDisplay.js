import lessonListDisplayTemp from "./lessonListDisplayTemp.html";

function lessonListDisplay() {
  return {
    restrict: "E"
    , replace: true
    , template: lessonListDisplayTemp
    , scope: {
        selectedLesson: "="
    }
    , link: function(scope, element, attr) {

    }
    , controller: function($scope, $rootScope, userService, lessonService) {
        $scope.currentUser = userService.currentUser;
        $rootScope.$on("userUpdate", function(event, data) {
          $scope.currentUser = data;
          for (let i = 0; i < $scope.currentUser.lessons.length; i++) {
            $scope.currentUser.lessons[i].loading = true;
            lessonService.getLessonById($scope.currentUser.lessons[i]._id).then(result => {
              console.log(result);
              // TODO: Check result to see format of lesson;
              $scope.currentUser.lessons[i].lessonDetails = result.data;
              $scope.currentUser.lessons[i].loading = false;
            })

          }
          // TODO: Add regular getLessons for guest
        });

    }

  }
}

export default lessonListDisplay;
