import lessonListItemTemp from "./lessonListItemTemp.html";

function lessonListItem() {
  return {
    restrict: "E"
    , replace: true
    , transclude: true
    , template: lessonListItemTemp
    , scope: {
        lesson: "="
      }


  }
}
lessonListItem.$inject = []
export default lessonListItem;
