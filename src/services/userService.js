function userService($http, $rootScope, lessonService) {
    this.currentUser = {loggedIn: false, selectedLesson: {currentTerm: 0, terms: []}};
    this.lessonsCompleted = 0;

    this.getUser = () => {
      return $http.get("/user").then(response => {
        if (response.data) {
          this.currentUser = response.data;
          this.currentUser.loggedIn = true;
          for (let i = 0; i < this.currentUser.lessons.length; i++) {
            if (this.currentUser.lessons[i].completed === true) {
              this.lessonsCompleted++;
              this.currentUser.lessons[i].progress = 100;
            } else {
              this.currentUser.lessons[i].progress = Math.round(this.currentUser.lessons[i].currentTerm / this.currentUser.lessons[i].length * 100);
            }
            lessonService.getLessonById(this.currentUser.lessons[i]._id).then(result => {
              this.currentUser.lessons[i].lessonDetails = result.data;
            })
          }
          if (!this.currentUser.selectedLesson._id) {
            this.currentUser.selectedLesson = this.currentUser.lessons[0];
            console.log(this.currentUser.selectedLesson);
          }
          let lastLogin = new Date(this.currentUser.lastLogin).getTime();
          let today = new Date().getTime();
          let dateJoined = new Date(this.currentUser.dateJoined).getTime();
          if ((lastLogin - dateJoined) > 1000) this.currentUser.returning = true;
          if ((today - lastLogin) > (24 * 3600000) && (today - lastLogin) < (48 * 3600000)) {
            this.currentUser.dayStreak++;
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
        , currentTerm: lesson.currentTerm
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
