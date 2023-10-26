sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
    
], function(
	Controller,
	JSONModel,
	formatter,
	Filter,
	FilterOperator
    
	

) {
    'use strict';
    
    return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList",{

        /**
         * @override
         */

        formatter: formatter,
        onInit: function() {
           const oViewModel = new JSONModel({
            currency: "EUR"
           });

           this.getView().setModel(oViewModel,"view");
            
           console.log("test");
        
        },
        onFilterInvoices(oEvent){

            const aFilter = [];
            const sQuery = oEvent.getParameter("query");

            if(sQuery){
                aFilter.push(new Filter("ProductName",FilterOperator.Contains, sQuery));

            }

            /// filter binding 

            const oList = this.byId("invoicesList");

            const oBinding = oList.getBinding("items");

            oBinding.filter(aFilter);

        },
        onPress(oEvent) {

            const oItem =oEvent.getSource();
            const oRouter = this.getOwnerComponent().getRouter();

            oRouter.navTo("detail",{
                invoicePath: window.encodeURIComponent(oItem.getBindingContext("invoice").getPath().substr(1))
            });

        }
    });
    
});