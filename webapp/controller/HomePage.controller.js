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

            this.getRouter().getRoute("homepage").attachPatternMatched(this._onRouteMatched, this);
        },

        _onRouteMatched: function (oEvent) {
            this.fnInitializeModels();
        },

        fnInitializeModels: function () {
            this.setModel(new JSONModel({}), "StaticModel");
        },

        fnNewGuestCheckIn: function () {
            var oView = this.getView();

            if (this.newCheckIn) {
                oView.byId("newCheckInDialog").setTitle("New Guest Check-in");
                oView.byId("slctBookingSource").setSelectedKey("WalkIn");
                oView.byId("slctBookingSource").setEditable(false);
                // oView.byId("dpStart").setDateValue(new Date());
                oView.byId("dpStart").setEditable(false);
                oView.byId("btnCheckIn").setVisible(true);
                oView.byId("btnClearDlg").setVisible(true);
                this.getModel("StaticModel").setProperty("/Guest", {});
            }
        },

        fnNewReservation: function () {
            var oView = this.getView();

            if (this.newCheckIn) {
                oView.byId("btnCheckIn").setVisible(true);
                oView.byId("btnClearDlg").setVisible(true);
                oView.byId("newCheckInDialog").setTitle("New Reservation");

                this.getModel("StaticModel").setProperty("/Guest", {});
            }
        },

        fnGetSelectedGuest: function (oEvent) {
            var oView = this.getView();
            var oSource = oEvent.getSource();
            var oRowBinding = oSource.getBindingContext("GuestModel").getObject();

            oView.byId("newCheckInDialog").setTitle("Guest Details");
            oView.byId("btnEditGuestDlg").setVisible(true);

            this.fnDisableDialogForms("newCheckIn");
            this.getModel("StaticModel").setProperty("/Guest", oRowBinding);
        },

        onPressCheckIn: function () {
            console.log(this.getModel("StaticModel").getProperty("/Guest"));
        },

        onPressEditGuest: function (oEvent, sDialog) {
            var oView = this.getView();

            this._oPreviousGuest = JSON.parse(JSON.stringify(this.getModel("StaticModel").getProperty("/Guest")));

            this[sDialog].then(function(oDialog) {
                var aContents = oDialog.getContent();

                aContents.forEach(function (oPanel) {
                    if (oPanel.getMetadata().getName() === "sap.m.Panel") {
                        oPanel.getContent().forEach(function (oForm) {
                            oForm.getContent().forEach(function(oField) {
                                if (oField.getEditable) {
                                    oField.setEditable(true);
                                }
                            });
                        }.bind(this));
                    }
                }.bind(this));
            });

            oView.byId("btnSaveGuestChange").setVisible(true);
            oView.byId("btnCancelChange").setVisible(true);
            oView.byId("btnEditGuestDlg").setVisible(false);
        },

        onPressCancelChange: function (sDialog) {
            var oView = this.getView();

            if (this._oPreviousGuest) {
                this.getModel("StaticModel").setProperty("/Guest", this._oPreviousGuest);
            }

            oView.byId("btnSaveGuestChange").setVisible(false);
            oView.byId("btnCancelChange").setVisible(false);
            oView.byId("btnEditGuestDlg").setVisible(true);

            this.fnDisableDialogForms(sDialog);
        }
    });
});
