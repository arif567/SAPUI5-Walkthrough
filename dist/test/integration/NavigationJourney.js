sap.ui.define(["sap/ui/test/opaQunit","./pages/App"],e=>{"use strict";QUnit.module("Navigation");e("Should open the Hello dialog",(e,o,i)=>{e.iStartMyUIComponent({componentConfig:{name:"sap.ui.demo.walkthrough"}});o.onTheAppPage.iPressTheSayHelloWithDialogButton();i.onTheAppPage.iShouldSeeTheHelloDialog();i.iTeardownMyApp()})});
//# sourceMappingURL=NavigationJourney.js.map