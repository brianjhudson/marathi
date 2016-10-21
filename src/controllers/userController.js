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
        let testLesson = response.lessons[0];
        testLesson.score = 80;
        testLesson.completed = true;
        testLesson.currentTerm = 3;
        userService.saveUserLesson(testLesson);
        userService.selectLesson(testLesson);
      }
    })
  }

  init();

}

export default userController;
