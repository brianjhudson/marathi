import modalTriggerTemp from "./trigger.html";

function modalTrigger() {
  return {
    restrict: "E"
    , replace: true
    , template: modalTriggerTemp
    , scope: {
      text: "@"
      , target: "@"
    }
   , controller: modalTriggerController
  }
}
function modalTriggerController($scope) {
   $scope.showModal = () => {
      $("#" + $scope.target + "-overlay").fadeIn()
      $("#" + $scope.target).fadeIn()
   }
}

modalTriggerController.$inject = ["$scope"]

export default modalTrigger;
