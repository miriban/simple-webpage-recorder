/**
 * Represents Recorder.
 * @constructor
 * @param {string} name - The name of the recording track
 */
function Recorder (name)
{
     this.track = new Track(name);
}

Recorder.prototype =
{
    constructor: Recorder,

    record:function()
    {
      add_mouse_move_listener_to_document(this.track);
      add_on_click_listener_to_document(this.track);
    },

    save:function()
    {
      console.log(JSON.stringify(this.track));
    }
}

/*
  helping functions
*/
function add_mouse_move_listener_to_document(track)
{
  document.onmousemove = function(event)
  {
    frame = new Frame(event, Frame.TYPE_MOUSE_MOVE);
    track.add_frame(frame);
  };
}

function add_on_click_listener_to_document(track)
{
  document.onclick = function(event)
  {
    frame = new Frame(event, Frame.TYPE_MOUSE_CLICK);
    track.add_frame(frame);
    /*
        You can actually send it using ajax from here
        We prevent from continuing just to show you the JSON data in logs
    */
    recorder.save();
    return false;
  };
}
