
function myFunction() {
  var x = document.getElementById("mySelect");
  var i = x.selectedIndex;
  var b = x.value;
  console.log(x.value);
  document.getElementById("greeting").innerHTML = x.options[i].text;
  document.getElementById("postcard").style.backgroundImage = "url('img/" + b + "@2x.jpg')";
}
