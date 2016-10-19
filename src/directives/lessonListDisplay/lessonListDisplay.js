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
    , controller: function($scope, $rootScope, userService) {
        $scope.currentUser = userService.currentUser;
        $rootScope.$on("userUpdate", function(event, data) {
          $scope.currentUser = data;
          console.log($scope.currentUser);
        });

    }

  }
}

export default lessonListDisplay;
