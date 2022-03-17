// call this function to exit the app
function exitApp() {
    // this will clear the Ayoba instance 
    Ayoba.finish();
}

function getCountry() {
    var country = Ayoba.getCountry();
    document.getElementById("message").value = country
    return country
}