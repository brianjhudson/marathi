const userRoutes = require("./features/users/userRoutes")
    , lessonRoutes = require("./features/lessons/lessonRoutes");

module.exports = app => {
    userRoutes(app);
    lessonRoutes(app);
};
