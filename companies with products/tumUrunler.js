 // Products.json dosyasını yükleyelim
 fetch('products.json')
 .then(response => response.json())
 .then(urunler => {
   // HTML tabloya ürünleri ekleme
   urunler.forEach(product => {
     const tabloSatiri = document.createElement('tr');
     tabloSatiri.innerHTML = `
       <td>${product.key}</td>
       <td>${product.id}</td>
       <td>${product.companyId}</td>
       <td>${product.productName}</td>
       <td>${product.productAmount}</td>
       <td>${product.productPrice}</td>
       <td><img src="${product.productPic}" alt="${product.productName}" width="120"></td>
       <td>${product.website}</td>
       <td>${product.status}</td>
     `;
     document.querySelector('#productTable tbody').appendChild(tabloSatiri);
   });
 })
 .catch(error => console.error(error));