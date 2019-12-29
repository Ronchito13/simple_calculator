let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let answerInput = document.getElementById("answer");

function calc() {
  if (num1.value == "" || num2.value == "") {
    alert("must enter a number !");
    num1.value = "";
    num2.value = "";
    answer.value = "";
    return;
  }

  answerInput.value = parseInt(num1.value) + parseInt(num2.value);
}
