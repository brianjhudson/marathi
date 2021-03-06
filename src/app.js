// Packages
import angular from "angular";
import uiRouter from "angular-ui-router";

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
import modalTrigger from "./directives/modalTrigger/trigger";
import modalTriggerTemp from "./directives/modalTrigger/trigger.html";
import lessonEntryModal from "./directives/lessonEntryModal/lessonEntryModal";
import lessonEntryModalTemp from "./directives/lessonEntryModal/lessonEntryModal.html";
import termEntryModal from "./directives/termEntryModal/termEntryModal";
import termEntryModalTemp from "./directives/termEntryModal/termEntryModal.html";
import lessonListDisplay from "./directives/lessonListDisplay/lessonListDisplay";
import lessonListDisplayTemp from "./directives/lessonListDisplay/lessonListDisplayTemp.html";
import lessonDisplay from "./directives/lessonDisplay/lessonDisplay";
import lessonDisplayTemp from "./directives/lessonDisplay/lessonDisplay.html";
import progressCircle from "./directives/progressIndicator/progressCircle";
import progressCircleTemp from "./directives/progressIndicator/progressCircle.html";
import termDisplay from "./directives/termDisplay/termDisplay";
import termDisplayTemp from "./directives/termDisplay/termDisplay.html";
import searchBar from "./directives/searchBar/searchBar";
import searchBarTemp from "./directives/searchBar/searchBar.html";
import check from "./directives/progressIndicator/check";
import checkTemp from "./directives/progressIndicator/check.html";
import fileread from "./directives/fileread/fileread";

// Views
import homeHtml from "./views/home.html";
import userHtml from "./views/user.html";

// Styles
import 'materialize-css/dist/css/materialize.min.css';
import "./main.scss";

angular.module( "marathiApp", [uiRouter])
.controller("mainController", mainController)
.service("lessonService", lessonService)
.controller("userController", userController)
.service("userService", userService)
.directive("navDirective", navDirective)
.directive("userSummary", userSummary)
.directive("loginModal", loginModal)
.directive("modalTrigger", modalTrigger)
.directive("lessonEntryModal", lessonEntryModal)
.directive("termEntryModal", termEntryModal)
.directive("lessonListDisplay", lessonListDisplay)
.directive("lessonDisplay", lessonDisplay)
.directive("progressCircle", progressCircle)
.directive("termDisplay", termDisplay)
.directive("searchBar", searchBar)
.directive("check", check)
.directive("fileread", fileread)
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
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
}])