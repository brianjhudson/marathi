function userController($scope, userService, lessonService) {
  function init() {
    getUser();
    $scope.newLesson = {};
    $scope.newTerm = {};
    lessonService.getLessons().then(result => console.log(result.data))
    lessonService.getLessonById("58054c8edcba0f490c709c3f").then(result => console.log(result.data));
  }
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
