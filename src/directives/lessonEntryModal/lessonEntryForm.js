import lessonEntryFormTemp from "./lessonEntryForm.html";

function lessonEntryForm() {
  return {
    restrict: "E"
    , replace: true
    , template: lessonEntryFormTemp
    , scope: {}
  }
}

export default lessonEntryForm;
