function userController($scope, userService) {
  function init() {
    getUser();
  }
  function getUser() {
    userService.getUser().then(response => {
      console.log("Getting User...");
      console.log(response);
      if(response.data) {
        $scope.user = response.data;
        $scope.loggedIn = true;
      } else {
        $scope.loggedIn = false;
        $scope.guest = true;
      }
    })
  }

  init();

}

export default userController;
