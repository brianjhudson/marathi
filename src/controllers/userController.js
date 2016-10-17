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
    console.log(lesson);
    console.log($scope);
    lesson.author = $scope.currentUser._id;
    lessonService.postLesson(lesson).then(result => {
      return result;
    })
  }

  init();

}

export default userController;
