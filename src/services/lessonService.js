function mainService($http) {
  this.postLesson = lesson => {
    return $http.post("/api/lessons", lesson).then(result => {
      return result;
    });
  }
}

export default mainService;
