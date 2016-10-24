import searchBarTemp from "./searchBar.html";

function searchBar() {
  return {
    restrict: "E"
    , replace: true
    , template: searchBarTemp
    , scope: {
    }
    , controller: function($scope, $rootScope, userService) {
        $scope.currentUser = userService.currentUser;
        $rootScope.$on("userUpdate", function(event, user) {
          $scope.currentUser = user;
        });
        $scope.selectLesson = lesson => {
          userService.selectLesson(lesson).then(result => {
            console.log(result);
          });
        }
        // $scope.selectTerm = term => {
        //   userService.setCurrentTerm(term).then(result => {
        //     console.log(result);
        //   })
        // }

    }
  }
}

export default searchBar;
