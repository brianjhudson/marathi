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

  $scope.postTerm = term => {
    term.author = $scope.currentUser._id;
    term.language = "Marathi";
    lessonService.postTerm(term).then(result => {
      $scope.newTerm = {};
      return result;
    })
  }

  init();

}

export default userController;
