sap.ui.define([
    "./BaseController",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment",
    "sap/ui/model/json/JSONModel"
], function (BaseController, MessageToast, Fragment, JSONModel) {
    "use strict";

    return BaseController.extend("personal.patsy.hotel.controller.HomePage", {
        onInit: function () {
            var oGuestModel = new JSONModel();
            oGuestModel.loadData("model/guests.json");
            this.getView().setModel(oGuestModel, "GuestModel");
        },
    });
});
