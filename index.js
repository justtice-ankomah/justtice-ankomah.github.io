// call this function to exit the app
function exitApp() {
    // this will clear the Ayoba instance 
    Ayoba.finish();
}

// function to get the user Country in  ISO-3166
// Example, Ghana will be "Gh"
function getCountry() {
    // call this to get the user Country code
    // Ayoba will retrieve it (from phone number prefix)
    // it returns a String
    var countryCode = Ayoba.getCountry();
    document.getElementById("countryCode").innerText = countryCode
    return country
}

function getUserPhoneNumber() {
    // Call this to get the user phone Number
    // it returns a String
    var msisdn = Ayoba.getMsisdn();
    document.getElementById("number").innerText = msisdn
}


getCountry();
getUserPhoneNumber();