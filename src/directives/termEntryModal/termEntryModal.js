import termEntryModalTemp from "./termEntryModal.html";

function termEntryModal() {
  return {
    restrict: "E"
    , replace: true
    , template: termEntryModalTemp
    , scope: {
       hideModal: "&"
    }
    , controller: termEntryController
  }
}
function termEntryController($state, $scope, lessonService) {
   $scope.stateName = $state.current.name;
   $scope.newTerm = {};

   lessonService.getLessons().then(response => {
      $scope.lessons = response.data;
   });

   $scope.postTerm = term => {
      term.author = $scope.currentUser._id;
      term.language = "Marathi";

      lessonService.postTerm(term).then(result => {
      $scope.newTerm = {};
      // Insert toast            
      })
   }
   $scope.fadeOut = () => {
      $("#termEntryModal").fadeOut()
   }

}
termEntryController.$inject = ["$state", "$scope", "lessonService"]
export default termEntryModal;
