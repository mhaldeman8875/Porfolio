
window.onload = function () {
  var img = new Image();
  img.src = 'my_imgs/tagline.png';

  img.onload = function () {
    // CREATE CANVAS CONTEXT.
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;

    ctx.drawImage(img, 0, 0);  // DRAW THE IMAGE TO THE CANVAS.
    }
}