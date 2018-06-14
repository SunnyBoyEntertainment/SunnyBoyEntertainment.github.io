/* global AFRAME */

/**
 * Change color if entity when intersected by raycaster.
 */
AFRAME.registerComponent('intersect-color-change', {
  init: function () {
    var el = this.el;
	var frameTrigger = document.getElementById("FrameTrigger");
	var picture = document.getElementById("Frame");
    var material = el.getComputedAttribute('material');


    // Set color using raycaster parent color.
    el.addEventListener('raycaster-intersected', function (evt) {
	 switch (evt.target) {
		case frameTrigger:
		picture.setAttribute('material', 'src',  '#photo1');
        break;


	 }
      var raycasterEl = evt.detail.el;
      /*var fingerColor = raycasterEl.parentNode.getComputedAttribute('material').color;*/
     // el.setAttribute('material', 'src',  '#photo2');

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
