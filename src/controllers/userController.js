function userController($scope, userService) {
  function init() {
    getUser();
  }
  function getUser() {
    userService.getUser().then(response => {
      console.log(response);
      $scope.user = response.data;
    })
  }

  init();

}

export default userController;
