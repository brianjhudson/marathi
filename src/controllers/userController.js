function userController($scope, userService, lessonService) {
  function init() {
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
