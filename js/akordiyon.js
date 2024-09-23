var acordion = document.getElementsByClassName("accordion");

var i;
var len = acordion.length;
for (i = 0; i < len; i++) {
  acordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panal = this.nextElementSibling;
    if (panal.style.maxHeight) {
      panal.style.maxHeight = null;
    } else {
      panal.style.maxHeight = panal.scrollHeight + "px";
    }
  });
}
