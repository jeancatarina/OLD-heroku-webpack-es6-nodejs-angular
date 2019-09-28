webpackJsonp([1,0],[
/* 0 */
/***/ function(module, exports) {

	import angular from "angular";
	import appComponent from "./app.component";
	import ComponentsModule from "./components/components";
	import "bootstrap-css-only";
	import "normalize.css";

	angular.module("app", [ComponentsModule.name]).component("app", appComponent);


/***/ }
]);