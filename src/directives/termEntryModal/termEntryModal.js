import termEntryModalTemp from "./termEntryModal.html";

function termEntryModal() {
  return {
    restrict: "E"
    , replace: true
    , template: termEntryModalTemp
    , scope: {}
    , controller: function($state, $scope, lessonService) {
        $scope.stateName = $state.current.name;
        $scope.newTerm = {};

        lessonService.getLessons().then(response => {
          $scope.lessons = response.data;
        });

        $scope.postTerm = term => {
          term.author = $scope.currentUser._id;
          term.language = "Marathi";

          lessonService.postTerm(term).then(result => {
            $scope.newTerm = {};
            return result;
          })
        }

    }
  }
}

export default termEntryModal;
