import loginTemp from "./login.html";

function loginModal() {
  return {
    restrict: "E"
    , replace: true
    , template: loginTemp
    , scope: {
       hideModal: "&"
    }
    , controller: loginModalController
  }
}

function loginModalController($state, $scope) {
   $scope.stateName = $state.current.name;
}

loginModalController.$inject = ["$state", "$scope"]
export default loginModal;
