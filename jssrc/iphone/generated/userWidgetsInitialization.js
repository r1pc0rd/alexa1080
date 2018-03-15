function initializeUserWidgets() {
    kony.mvc.registry.add("com.konymp.login", "login", "loginController");
    kony.application.registerMaster({
        "namespace": "com.konymp",
        "classname": "login",
        "name": "com.konymp.login"
    });
    kony.mvc.registry.add("com.konymp.slider", "slider", "sliderController");
    kony.application.registerMaster({
        "namespace": "com.konymp",
        "classname": "slider",
        "name": "com.konymp.slider"
    });
}