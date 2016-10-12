function userService($http) {
    this.getUser = function() {
      return $http.get("/user").then(response => {
        console.log("Returning user...");
        console.log(response);
        return response;
      })
    }

}

export default userService;
