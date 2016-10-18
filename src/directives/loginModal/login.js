import loginTemp from "./login.html";

function loginModal() {
  return {
    restrict: "E"
    , replace: true
    , template: loginTemp
    , scope: {}
  }
}

export default loginModal;
