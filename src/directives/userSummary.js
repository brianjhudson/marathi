import userSummaryTemp from "./userSummary.html";

function userSummary($location, userService) {
  return {
    restrict: "E"
    , template: userSummaryTemp
    , scope: {}
    , controller: function($scope, $rootScope, userService) {
        $scope.currentUser = userService.currentUser;
        $rootScope.$on("userUpdate", function(event, data) {
          $scope.currentUser = data;
        });
    }
  }
}

export default userSummary;
