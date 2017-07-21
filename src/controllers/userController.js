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

  init();

}

userController.$inject = ['$scope', '$rootScope', 'userService']
export default userController;
// angular.module('marathiApp').controller('userController', userController)
