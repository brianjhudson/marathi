// Packages
import angular from "angular";
import uiRouter from "angular-ui-router";
import angularMaterialize from "angular-materialize";
require("materialize-loader");

// Services
import mainService from "./services/mainService";
import userService from "./services/userService";

// Controllers
import mainController from "./controllers/mainController";
import userController from "./controllers/userController";

// Views
import homeHtml from "./views/home.html";
import loginHtml from "./views/login.html";
import userHtml from "./views/user.html"

// Directives
import navDirective from "./directives/navDirective"
import navDirectiveTemp from "./directives/navDirective.html"

angular.module( "marathiApp", [uiRouter, angularMaterialize] )
.controller("mainController", mainController)
.service("mainService", mainService)
.controller("userController", userController)
.service("userService", userService)
.directive("navDirective", navDirective)
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state("home", {
			controller: mainController
			, url: "/"
			, template: homeHtml
		})

		.state("login", {
			controller: userController
			, url: "/login"
			, template: loginHtml
		})

		.state("user", {
			controller: userController
			, url: "/user"
			, template: userHtml
		})

	$urlRouterProvider.otherwise("/");
} );
