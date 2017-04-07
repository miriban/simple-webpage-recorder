/**
 * Represents Frame.
 * @constructor
 * @param {MouseEvent} event - MouseEvent Object
 * @param {string} type - Type of RecordingEvent
 */
 function Frame(event, type)
 {
   this.Y = event.clientX;
   this.X = event.clientY;
   this.type = type;
 }
 /*
     RecordingEvent static fields
 */
 Frame.TYPE_MOUSE_CLICK = "click";
 Frame.TYPE_MOUSE_MOVE = "move";
