import lessonDisplayTemp from "./lessonDisplay.html";

function lessonDisplay() {
  return {
    restrict: "E"
    , replace: true
    , template: lessonDisplayTemp
    , scope: {}
    , controller: function($scope, $rootScope, userService, lessonService) {
        $scope.mode = "lesson"
        $scope.currentUser = userService.currentUser;
        $rootScope.$on("userUpdate", function(event, user) {
          $scope.currentUser = user;
        })
    }
  }
}

export default lessonDisplay;
