function userService($http, $rootScope) {
    this.currentUser = {loggedIn: false};

    this.getUser = () => {
      return $http.get("/user").then(response => {
        if (response.data) {
          this.currentUser = response.data;
          this.currentUser.loggedIn = true;
          $rootScope.$emit("userUpdate", this.currentUser)
        }
        return this.currentUser;
      })
    }
}

export default userService;
