// Packages
import angular from "angular";
import uiRouter from "angular-ui-router";
import angularMaterialize from "angular-materialize";
import 'materialize-css/bin/materialize.js';

// Services
import lessonService from "./services/lessonService";
import userService from "./services/userService";

// Controllers
import mainController from "./controllers/mainController";
import userController from "./controllers/userController";

// Directives
import navDirective from "./directives/navbar/navDirective";
import navDirectiveTemp from "./directives/navbar/navDirective.html";
import userSummary from "./directives/userSummary/userSummary";
import userSummaryTemp from "./directives/userSummary/userSummary.html";
import loginModal from "./directives/loginModal/login";
import loginTemp from "./directives/loginModal/login.html";
import loginTrigger from "./directives/modalTrigger/trigger";
import loginTriggerTemp from "./directives/modalTrigger/trigger.html";
import lessonEntryForm from "./directives/lessonEntryModal/lessonEntryForm";
import lessonEntryFormTemp from "./directives/lessonEntryModal/lessonEntryForm.html";


// Views
import homeHtml from "./views/home.html";
import userHtml from "./views/user.html";

// Styles
import 'materialize-css/bin/materialize.css';
import "./main.scss";

angular.module( "marathiApp", [uiRouter, angularMaterialize])
.controller("mainController", mainController)
.service("lessonService", lessonService)
.controller("userController", userController)
.service("userService", userService)
.directive("navDirective", navDirective)
.directive("userSummary", userSummary)
.directive("loginModal", loginModal)
.directive("loginTrigger", loginTrigger)
.directive("lessonEntryForm", lessonEntryForm)
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
