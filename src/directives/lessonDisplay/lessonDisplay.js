import lessonDisplayTemp from "./lessonDisplay.html";

function lessonDisplay() {
  return {
    restrict: "E"
    , replace: true
    , template: lessonDisplayTemp
    , scope: {}
    , link: function(scope, element, attr) {

    }
    , controller: function($scope, $rootScope, userService, lessonService) {
        $scope.currentUser = userService.currentUser;
        $rootScope.$on("userUpdate", function(event, user) {
          console.log(user);
          $scope.currentUser = user;
        })

    }

  }
}

export default lessonDisplay;
