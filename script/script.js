document.getElementById('slide').onmousemove = function(event) {
  var x = event.offsetX;
  console.log(x);
  document.getElementById('two').style.width = x + 'px';
}
document.getElementById('slide').onmouseleave = function() {
  document.getElementById('two').style.width = '361px';
}