function lessonService($http) {
  this.postLesson = lesson => {
    return $http.post("/api/lessons", lesson).then(result => {
      return result;
    });
  }

  this.postTerm = term => {
    return $http.post("/api/terms", term).then(result => {
      return result;
    })
  }
}

export default lessonService;
