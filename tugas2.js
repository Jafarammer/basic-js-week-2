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
  const filtered = arr.filter(function (hasil) {
    return hasil.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });
  if (filtered == 0) {
    return "Nama tidak ditemukan";
  } else {
    const temp = [];
    const al = filtered;
    for (let i = 0; i < 3; i++) {
      temp.push(al[i]);
    }
    return temp;
  }
};
console.log(filterItems(cariNama, "jafar"));
