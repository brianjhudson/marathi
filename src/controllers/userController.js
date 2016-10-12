function userController($scope, userService) {
  userService.getUser().then(response => {
    console.log(response);
    $scope.user = response.data;
  });
}

export default userController;
