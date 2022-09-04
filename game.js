document.addEventListener("DOMContentLoaded", function () {
  // Declare variables
  var start = document.getElementById("start");
  var end = document.getElementById("end");
  var boundaries = document.querySelectorAll(".boundary");
  var status = document.getElementById("status");
  var game = document.getElementById("game");
  var canPlay = false;
  var score = 0;

  //
  printScore();
  printScoreInfo();
  start.addEventListener("mouseover", resetBordersColor);
  end.addEventListener("mouseover", winRound);
  boundaries.forEach((item) => item.addEventListener("mouseover", lostRound));
  game.addEventListener("mouseleave", cheatTry);
  start.addEventListener("click", scoreReset);

  // Functions
  function printScore(score) {
    var scoreText = document.createElement("p");
    scoreText.id = "score";
    scoreText.style.fontSize = "32px";
    text = document.createTextNode("Your score: " + score);
    scoreText.appendChild(text);
    game.insertAdjacentElement("beforebegin", scoreText);
  }

  function printScoreInfo() {
    var scoreInfo = document.createElement("p");
    scoreInfo.style.fontSize = "14px";
    textInfo = document.createTextNode(
      'Every win +5, Every lose -10, Press on "S" to reset.'
    );
    scoreInfo.appendChild(textInfo);
    game.insertAdjacentElement("beforebegin", scoreInfo);
  }

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
      score += 5;
      adjustScore();
    }
  }

  function lostRound() {
    if (canPlay) {
      boundaries.forEach((i) => (i.style.border = "1px solid red"));
      status.innerHTML =
        'You lost! Move your mouse over the "S" to play another round.';
      canPlay = false;
      score -= 10;
      adjustScore();
    }
  }

  function cheatTry() {
    status.innerHTML =
      "Don't try to take shortcuts! It's not fair. Move your mouse over the \"S\" to start over.";
    canPlay = false;
  }

  function scoreReset() {
    score = 0;
    adjustScore();
  }

  function adjustScore() {
    let sc = document.getElementById("score");
    sc.innerHTML = "Your score: " + score;
  }
});
