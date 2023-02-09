document.getElementById("settings").addEventListener("click", function(e) {
  e.preventDefault();
  document.querySelector(".popup").style.display = "block";
});

document.querySelector(".buttonclose").addEventListener("click", function() {
  document.querySelector(".popup").style.display = "none";
});
