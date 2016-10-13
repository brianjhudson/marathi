// Packages
import angular from "angular";
import uiRouter from "angular-ui-router";
import angularMaterialize from "angular-materialize";
import 'materialize-css/bin/materialize.js';

// Services
import mainService from "./services/mainService";
import userService from "./services/userService";

// Controllers
import mainController from "./controllers/mainController";
import userController from "./controllers/userController";

// Directives
import navDirective from "./directives/navDirective";
import navDirectiveTemp from "./directives/navDirective.html";

// Views
import homeHtml from "./views/home.html";
import userHtml from "./views/user.html";

// Styles
import 'materialize-css/bin/materialize.css';
import "./main.scss";

angular.module( "marathiApp", [uiRouter, angularMaterialize])
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

		.state("user", {
			controller: userController
			, url: "/user"
			, template: userHtml
		})

	$urlRouterProvider.otherwise("/");
});
