import angular from "angular";
import uiRouter from "angular-ui-router";
import angularMaterialize from "angular-materialize";

import loginHtml from "./features/users/login.html";
import userController from "./features/users/userController";
import userService from "./features/users/userService";
import mainController from "./mainController";
import mainService from "./mainService";

angular.module( "marathiApp", [uiRouter, angularMaterialize] )
.controller("mainController", mainController)
.service("mainService", mainService)
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state("login", {
			controller: "userController"
			, url: "/"
			, template: loginHtml
		})

		// .state( "draft", {
		// 	controller: "draftCtrl"
		// 	, url: "/draft/:email"
		// 	, templateUrl: "./src/templates/draft.html"
		// } )
		// .state( "contacts", {
		// 	controller: "contactsCtrl"
		// 	, url: "/contacts"
		// 	, templateUrl: "./src/templates/contacts.html"
		// } );

	$urlRouterProvider.otherwise( "/" );
} );
