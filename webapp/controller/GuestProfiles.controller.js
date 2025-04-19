sap.ui.define([
    "./BaseController",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Sorter"
], function (BaseController, MessageToast, Fragment, JSONModel, Sorter) {
    "use strict";

    return BaseController.extend("personal.patsy.hotel.controller.GuestProfiles", {
        onInit: function () {
            var oGuestModel = new JSONModel();
            oGuestModel.loadData("model/guests.json");
            this.getView().setModel(oGuestModel, "GuestModel");
            
            this._bDescSort = false;
            
            this.getRouter().getRoute("GuestProfiles").attachPatternMatched(this._onRouteMatched, this);
        },

        _onRouteMatched: function (oEvent) {
            // Route matched logic can go here
        },

        onPressSortGuestProfiles: function () {
            var oTable = this.getView().byId("guestProfilesTable"),
                oBinding = oTable.getBinding("items");

            // Toggle sort order
            this._bDescSort = !this._bDescSort;
            var oSorter = new Sorter("fullName", this._bDescSort, false);
            oBinding.sort(oSorter);
        },
    });
});