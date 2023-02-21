// products.json dosyasını fetch ile al
fetch('products.json')
  .then(response => response.json()) // response'ı JSON'a dönüştür
  .then(data => {
    // tabloya sonuçları ekle
    const table = document.getElementById('product-table');
    // her bir ürün için bir satır oluştur
    data.forEach(urun => {
      const row = table.insertRow(); // satır ekle
      const idCell = row.insertCell(0); // ID hücresi ekle
      idCell.innerHTML = urun.id; // ID hücresinin içeriğini belirle
      const nameCell = row.insertCell(1); // İsim hücresi ekle
      nameCell.innerHTML = urun.productName; // İsim hücresinin içeriğini belirle
      const amountCell = row.insertCell(2); // Miktar hücresi ekle
      amountCell.innerHTML = urun.productAmount; // Miktar hücresinin içeriğini belirle
    });
  })
  .catch(error => console.log(error)); // Hata varsa konsola yazdır