import navDirectiveTemp from "./navDirective.html";

function navDirective() {
  return {
    restrict: "E"
    , template: navDirectiveTemp
    , scope: {
       showModal: "&"
    }
    , controller: function($scope, $rootScope, userService) {
        $scope.currentUser = userService.currentUser;
        $rootScope.$on("userUpdate", function(event, data) {
          $scope.currentUser = data;
        });
        $scope.showLogin = () => {
           console.log($("#loginModal"))
           $("#loginModal").fadeIn()
        }
    }
  }
}

export default navDirective;
