import termEntryModalTemp from "./termEntryModal.html";

function termEntryModal() {
  return {
    restrict: "E"
    , replace: true
    , template: termEntryModalTemp
    , scope: {
        postTerm: "&"
    }
    , controller: function($state, $scope) {
        $scope.stateName = $state.current.name;
    }
  }
}

export default termEntryModal;
