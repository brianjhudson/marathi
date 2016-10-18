import loginTriggerTemp from "./trigger.html";

function loginTrigger() {
  return {
    restrict: "E"
    , replace: true
    , template: loginTriggerTemp
    , scope: {}
  }
}

export default loginTrigger;
