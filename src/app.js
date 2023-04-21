import "../src/style.css";

window.onload = () => {
  document.getElementById("generate").addEventListener("click", () => {
    document.getElementById("excuse").innerHTML = generateExcuse();
  });
};

let generateExcuse = () => {
  let pronoun = ["My", "A", "The"];
  let subject = ["dog", "cat", "mom", "teacher", "driver"];
  let verb = ["ate my", "jumped on my", "ran on my", "took my", "stole my"];
  let possetion = ["food", "phone", "mug", "carpet", "car", "pencil"];
  let where = [
    "yesterday",
    "before the class",
    "on the street",
    "during the test"
  ];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subIndx = Math.floor(Math.random() * subject.length);
  let verbIndx = Math.floor(Math.random() * verb.length);
  let posIndx = Math.floor(Math.random() * possetion.length);
  let whereIndx = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndx] +
    " " +
    subject[subIndx] +
    " " +
    verb[verbIndx] +
    " " +
    possetion[posIndx] +
    " " +
    where[whereIndx]
  );
};
