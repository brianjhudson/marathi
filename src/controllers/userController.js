function userController($scope, $rootScope, userService) {
  function init() {
    $scope.selectedLesson = {}
    $scope.currentUser = userService.currentUser;
    $rootScope.$on("userUpdate", function(event, data) {
      $scope.currentUser = data;
      // Set seleted Lesson and load lesson list display
      console.log($scope.currentUser);
    });
    getUser();
  }

  function getUser() {
    userService.getUser().then(response => {
      if(response) {
        $scope.currentUser = response;
      }
    })
  }

  init();

}

export default userController;
