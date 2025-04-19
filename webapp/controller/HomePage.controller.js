sap.ui.define([
    "./BaseController",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment",
    "sap/ui/model/json/JSONModel"
], function (BaseController, MessageToast, Fragment, JSONModel) {
    "use strict";

    return BaseController.extend("personal.patsy.hotel.controller.HomePage", {
        onInit: function () {
            this.getRouter().getRoute("homepage").attachPatternMatched(this._onRouteMatched, this);
        },

        _onRouteMatched: function (oEvent) {
        },

        fnNewGuestCheckIn: function () {
            var oView = this.getView();

            if (this.newCheckIn) {
                oView.byId("newCheckInDialog").setTitle("New Guest Check-in");
                oView.byId("slctBookingSource").setSelectedKey("WalkIn");
                oView.byId("slctBookingSource").setEditable(false);
                oView.byId("dpStart").setDateValue(new Date());
                oView.byId("dpStart").setEditable(false);
            }
        },

        fnNewReservation: function () {
            var oView = this.getView();

            if (this.newCheckIn) {
                oView.byId("newCheckInDialog").setTitle("New Reservation");
            }
        }
    });
});
