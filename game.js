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

  // Functions
  function resetBordersColor() {
    boundaries.forEach((item) => {
      item.style.border = "1px solid black";
      status.innerHTML =
        'Try to reach the end "E" without touching the borders.';
    });
    canPlay = true;
  }

  function winRound() {
    if (canPlay) {
      boundaries.forEach((item) => {
        item.style.border = "1px solid green";
      });
      status.innerHTML =
        'You win! Move your mouse over the "S" to play another round.';
      canPlay = false;
    }
  }

  function lostRound() {
    if (canPlay) {
      boundaries.forEach((i) => (i.style.border = "1px solid red"));
      status.innerHTML =
        'You lost! Move your mouse over the "S" to play another round.';
      canPlay = false;
    }
  }
});
