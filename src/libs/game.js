function preLoadImg(src , callback){
  var img = new Image();
  img.src = src;
  img.onload = function(){
    callback.call(img);
  }
}