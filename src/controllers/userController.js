function userController($scope, $rootScope, userService) {
  function init() {
    getUser();
  }
  $rootScope.$on("userUpdate", function(event, data) {
    $scope.currentUser = data;
  });
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
