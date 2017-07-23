import loginTemp from "./login.html";

function loginModal() {
  return {
    restrict: "E"
    , replace: true
    , template: loginTemp
    , scope: {
       hideModal: "&"
    }
    , controller: function($state, $scope) {
        $scope.stateName = $state.current.name;
    }
  }
}

export default loginModal;
