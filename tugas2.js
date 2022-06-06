const cariNama = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];

const filterItems = (arr, query) => {
  return arr.filter(
    (param) => param.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
};
const al = filterItems(cariNama, "o");
const temp = [];
for (let i = 0; i < 3; i++) {
  temp.push(al[i]);
}
console.log(temp);
