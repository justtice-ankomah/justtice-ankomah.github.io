declare Ayoba = getAyoba()

/**
 * Determine the mobile operating system and returns the
 * proper javascript interface 
 * And get the instance of Ayoba and use it to call it other methods like Ayoba.xxx()
 */
function getAyoba() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return null;
    }

    if (/android/i.test(userAgent)) {
        return Android;
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return [
                'iPad Simulator',
                'iPhone Simulator',
                'iPod Simulator',
                'iPad',
                'iPhone',
                'iPod'
            ].includes(navigator.platform)
            // iPad on iOS 13 detection
            ||
            (navigator.userAgent.includes("Mac") && "ontouchend" in document);
    }

    return "unknown";
}