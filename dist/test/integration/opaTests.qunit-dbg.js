QUnit.config.autostart = false;

sap.ui.getCore().attachInit(() => {
	"use strict";

	sap.ui.require([
        "sap/ui/demo/walkthrough/localService/mockserver",
        "sap/ui/demo/walkthrough/test/integration/NavigationJourney"
	], (mockserver) => {
        // initialize the mock server
        mockserver.init();
        QUnit.start();
	});
});