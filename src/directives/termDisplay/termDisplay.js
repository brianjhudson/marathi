import termDisplayTemp from "./termDisplay.html";

function termDisplay() {
  return {
    restrict: "E"
    , replace: true
    , template: termDisplayTemp
    , scope: {
        term: "="
    }
    , link: function(scope, element, attr) {
    }
    , controller: function($scope, $rootScope, userService) {
    }
  }
}

export default termDisplay;
