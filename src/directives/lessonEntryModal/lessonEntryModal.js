import lessonEntryModalTemp from "./lessonEntryModal.html";

function lessonEntryModal() {
  return {
    restrict: "E"
    , replace: true
    , template: lessonEntryModalTemp
    , scope: {
       hideModal: "&"
    }
    , controller: lessonEntryModalController
  }
}
function lessonEntryModalController($state, $scope, lessonService) {
   $scope.stateName = $state.current.name;
   $scope.newLesson = {};
   $scope.postLesson = lesson => {
      lesson.author = $scope.currentUser._id;
      lessonService.postLesson(lesson).then(result => {
      $scope.newLesson = {};
      return result;
      })
   };
}
lessonEntryModalController.$inject = ["$state", "$scope", "lessonService"]

export default lessonEntryModal;
