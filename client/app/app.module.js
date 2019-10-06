import angular from "angular";
import appComponent from "./app.component";
import ComponentsModule from "./components/components";
import "bootstrap-css-only";

angular.module("app", [ComponentsModule.name]).component("app", appComponent);
