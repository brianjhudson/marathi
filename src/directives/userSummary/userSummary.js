import userSummaryTemp from "./userSummary.html";

function userSummary() {
  return {
    restrict: "E"
    , replace: true
    , template: userSummaryTemp
    , scope: {}
    // Check to see if user appears upon login--if not, see if we need to pass user in scope
    , controller: userSummaryController
  }
}
function userSummaryController($scope, $rootScope, userService) {
   $scope.currentUser = userService.currentUser;
   $rootScope.$on("userUpdate", function(event, data) {
      $scope.currentUser = data;
      $scope.lessonsCompleted = userService.lessonsCompleted;          
   });
}

userSummaryController.$inject = ["$scope", "$rootScope", "userService"]
export default userSummary;
