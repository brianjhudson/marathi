import loginTriggerTemp from "./trigger.html";

function loginTrigger() {
  return {
    restrict: "E"
    , replace: true
    , template: loginTriggerTemp
    , scope: {
      text: "="
      , target: "="
    }
  }
}

export default loginTrigger;
