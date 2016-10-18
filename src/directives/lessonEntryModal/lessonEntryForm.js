import lessonEntryFormTemp from "./lessonEntryForm.html";

function lessonEntryForm() {
  return {
    restrict: "E"
    , replace: true
    , template: lessonEntryFormTemp
    , scope: {
        postLesson: "&"
    }
    , controller: function($state, $scope) {
        $scope.stateName = $state.current.name;
    }
  }
}

export default lessonEntryForm;
