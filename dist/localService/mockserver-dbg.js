sap.ui.define([
    "sap/ui/core/util/MockServer",
    "sap/base/util/UriParameters"
    
], function(
	MockServer,
	UriParameters) {
    'use strict';

    return{
        init: function(){

            const oMockServer = new MockServer({
                rootUri: sap.ui.require.toUrl("ui5/walkthrough") + "/V2/Northwind/Northwind.svc/"

            });

            const oUriParameters = new UriParameters(window.location.href);

            /// configure mock fserver with a delay 
            MockServer.config({
                autoRespond: true,
                autoResponseAfter: oUriParameters.get("serverDelay") || 500
            });

            /// simulate 

            const sPath = sap.ui.require.toUrl("ui5/walkthrough/localService");

            oMockServer.simulate(sPath+"/metadata.xml",sPath + "/mockdata");

            /// start 

            try{
                oMockServer.start();

            } catch(error){
                console.error("Error Starting MockServer" + error);
            }


        }

    };
    
});