function userService($http, $rootScope, lessonService) {
    this.currentUser = {loggedIn: false, selectedLesson: {currentTerm: 0, terms: []}};
    let lessonSelected = false;

    this.getUser = () => {
      return $http.get("/user").then(response => {
        if (response.data) {
          this.currentUser = response.data;
          this.currentUser.loggedIn = true;
          // Populate details for lessons
          // This allows users to customize each lesson -- but requires a second call to original lessons
          for (let i = 0; i < this.currentUser.lessons.length; i++) {
            //Set selected lesson
            if (!lessonSelected && this.currentUser.lessons[i].completed == false) {
              this.currentUser.selectedLesson = this.currentUser.lessons[i];
              lessonSelected = true;
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

    this.selectLesson = (lesson) => {
      this.currentUser.selectedLesson = lesson;
      $rootScope.$emit("userUpdate", this.currentUser)
      return $http.put("/api/users/select", {id: lesson._id}).then(result => {
        return result;
      })
    }

    this.setCurrentTerm = term => {
      for (let i = 0; i < this.currentUser.lessons.length; i++) {
        if (term.lesson === this.currentUser.lessons[i]._id) {
          this.currentUser.selectedLesson = this.currentUser.lessons[i];
          this.currentUser.selectedLesson.currentTerm = i;
          break;
        }
      }
      this.saveUserLesson(this.currentUser.selectedLesson).then(result => {
        return result;
      })

    }

    this.saveUserLesson = (lesson) => {
      // Update selected Lesson
      this.currentUser.selectedLesson = lesson;
      const lessonObj = {
        id: lesson._id
        , completed: lesson.completed
        , score: lesson.score
        , currentTerm: lesson.currentTerm;
      };

      // Update lesson in this.currentUser
      for (let i = 0; i < this.currentUser.lessons.length; i++) {
        if (this.currentUser.selectedLesson._id === this.currentUser.lessons[i]._id) {
          this.currentUser.lessons[i] = this.currentUser.selectedLesson;
          break;
        }
      }
      $rootScope.$emit("userUpdate", this.currentUser);
      return $http.put("/api/users/save", lessonObj).then(result => {
        return result;
      })
    }
}

export default userService;
