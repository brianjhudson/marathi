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
        $scope.showSideNav = () => {
           $("#nav-mobile").animate({
              left: 0
           }, 300, 'linear')
        }
        $scope.hideSideNav = () => {
           $("#nav-mobile").animate({
              left: "-300px"
           }, 300, 'linear')
        }
    }
  }
}

export default navDirective;
