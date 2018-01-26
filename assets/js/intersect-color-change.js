/* global AFRAME */

/**
 * Change color if entity when intersected by raycaster.
 */
AFRAME.registerComponent('intersect-color-change', {
  init: function () {
    var el = this.el;
    var material = el.getComputedAttribute('material');
    var initialColor = material.color;
    var initialOpacity = material.opacity;

    // Set color using raycaster parent color.
    el.addEventListener('raycaster-intersected', function (evt) {
      var raycasterEl = evt.detail.el;
      /*var fingerColor = raycasterEl.parentNode.getComputedAttribute('material').color;*/
      el.setAttribute('material', 'src',  '#my-texture2');

    });

    // Reset color.
   /* el.addEventListener('raycaster-intersected-cleared', function (evt) {
	var textureSource = "images/myTexture2.png";
      el.setAttribute('material', 'src', "#my-texture");
      el.setAttribute('material', 'opacity', initialOpacity);
    });*/
  }
});
