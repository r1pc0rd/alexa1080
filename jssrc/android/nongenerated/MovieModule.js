//Type your code here
function onclickMovieName(a) {
    if (a == 1) movieNameVal = "Mad Max Fury Road";
    else if (a == 2) movieNameVal = "The Martian";
    else if (a == 3) movieNameVal = "Star Wars";
    else if (a == 4) movieNameVal = "Guardians of the Galaxy";
    else if (a == 5) movieNameVal = "Interstellar";
    else if (a == 6) movieNameVal = "Attack of the Herbals";
    else if (a == 7) movieNameVal = "Shoot Out";
    else if (a == 8) movieNameVal = "Prometheus";
    else if (a == 9) movieNameVal = "Serenity";
    showLdngScreen();
    afterCompletion();
}

function showLdngScreen() {
    kony.application.showLoadingScreen("blockedUISkn2", "Please wait....", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, null);
}

function afterCompletion() {
    kony.timer.schedule("mytimer12", timerFuncMS, 5, false);
}

function timerFuncMS() {
    kony.timer.cancel("mytimer12");
    kony.application.dismissLoadingScreen();
    displyAlrtFun();
}

function displyAlrtFun() {
    var pspConfig = {
        "iconPosition": constants.ALERT_CONTENT_ALIGN_LEFT,
        "contentAlignment": constants.ALERT_ICON_POSITION_CENTER
    };
    var alert = kony.ui.Alert({
        "message": "Streaming has started in " + playerNameVal,
        "alertType": constants.ALERT_TYPE_INFO,
        "alertTitle": movieNameVal,
        "yesLabel": "OK",
        "noLabel": "Cancel",
        "alertIcon": "notificationimg.png",
        "alertHandler": homeNavFun
    }, pspConfig);
}

function homeNavFun() {
    PushOperation();
    frmHome.show();
}