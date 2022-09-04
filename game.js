document.addEventListener("DOMContentLoaded", function () {
  // Declare variables
  var start = document.getElementById("start");
  var end = document.getElementById("end");
  var boundaries = document.querySelectorAll(".boundary");
  var status = document.getElementById("status");
  var game = document.getElementById("game");
  var canPlay = true;

  //
  start.addEventListener("mouseover", resetBordersColor);
  boundaries.forEach((item) => item.addEventListener("mouseover", lostRound));
  end.addEventListener("mouseover", winRound);
});
