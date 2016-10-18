import navDirectiveTemp from "./navDirective.html";

function navDirective() {
  return {
    restrict: "E"
    , template: navDirectiveTemp
    , scope: {}
    , controller: function($scope, $rootScope, userService) {
        $scope.currentUser = userService.currentUser;
        $rootScope.$on("userUpdate", function(event, data) {
          $scope.currentUser = data;
        });

        $scope.logoutUser = () => {
          userService.logoutUser().then(() => {
            console.log("Logged Out")
          })
        }
    }
  }
}

export default navDirective;
