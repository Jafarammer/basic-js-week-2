const data = [2, 25, 4, 14, 17, 30, 8];
const orderData = function (nilaiAwal, nilaiAkhir, dataArray) {
  if (nilaiAwal < nilaiAkhir) {
    const filtered = dataArray.filter(function (hasil) {
      return hasil > nilaiAwal && hasil < nilaiAkhir;
    });
    if (dataArray.length < 5) {
      console.log("Jumlah angka dalam array harus lebih dari 5");
    } else if (filtered == 0) {
      console.log("Nilai tidak ditemukan");
    } else {
      console.log(filtered);
    }
  } else if (nilaiAwal > nilaiAkhir) {
    console.log("Nilai akhir harus lebih besar dari nilai awal");
  } else {
    console.log("Data harus angka!");
  }
};
orderData(5, 20, data);
