function userController($scope, $rootScope, userService) {
  function init() {
    $scope.currentUser = userService.currentUser;
    $rootScope.$on("userUpdate", function(event, user) {
      $scope.currentUser = user;
    });
    getUser();
  }

  function getUser() {
    userService.getUser().then(response => {
      if(response) {
        $scope.currentUser = response;
        // let testLesson = response.lessons[0];
        // testLesson.score = 80;
        // testLesson.completed = true;
        // testLesson.currentTerm = 3;
        // userService.selectLesson(testLesson);
        // userService.saveUserLesson(testLesson);
      }
    })
  }
   $scope.showModal = (target) => {
      $("#" + target + "-overlay").fadeIn()
      $("#" + target).fadeIn()
   }
   $scope.hideModal = (target) => {
      $("#" + target + "-overlay").fadeOut()
      $("#" + target).fadeOut()
   }

  init();

}

userController.$inject = ['$scope', '$rootScope', 'userService']
export default userController;
// angular.module('marathiApp').controller('userController', userController)
