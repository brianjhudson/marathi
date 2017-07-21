const amazonCtrl = require("./amazonCtrl");

module.exports = app => {
    app.post("/api/lessonPhoto", amazonCtrl.postLessonPhoto);
}