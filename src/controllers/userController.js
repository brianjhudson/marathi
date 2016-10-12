function userController($scope, userService) {
  function init() {
    getUser();
  }
  function getUser() {
    console.log("Getting User...");
    userService.getUser().then(response => {
      console.log("Saving user..");
      console.log(response.data);
      if(response.data) {
        $scope.user = response.data;
        $scope.loggedIn = true;
      } else {
        $scope.loggedIn = false;
        $scope.guest = true;
      }
      console.log("User: ", $scope.user);

    })
  }

  init();

}

export default userController;
