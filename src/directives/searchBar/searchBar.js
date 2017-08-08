import searchBarTemp from "./searchBar.html";

function searchBar() {
  return {
    restrict: "E"
    , replace: true
    , template: searchBarTemp
    , scope: {
       showModal: "&"
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
   $scope.selectTerm = (term, lesson) => {
      lesson.currentTerm = lesson.lessonDetails.terms.indexOf(term);$scope.currentUser.selectedLesson = lesson; $scope.selectLesson(lesson); 
      $scope.showModal({target: 'term-display-modal'})
   }
}
searchController.$inject = ["$scope", "$rootScope", "userService"]

export default searchBar;
