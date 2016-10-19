function userService($http, $rootScope) {
    this.currentUser = {loggedIn: false, selectedLesson: {}};

    this.getUser = () => {
      return $http.get("/user").then(response => {
        if (response.data) {
          this.currentUser = response.data;
          this.currentUser.loggedIn = true;
          // Set selectedLesson to first incomplete lesson and emit again
          for (let i = 0; i < this.currentUser.lessons.length; i++) {
            if (this.currentUser.selectedLesson == {} && this.currentUser.lessons[i].completed == false) {
              this.currentUser.selectedLesson = this.currentUser.lessons[i];
            }
            break;
          }
          $rootScope.$emit("userUpdate", this.currentUser);

        }
        return this.currentUser;
      })
    }
}

export default userService;
