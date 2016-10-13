import navDirectiveTemp from "./navDirective.html";

function navDirective($location, userService) {
  return {
    restrict: "E"
    , template: navDirectiveTemp
    , scope: {}
    , controller: function($scope, $rootScope, userService) {
        $scope.currentUser = userService.currentUser;
        $rootScope.$on("userUpdate", function(event, data) {
          $scope.currentUser = data;
        });
        $scope.printUser = function() {(console.log($scope.currentUser))};
    }
  }
}

export default navDirective;
