// browser loads html > browser loads js > open the dialog > 
// user closes dialog > audio system loads > user clicks sound button
// find our dialog
const introDialog = document.getElementById("intro-dialog");
// find the close button
const introDialogCloseButton = document.getElementById("intro-dialog-close")
// show the found element in our browser console
// console.log(introDialog);
//find the button
const testButton = document.getElementById('test-button');
// find my key button
const key = document.getElementById("key-test")
// 
//init our synth
// change this to ply synth
const synth = new Tone.PolySynth();
// is the user currently holding down the key
let mousebuttonHeld = false;
// if user holds down key, set to true, then if they let it up, set to false
window.addEventListener("mousedown", function(){
    mouseButtonHeld = true;
});
window.addEventListener("mouseup", function(){
    mouseButtonHeld = false;
});

////// Dialog
// show dialog on page
introDialog.showModal();
introDialogCloseButton.addEventListener("click", function closeIntroDialog(){
    introDialog.close();
});
// whenever dialog closes, initialise the audio system
introDialog.addEventListener("close", toneInit);

// put the function code inside the dialog code.
//function closeIntroDialog(){
//    introDialog.closest();
//};


/////// Tone
//run to setup our audio system
function toneInit(){
    synth.connect(Tone.Destination)
}

//do something when button was clicked
testButton.addEventListener("click", playNote);

//function that runs when button is clicked
function playNote(){
    //play a note for a duration
    synth.triggerAttackRelease("C4", "8n");
}

function playDataNoteD(e){
    let buttonClicked = e.target;
    // console.log(buttonClicked);
    let note = buttonClicked.dataset.note;
    // console.log(e.target);
    synth.triggerAttackRelease("d4", "8n");
}

function startNote(e){
    // find key that was pressed
    let keyPressed = e.target;
    // find the note associated with the key
    let note = keyPressed.dataset.note;
    synth.triggerAttack(note);
}

function endNote(){
    let keyPressed= e.target;
    let note = keyPressed.dataset.note;
    synth.triggerAttackRelease(note);
}

key.addEventListener("mousedown", startNote);
key.addEventListener("mouseup", endNote);
key.addEventListener("mouseleave", endNote);
// if user is holding mouse button down when entering the key, play note
key.addEventListener("mouseenter", function(e){
    if (mouseButtonHeld === true) {
        startNote(e);
    }
})

// key.addEventListener("click", playDataNote);
// testButton.addEventListener("click",playDataNote);