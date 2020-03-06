mchanged = "false";

function OpenMenuTab(mx) {
  if (mchanged == "true") {
  mx.classList.toggle("change");
  document.getElementById("header").style.display = 'none';
  mchanged = "false";
  } else {
  mx.classList.toggle("change");
  document.getElementById("header").style.display = 'block';
  mchanged = "true";
  }
}