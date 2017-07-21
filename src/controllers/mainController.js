function mainController($scope, $rootScope, userService) {
  $scope.currentUser = userService.currentUser;
  $rootScope.$on("userUpdate", function(event, data) {
    $scope.currentUser = data;
  })

}

mainController.$inject = ['$scope', '$rootScope', 'userService']

export default mainController;
// angular.module("marathiApp").controller('mainController', mainController)