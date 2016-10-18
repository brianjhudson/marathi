import termEntryModalTemp from "./termEntryModal.html";

function termEntryModal() {
  return {
    restrict: "E"
    , replace: true
    , template: termEntryModalTemp
    , scope: {}
    , controller: function($state, $scope) {
        $scope.stateName = $state.current.name;
        $scope.newTerm = {};
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
