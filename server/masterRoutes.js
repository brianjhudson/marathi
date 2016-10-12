const userRoutes = require("./features/users/userRoutes");

module.exports = app => {
    userRoutes(app);
};
