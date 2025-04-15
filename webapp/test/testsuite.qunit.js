sap.ui.define(function () {
	"use strict";

	return {
		name: "QUnit test suite for the UI5 Application: personal.patsy.hotel",
		defaults: {
			page: "ui5://test-resources/personal/patsy/hotel/Test.qunit.html?testsuite={suite}&test={name}",
			qunit: {
				version: 2
			},
			sinon: {
				version: 1
			},
			ui5: {
				language: "EN",
				theme: "sap_horizon"
			},
			coverage: {
				only: "personal/patsy/hotel/",
				never: "test-resources/personal/patsy/hotel/"
			},
			loader: {
				paths: {
					"personal/patsy/hotel": "../"
				}
			}
		},
		tests: {
			"unit/unitTests": {
				title: "Unit tests for personal.patsy.hotel"
			},
			"integration/opaTests": {
				title: "Integration tests for personal.patsy.hotel"
			}
		}
	};
});
