const userRoutes = require("./features/users/userRoutes")
const lessonRoutes = require("./features/lessons/lessonRoutes");
const amazonRoutes = require("./features/amazon/amazonRoutes");


module.exports = app => {
    userRoutes(app);
    lessonRoutes(app);
    amazonRoutes(app);
};
