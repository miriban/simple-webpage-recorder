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
      /*
          Do whatever you like with the data here!
          You can send it using ajax
      */
      data = JSON.stringify(this.track);
      player = new Player(data);
      player.play();
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
    recorder.save();
    // TODO remove this return once you change save
    console.error("Please remove 'return false' after dealing with recorder.save() function");
    return false;
  };
}
