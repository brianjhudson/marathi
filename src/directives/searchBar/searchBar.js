import searchBarTemp from "./searchBar.html";

function searchBar() {
  return {
    restrict: "E"
    , replace: true
    , template: searchBarTemp
    , scope: {
    }
    , link: function(scope, element, attr) {
    }
    , controller: function($scope, $rootScope, userService) {
        $scope.currentUser = userService.currentUser;
        $rootScope.$on("userUpdate", function(event, user) {
          $scope.currentUser = user;
        });
        $scope.selectLesson = lesson => {
          userService.selectLesson(lesson);
        }
        $scope.selectTerm = term => {
          lesson.currentTerm = lesson.lessonDetails.terms.indexOf(term);
          userService.selectLesson(lesson)
        }

    }
  }
}

export default searchBar;
