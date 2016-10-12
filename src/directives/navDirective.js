import navDirectiveTemp from "./navDirective.html";

function navDirective($location) {
  return {
    restrict: "E"
    , template: navDirectiveTemp
    , scope: {
        logggedIn: "="
    }
  }
}

export default navDirective;
