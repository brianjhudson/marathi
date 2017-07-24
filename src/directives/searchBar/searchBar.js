import searchBarTemp from "./searchBar.html";

function searchBar() {
  return {
    restrict: "E"
    , replace: true
    , template: searchBarTemp
    , scope: {
    }
    , controller: searchController
  }
}
function searchController($scope, $rootScope, userService) {
   $scope.currentUser = userService.currentUser;
   $rootScope.$on("userUpdate", function(event, user) {
      $scope.currentUser = user;
   });
   $scope.selectLesson = lesson => {
      userService.selectLesson(lesson).then(result => {
      });
   }
}
searchController.$inject = ["$scope", "$rootScope", "userService"]

export default searchBar;
