function lessonService($http, $rootScope) {
  this.postLesson = lesson => {
    return $http.post("/api/lessons", lesson).then(result => result);
  }

  this.postTerm = term => {
    return $http.post("/api/terms", term).then(result => result);
  }

  this.getLessonById = id => {
    return $http.get("/api/lesson/" + id).then(result => result);
  }

  this.getLessons = () => {
    return $http.get("/api/lessons").then(result => result);
  }

}
export default lessonService;
