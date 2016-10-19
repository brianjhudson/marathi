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
      }
    })
  }

  init();

}

export default userController;
