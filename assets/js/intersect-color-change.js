/* global AFRAME */

/**
 * Change color if entity when intersected by raycaster.
 */
AFRAME.registerComponent('intersect-color-change', {
  init: function () {
    var el = this.el;
	var video = document.getElementById("orangeNun");
	var video2 = document.getElementById("blueNun");
	var orangeTrigger = document.getElementById("orangeTrigger");
	var blueTrigger = document.getElementById("blueTrigger");
    var material = el.getComputedAttribute('material');
    var initialColor = material.color;
    var initialOpacity = material.opacity;

    // Set color using raycaster parent color.
    el.addEventListener('raycaster-intersected', function (evt) {
	 switch (evt.target) {
		case orangeTrigger:
		video.setAttribute('src', '#nuns');
		video.play();
		video.setAttribute('visible', true);
		orangeTrigger.setAttribute('visible', false);
        break;

		case blueTrigger:
		video2.setAttribute('src', '#nuns');
		video2.play();
		video2.setAttribute('visible', true);
		blueTrigger.setAttribute('visible', false);
        break;

	 }
      var raycasterEl = evt.detail.el;
      /*var fingerColor = raycasterEl.parentNode.getComputedAttribute('material').color;*/
      el.setAttribute('material', 'src',  '#my-texture2');

	  console.log('Player hit something! ' + el.getAttribute("id"));

});

    // Reset color.
   /* 
AFRAME.registerComponent('collider-check', {
  dependencies: ['raycaster'],

  init: function () {
    var el = this.el;
	//var video = el.getAttribute('video');
    el.addEventListener('raycaster-intersected', function () {
      console.log('Player hit something! ' + el.getAttribute("id"));
	  el.setAttribute('video','src',  '#nuns');
	  el.play();
    });
  }
});
*/
  }
});
