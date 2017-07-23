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
   , controller: function($scope) {
      $scope.showModal = () => {
         $("#" + $scope.target + "-overlay").fadeIn()
         $("#" + $scope.target).fadeIn()
      }
   }
  }
}

export default modalTrigger;
