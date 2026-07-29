//find the button
const testButton = document.getElementById('test-button')

//init our synth
const synth = new Tone.Synth().toDestination();

//do something when button was clicked
testButton.addEventListener("click", playNote);

//function that runs when button is clicked
function playNote(){
    //play a note for a duration
    synth.triggerAttackRelease("C4", "8n");
}
