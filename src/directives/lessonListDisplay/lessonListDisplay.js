import lessonListDisplayTemp from "./lessonListDisplayTemp.html";

function lessonListDisplay() {
  return {
    restrict: "E"
    , replace: true
    , template: lessonListDisplayTemp
    , scope: {}
    , link: function(scope, element, attr) {

    }
    , controller: function($scope, $rootScope, userService) {
        $scope.currentUser = userService.currentUser;
        $rootScope.$on("userUpdate", function(event, user) {
          $scope.currentUser = user;
          // TODO: Add regular getLessons for guest
        });


    }

  }
}

export default lessonListDisplay;
