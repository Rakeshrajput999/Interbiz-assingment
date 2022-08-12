import "./style.css";
document.querySelector("#app").innerHTML = `
  <h1>open console and type input</h1>

`;
var inp = document.getElementById("amount");
let submit = document.getElementById("submit");
console.log("input:", inp.value);
let logic = (input) => {
  const notes = [2000, 500, 200, 100, 50];
  const maxCount = {};
  if (input % 50 === 0) {
    let minCount = Math.floor(input / 50);
    for (let note of notes) {
      if (input >= note) {
        maxCount[note] = Math.floor(input / note);
        input = input % note;
      }
    }
    console.log("maximum :");
    for (let x in maxCount) {
      console.log(`${x} notes = ${maxCount[x]}`);
    }
    console.log("minimum : 50 notes", minCount);
  } else {
    console.log("invalid amount, cash less then 50rs in not available ");
  }
};
submit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("value:", inp.value);
  logic(inp.value);
});
