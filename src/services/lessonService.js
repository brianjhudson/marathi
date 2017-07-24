function lessonService($http, $rootScope) {
  this.storeImage = (imageData, fileName) => {
    console.log("Fired");
    var imageExtension = imageData.split(';')[0].split('/');
    imageExtension = imageExtension[imageExtension.length - 1];

    var newImage = {
      imageName: fileName,
      imageBody: imageData,
      imageExtension: imageExtension,
    }

    return $http.post('/api/lessonPhoto', newImage).then(result => result);
  };

  // this.postLesson = lesson => {
  //   return $http.post("/api/lessons", lesson).then(result => result);
  // }

  this.postTerm = term => {
    return $http.post("/api/terms", term).then(result => result);
  }

  this.getLessonById = id => {
    return $http.get("/api/lesson/" + id).then(result => result);
  }

  this.getLessons = () => {
    return $http.get("/api/lessons").then(result => result);
  }

  this.formatGuestLessons = (lessons) => {
    let userLessons = [];
    for (let i = 0; i < lessons.length; i++) {
      userLessons[i] = {lessonDetails: lessons[i]};
    };
    return userLessons;
  }
}
lessonService.$inject = ['$http', '$rootScope']
export default lessonService;