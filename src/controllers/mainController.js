function mainController($scope, $rootScope, userService) {
  $scope.currentUser = userService.currentUser;
  $rootScope.$on("userUpdate", function(event, data) {
    $scope.currentUser = data;
  })
  $scope.showModal = target => {
     $("#" + target + "-overlay").fadeIn()
     $("#" + target).fadeIn().css('top', '20vh')

  }
  $scope.hideModal = target => {
     $("#" + target + "-overlay").fadeOut()
     $("#" + target).fadeOut()
  }
}

mainController.$inject = ['$scope', '$rootScope', 'userService']

export default mainController;
// angular.module("marathiApp").controller('mainController', mainController)