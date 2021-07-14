const spreadInput = document.querySelector(".spread--input");
const spread = document.querySelector(".spread");
const output = document.querySelector(".output");
const copy = document.querySelector(".copy");
let textOutput;
spread.addEventListener("click", function () {
  textOutput = "";
  for (let i = 0; i < spreadInput.value.length; i++) {
    textOutput += spreadInput.value[i] + " ";
  }
  output.value = textOutput;
  // (used to have bug but it fixed it self somehow) console.log(textOutput.slice(0 - input.value.length));
});
copy.addEventListener("click", function () {
  output.select();
  output.setSelectionRange(0, 99999);
  document.execCommand("copy");
});
