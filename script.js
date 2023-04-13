var colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "pink",
  "brown",
  "gray",
  "black",
];

function changeColor() {
  var colorIndex = Math.floor(Math.random() * colors.length);
  var color = colors[colorIndex];
  var box = document.getElementById("box");
  box.style.backgroundColor = color;
}
