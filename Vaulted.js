function show() {
  // Vault Message
  const message =
    "You have received this message because you have been chosen to open an important vault.";
  // Dialog display box promt the user as chosen
  alert(message);

  // The Vault Combination number using a unique arithmetic operator(+-*/).
  const comb1 = 5 + 5; // First Code calculation using addition (+)
  const comb2 = 10 * 4; // Second Code calculation using multiplication (*)
  const comb3 = 81 - 42; // Third Code calculation using subtraction (-)

  //user interact with code combinations
  const enterComb1 = prompt("Enter code 1:");
  const enterComb2 = prompt("Enter code 2:");
  const enterComb3 = prompt("Enter code 3:");
  //If code is entered right
  if (enterComb1 == comb1 && enterComb2 == comb2 && enterComb3 == comb3) {
    document.getElementById("img2").style.display = "block";
    alert("Congrats!");
  }
  //If it's wrong message dialog box display will says no
  else {
    alert("No no vaulty for you!");
  }
}