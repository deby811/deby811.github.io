mchanged = "false";

currentImage = document.getElementById("CurrentImage");
Imagedescription = document.getElementById("desc");
imagevar = 1;
firstimage = "vaadhoo.jpg";
secondimage = "tempio.jpg";

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

function LeftImage() {
	if (imagevar != 1) {
	imagevar -= 1;
	}
	
	if (imagevar == 1)
	{
		currentImage.src = firstimage;
		currentImage.style.height = "401px";
		currentImage.style.width = "600px";
		Imagedescription.innerHTML = "Chi non vorrebbe vivere la propria storia nella spiaggia di Vaadhoo?";
	}
}

function RightImage() {
	if (imagevar != 2) {
	imagevar += 1;
	}
	
	if (imagevar == 2)
	{
		currentImage.src = secondimage;
		currentImage.style.height = "402px";
		currentImage.style.width = "600px";
		Imagedescription.innerHTML = "Il tempio di Vaithiswarankoil, dove poter trovare il destino";
	}
}