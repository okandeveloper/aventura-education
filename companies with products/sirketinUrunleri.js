const companySelect = document.getElementById('company-select'); // HTML'de 'company-select' ID'sine sahip select elementini seç
const productList = document.getElementById('product-list'); // HTML'de 'product-list' ID'sine sahip ul elementini seç

// JSON dosyasından ürün verilerini al
fetch('products.json')
  .then(response => response.json()) // Alınan verileri JSON formatına çevir
  .then(data => {
    // Ürün verilerinden tüm şirket ID'lerini çıkar
    const companyIds = [...new Set(data.map(product => product.companyId))];
    
    // Şirket seçim dropdown'ını şirket ID'leri ile doldur
    companyIds.forEach(companyId => {
      const option = document.createElement('option'); // Yeni bir option elementi oluştur
      option.value = companyId; // Option elementinin value değerini şirket ID'si olarak ayarla
      option.textContent = `Şirket ${companyId}`; // Option elementinin görüntülenen metnini "Company [şirket ID'si]" olarak ayarla
      companySelect.appendChild(option); // Option elementini şirket seçim dropdown'ına ekle
    });
    
    // Şirket seçim dropdown'ındaki değişiklikleri dinle
    companySelect.addEventListener('change', () => {
      const selectedCompanyId = parseInt(companySelect.value); // Seçilen şirket ID'sini tamsayıya dönüştür ve sakla
      
      // Ürün verilerini sadece seçilen şirketin ürünlerini içerecek şekilde filtrele
      const products = data.filter(product => product.companyId === selectedCompanyId);
      
      // Ürün listesindeki mevcut öğeleri temizle
      productList.innerHTML = '';
      
      // Ürün listesini seçilen şirketin ürünleri ile doldur
      products.forEach(product => {
        const li = document.createElement('li'); // Yeni bir li elementi oluştur
        li.innerHTML = `
          <h3>${product.productName}</h3>
          <img src="${product.productPic}" alt="${product.productName}">
          <p>Fiyat: ${product.productPrice}</p>
          <p>Miktar: ${product.productAmount}</p>
        `; // li elementinin içeriğini şirketin ürün bilgileri ile doldur
        productList.appendChild(li); // li elementini ürün listesine ekle
      });
    });
  })
  .catch(error => console.error(error)); // Hata varsa konsola yazdır
