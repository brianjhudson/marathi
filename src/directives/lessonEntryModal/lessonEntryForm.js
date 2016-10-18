import lessonEntryFormTemp from "./lessonEntryForm.html";

function lessonEntryForm() {
  return {
    restrict: "E"
    , replace: true
    , template: lessonEntryFormTemp
    , scope: {
        postLesson: "&"
    }
  }
}

export default lessonEntryForm;
