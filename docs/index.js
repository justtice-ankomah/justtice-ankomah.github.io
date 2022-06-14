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

// function to get the user PhoneNumber
function getUserPhoneNumber() {
    console.log("getting phone number");
    // Call this to get the user phone Number
    // it returns a String
    var msisdn = Ayoba.getMsisdn();
    document.getElementById("myp").innerText = msisdn
}

// Function to get the user language
function getLanguage() {
    // Call this to get the 
    // Function to get the
    // it returns a String
    var languageCode = Ayoba.getLanguage();
    document.getElementById("language").innerText = languageCode;
}


getLanguage();
getCountry();
getUserPhoneNumber();

function hideProfile() {
    document.getElementById("profile_container").style.display = "none";
    // var chat = document.getElementById("chat_container").style.display = "block";

}

function hideChat() {
    document.getElementById("chat_container").style.display = "none";
    // var profile = document.getElementById("profile_container").style.display = "block";

}