const lessonCtrl = require("./lessonCtrl");

module.exports = app => {
  app.post("/api/lessons", lessonCtrl.postLesson);
  app.post("/api/terms", lessonCtrl.postTerm);
  app.get("/api/lesson/:id", lessonCtrl.getLessonById);
  app.get("/api/lessons", lessonCtrl.getLessons);
}
