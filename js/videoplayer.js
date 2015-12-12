
var currentvid=0;

$(function() {
  var canvas = document.getElementById('canvasVideo');
  var ctx = canvas.getContext('2d');
  var video = document.getElementById('video');
  
	// set canvas size = video size when known
	video.addEventListener('loadedmetadata', function() {
	  canvas.width = video.videoWidth;
	  canvas.height = video.videoHeight;
	}); 
    
	var classname = document.getElementsByClassName("videos");
  
	for(var i=0;i<classname.length;i++){
	    classname[i].addEventListener('play', function() {
		if(currentvid != 0 && $(this).attr('id') !=$(currentvid).attr('id')){
			document.getElementById($(currentvid).attr('id')).pause();  
		}  
	    var $this = this; //cache
	    currentvid = $this;
	    (function loop() {
	      if (!$this.paused && !$this.ended) {
	        ctx.drawImage($this, 0, 0);
	        setTimeout(loop, 1000 / 30); // drawing at 30fps
	      }
	    })();
	  }, 0);
	}
});