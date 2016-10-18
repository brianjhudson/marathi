import userSummaryTemp from "./userSummary.html";

function userSummary() {
  return {
    restrict: "E"
    , replace: true
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
