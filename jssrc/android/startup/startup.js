//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "MediaController",
    appName: "MediaController",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "192.168.0.100",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "MediaController",
    isMFApp: false,
    eventTypes: ["FormEntry", "ServiceRequest", "Error", "Crash"],
    url: "https://mbaas-nightly15.qa-konycloud.com/MediaController/MWServlet",
    secureurl: "https://mbaas-nightly15.qa-konycloud.com/MediaController/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeFBox0dad10efc73664a();
    frmHomeGlobals();
    frmLoginGlobals();
    frmSelectMovieGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 7000
    })
};

function themeCallBack() {
    callAppMenu();
    initializeGlobalVariables();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmLogin.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes,
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;