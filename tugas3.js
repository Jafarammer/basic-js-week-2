const data = [2, 25, 4, 14, 17, 30, 8];
function orderData(nilaiAwal, nilaiAkhir, dataArray) {
  if (nilaiAwal < nilaiAkhir) {
    if (dataArray.length > 5) {
      const filtered = dataArray.filter(
        (y) => y >= nilaiAwal && y <= nilaiAkhir
      );
      console.log(filtered);
    } else if (dataArray.length < 5) {
      console.log("Data array harus lebih dari 5");
    } else {
      console.log("Nilai kosong");
    }
  } else {
    console.log("Nilai akhir harus lebih besar dari nilai awal");
  }
}

orderData(5, 20, data);
