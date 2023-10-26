sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/Device"
], function(UIComponent,JSONModel,ResourceModel,Device) {
    'use strict';

    return UIComponent.extend("sap.ui.demo.walkthrough.Component",{

        metadata : {
            "interfaces": ["sap.ui.core.IAsyncContentCreation"],
            manifest: "json"
        },

        /**
         * @override
         */
        init: function() {
            UIComponent.prototype.init.apply(this, arguments);

            // set data model 
            var oData = {
                recipient :{
                    name : "world"
                }
            };

            var oModel =new JSONModel(oData);
            this.setModel(oModel);

            var i18nModel =new ResourceModel({
                bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
            });

            this.setModel(i18nModel,"i18n");

            //set device Model 

            const oDeviceModel = new JSONModel(Device);

            oDeviceModel.setDefaultBindingMode("OneWay");
            this.setModel(oDeviceModel,"device");





            /// create the views based on the url.has

            this.getRouter().initialize();
            
        
        },
        getContentDensityClass(){
            return Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact";

        }

    });

    
});