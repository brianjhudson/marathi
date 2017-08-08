import lessonListDisplayTemp from "./lessonListDisplayTemp.html";

function lessonListDisplay() {
  return {
    restrict: "E"
    , replace: true
    , template: lessonListDisplayTemp
    , scope: {}
    , controller: lessonListDisplayController

  }
}
function lessonListDisplayController($scope, $rootScope, userService, lessonService) {
   $scope.currentUser = userService.currentUser;
   $rootScope.$on("userUpdate", function(event, user) {
      $scope.currentUser = user;          
   });

   $scope.selectLesson = (lesson) => {
      userService.selectLesson(lesson).then(result => {
      });
   }
}
lessonListDisplayController.$inject = ["$scope", "$rootScope", "userService", "lessonService"]

export default lessonListDisplay;
