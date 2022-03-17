// call this function to exit the app
function exitApp() {
    // this will clear the Ayoba instance 
    Ayoba.finish();
}

function getCountry() {
    alert("getting country");
    var countryCode = Ayoba.getCountry();
    document.getElementById("countryCode").innerText = countryCode
    return country
}

getCountry();