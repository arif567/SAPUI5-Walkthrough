sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
], function(Controller,
	MessageToast,
	Fragment
	) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel",{

        onShowHello : function() {
            MessageToast.show("Hello World");
        },
        onOpenDialog : function (){
            // create dialog lazily 

            if(!this.pDialog){
                this.pDialog = this.loadFragment({

                    name : "sap.ui.demo.walkthrough.view.HelloDialog"

                });
            }
            this.pDialog.then(function(oDialog){
                oDialog.open();

            });
        },

        onCloseDialog : function () {
            this.byId("helloDialog").close();
        }

       

      

        

    });


    
    
});