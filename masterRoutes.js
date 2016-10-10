const userRoutes = require("./features/users/userRoutes");

module.exports = (app, passport) => {
    userRoutes(app, passport);
}
