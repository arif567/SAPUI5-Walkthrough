sap.ui.define([
    "../localService/mockserver"
], function(mockserver) {
    'use strict';

    /// initialize the mock server 

    mockserver.init();
    sap.ui.require(["sap/ui/core/ComponentSupport"]);
    
});