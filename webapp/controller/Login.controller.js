sap.ui.define(
	["./BaseController", "sap/m/MessageBox"],
	function (BaseController, MessageBox) {
		"use strict";

		return BaseController.extend("personal.patsy.hotel.controller.Login", {
			onInit: function () {

			},

			sayHello: function () {
				MessageBox.show("Hello World!");
			},
		});
	}
);
