sap.ui.define([
    "./BaseController",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Sorter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (BaseController, MessageToast, Fragment, JSONModel, Sorter, Filter, FilterOperator) {
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

        onSearchGuestProfiles: function (oEvent) {
            var sQuery = oEvent.getParameter("query"),
                oTable = this.getView().byId("guestProfilesTable"),
                oBinding = oTable.getBinding("items"),
                aFilters = [];

            if (sQuery) {
                var oFilter = new Filter("fullName", FilterOperator.Contains, sQuery);
                aFilters.push(oFilter);
            }

            oBinding.filter(aFilters);
        }
    });
});