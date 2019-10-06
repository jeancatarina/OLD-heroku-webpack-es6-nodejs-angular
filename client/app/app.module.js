import angular from "angular";
import appComponent from "./app.component";
import ComponentsModule from "./components/components";
import "bootstrap-css-only";

console.log(process.env.NODE_ENV);

angular.module("app", [ComponentsModule.name]).component("app", appComponent);
