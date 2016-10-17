function userController($scope, userService, lessonService) {
  function init() {
    getUser();
  }
  $scope.newLesson = {};
  function getUser() {
    userService.getUser().then(response => {
      if(response) {
        $scope.currentUser = response;
      }
    })
  }

  $scope.postLesson = lesson => {
    lesson.author = $scope.currentUser._id;
    lessonService.postLesson(lesson).then(result => {
      $scope.newLesson = {};
      return result;
    })
  }

  $scope.postTerm = term => {
    lesson.author = $scope.currentUser._id;
    lessonService.postLesson(lesson).then(result => {
      $scope.newLesson = {};
      return result;
    })
  }

  init();

}

export default userController;
