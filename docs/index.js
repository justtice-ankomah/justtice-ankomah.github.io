var fileEle = document.getElementById("fileEle");
var img = document.getElementById("img_two");
let video = document.getElementById('video');
var videoSource = document.getElementById('source');

/*
//===== READ TEXT FILES WITH THE FileReader.readAsText() ====
//
// the "change" event will be fired whenever a new file is selected
// the "e" below just contains the details of the event that was fired
fileEle.addEventListener("change", function(e) {
    // create a file reader object
    var fileReader = new FileReader();
    // readAsText() can only be used to read text files passed into the method 
    // So if I have the file justice.txt, and I have this wrote this in "Justice is my name"
    //it will read the file and return "Justice is my name" to the below "onload" fileReader event
    fileReader.readAsText(fileEle.files[0]);
    // when ever the fileReader is done reading a specific file, either it was read as:
    // readasText(), readAsDataURL() the "onload" event below will be fired automatically
    // it has a property called "result" which represent the content of the file that was read
    fileReader.onload = function() {
        // console the content of the text file that was readed
        console.log(fileReader.result);

        // or convert each line of of the text that was readed to an array and do something with it
        let allLines = fileReader.result.split('\n').map(function(eachTxtLine) {
            return eachTxtLine.split(',');
        });
        console.log(allLines);
    }
});
*/


/*
//===== READ IMAGE/AUDIO/VIDEO FILES WITH THE FileReader.readAsDataURL() ====
//
// the "change" event will be fired whenever a new file is selected
fileEle.addEventListener("change", function(e) {
    // create a file reader object
    var fileReader = new FileReader();
    // readAsDataURL() is used to convert image/audio/video sfiles to base64 encoding string that
    // represent the image/audio/video, it returns base64-encoding-string that looks like: for  image,audio,video respectively
    // data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QAyRXhpZgAATU0AKgAAAAgAAQE7AAIAAAAQAAAAG
    // data:audio/mpeg;base64,//vQRAABFIt+PmBDf7Kfj+e7BG/2FKH9AwEZ/sJ9P6CUEb+YQAASdNSgASuc6nEE
    // data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDJtcDQxaXNvbWF2YzEAAC4wbW9vdgAAAGxtdmhkAAAAANHqJx7
    fileReader.readAsDataURL(fileEle.files[0]);
    //onload
    fileReader.onload = function() {
        // console the base64-encoded-string
        console.log(fileReader.result);
        // when you choose an image file, assign the base64-encoded-string to below image-Element and it will be displayed in the browser 
        img.src = fileReader.result;

        // when you choose a video/audio file, assign the base64-encoded-string to below videoSource 
        // then adjust the video buffer and play it
        videoSource.setAttribute('src', fileReader.result);
        video.load();
        video.play();

    }
});

*/


//===== FILE OR FILELIST OBJECT
/*
Inside your html, to allow a user to pick a file from his computer, us an input tag with type="file" just as in the element
below, the "multiple" attribute will allow the user to select multiple files (it optional).
that "accept" attribute will only accept files with the indicated extensions
 <input type="file" id="fileEle" multiple accept=".png, .jpg, .gif, .webp, image/jpeg/ image/gif>

var fileEle = document.getElementById("fileEle");

// This "change" event will be fired whenever a new file is selected 
// on the <input type="file"> element
fileEle.addEventListener("change", function(evnt) {
    //When ever a file is selected the element returns a list of the selected filess
    // Get all the list of files the user has selected
    var allFiles = evnt.target.files;
    // Get the number of the selected file
    console.log(evnt.target.files.length);
    // loop through each single file
    for (var i = 0; i < allFiles.length; i++) {
        // get the file name
        console.log(allFiles[i].name);
        // get the file type
        console.log(allFiles[i].type);
        // get the fallFiles[i]le size
        console.log(allFiles[i].size);
        // get the fallFiles[i]le last modified date, it mainly in byte
        console.log(allFiles[i].lastModified);
    }
});
 */

let fileHandle;

async function getFile() {
    // open file picker
    [fileHandle] = await window.showOpenFilePicker();

    if (fileHandle.kind === 'file') {
        // run file code
    } else if (fileHandle.kind === 'directory') {
        // run directory code
    }

}