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
    , link: function(scope, element, attr) {

    }
    , controller: function($scope, userService) {
        $scope.selectLesson = (lesson) => {
          userService.selectLesson(lesson);
        }

    }

  }
}

export default lessonListItem;
