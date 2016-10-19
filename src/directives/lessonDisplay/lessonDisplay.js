import lessonDisplayTemp from "./lessonDisplay.html";

function lessonDisplay() {
  return {
    restrict: "E"
    , replace: true
    , template: lessonDisplayTemp
    , scope: {
        selectedLesson: "="
    }
    , link: function(scope, element, attr) {

    }
    , controller: function($scope, $rootScope, userService, lessonService) {
        $scope.currentUser = userService.currentUser;
        $rootScope.$on("userUpdate", function(event, data) {
          //TODO: Move to userService
          $scope.currentUser = data;
        });
        $scope.selectedLesson.loading = true;
        lessonService.getSelectedLesson($scope.selectedLesson._id).then(result => {
          console.log(result);
          $scope.selectedLesson = result;
          $scope.selectedLesson.loading = false;
        })

    }

  }
}

export default lessonDisplay;
