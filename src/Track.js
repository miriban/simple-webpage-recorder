/**
 * Represents a Track Object.
 * @constructor
 * @param {string} name - the name of the track
 */
function Track(name)
{
  this.name = name;
  this.frames = [];

  this.add_frame = function(frame)
  {
    if(frame instanceof Frame)
    {
      this.frames.push(frame);
    }
    else
    {
      console.error("Unknown Object Type! make sure that you pass a Frame Object to addFrame function");
    }
  }
}
