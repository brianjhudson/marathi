function mainController($scope, $rootScope, userService) {
  $scope.currentUser = userService.currentUser;
  $rootScope.$on("userUpdate", function(event, data) {
    $scope.currentUser = data;
  })

}

export default mainController;
