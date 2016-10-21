import checkTemp from "./check.html";

function check() {
  return {
    restrict: "E"
    , replace: true
    , template: checkTemp
    , scope: {
    }

  }
}

export default check;
