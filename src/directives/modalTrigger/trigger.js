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
  }
}

export default modalTrigger;
