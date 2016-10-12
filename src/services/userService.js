function userService($http) {
    this.getUser = function() {
      return $http.get("").then(response => {
        console.log(response);
        return response;
      })
    }

}

export default userService;
