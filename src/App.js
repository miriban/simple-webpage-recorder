/*
  Import files
  */
function load_file(js_filename)
{
  js = document.createElement("script");
  js.src = js_filename;
  document.head.appendChild(js);
}
load_file("../src/Recorder.js");
load_file("../src/Player.js");
load_file("../src/Track.js");
load_file("../src/Frame.js");
/*
  Start Recording
*/
var recorder;
window.onload = function()
{
  recorder = new Recorder(document.location.href);
  recorder.record();
};
