/**
 * Represents Player.
 * @constructor
 * @param {string} data - JSON data from recorder
 */
function Player(data)
{
  this.data = data;

  this.play = function()
  {
    track = JSON.parse(this.data);
    var i;
    for(i=0; i<track.frames.length; i++)
    {
      if(track.frames[i].type == Frame.TYPE_MOUSE_MOVE)
      {
        make_div_at(track.frames[i].X, track.frames[i].Y, "red");
      }

      if(track.frames[i].type == Frame.TYPE_MOUSE_CLICK)
      {
        make_div_at(track.frames[i].X, track.frames[i].Y, "green");
      }
    }
  }

  function make_div_at(x, y, color)
  {
    div = document.createElement("div");
    div.style = "position:absolute;width:10px;height:10px;background:"+color+";margin-top:"+y+"px;margin-left:"+x+"px;top:0;left:0;";
    div.setAttribute("class", "recorder-point");
    document.body.appendChild(div);
  }
}
