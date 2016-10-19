function userService($http, $rootScope, lessonService) {
    this.currentUser = {loggedIn: false, selectedLesson: null};

    this.getUser = () => {
      return $http.get("/user").then(response => {
        if (response.data) {
          this.currentUser = response.data;
          this.currentUser.loggedIn = true;
          // Populate details for lessons
          // This allows users to customize each lesson -- but requires a second call to original lessons
          for (let i = 0; i < this.currentUser.lessons.length; i++) {
            //Set selected lesson
            if (!this.currentUser.selectedLesson && this.currentUser.lessons[i].completed == false) {
              this.currentUser.selectedLesson = this.currentUser.lessons[i];
            }
            lessonService.getLessonById(this.currentUser.lessons[i]._id).then(result => {
              this.currentUser.lessons[i].lessonDetails = result.data;
            })
          }

          $rootScope.$emit("userUpdate", this.currentUser);
        }
        return this.currentUser;
      })
    }

    this.saveUser = (user) => {
      this.currentUser = user;
      $rootScope.$emit("userUpdate", this.currentUser)
    }
}

export default userService;
