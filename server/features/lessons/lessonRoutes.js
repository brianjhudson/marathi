const lessonCtrl = require("./lessonCtrl");

module.exports = app => {
  app.post('/api/lessons', lessonCtrl.postLesson);
}
