import lessonEntryModalTemp from "./lessonEntryModal.html";

function lessonEntryModal() {
  return {
    restrict: "E"
    , replace: true
    , template: lessonEntryModalTemp
    , scope: {
        postLesson: "&"
    }
    , controller: function($state, $scope) {
        $scope.stateName = $state.current.name;
    }
  }
}

export default lessonEntryModal;
