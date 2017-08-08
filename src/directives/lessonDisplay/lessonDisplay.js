import lessonDisplayTemp from "./lessonDisplay.html";

function lessonDisplay() {
  return {
    restrict: "E"
    , replace: true
    , template: lessonDisplayTemp
    , scope: {}
    , controller: lessonDisplayController
  }
}

function lessonDisplayController($scope, $rootScope, userService, lessonService) {
   $scope.mode = "lesson"
   $scope.currentUser = userService.currentUser;
   $rootScope.$on("userUpdate", function(event, user) {
      $scope.currentUser = user;
   })
}
lessonDisplayController.$inject = ["$scope", "$rootScope", "userService", "lessonService"]
export default lessonDisplay;
