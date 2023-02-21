fetch('products.json')
.then(response => response.json())
.then(data => {
    // productName'e göre alfabetik sıralama
    data.sort((a, b) => a.productName.localeCompare(b.productName));
    
    const table = document.getElementById('productTable');
    const tbody = table.getElementsByTagName('tbody')[0];
    
    // tabloya verileri ekleme
    data.forEach(product => {
        const tr = document.createElement('tr');
        
        const idCell = document.createElement('td');
        idCell.textContent = product.id;
        tr.appendChild(idCell);
        
        const companyIdCell = document.createElement('td');
        companyIdCell.textContent = product.companyId;
        tr.appendChild(companyIdCell);
        
        const productNameCell = document.createElement('td');
        productNameCell.textContent = product.productName;
        tr.appendChild(productNameCell);
        
        const productAmountCell = document.createElement('td');
        productAmountCell.textContent = product.productAmount;
        tr.appendChild(productAmountCell);
        
        const productPriceCell = document.createElement('td');
        productPriceCell.textContent = product.productPrice;
        tr.appendChild(productPriceCell);
        
        const productPicCell = document.createElement('td');
        const productPic = document.createElement('img');
        productPic.src = product.productPic;
        productPicCell.appendChild(productPic);
        tr.appendChild(productPicCell);
        
        const websiteCell = document.createElement('td');
        websiteCell.textContent = product.website;
        tr.appendChild(websiteCell);
        
        tbody.appendChild(tr);
    });
})
.catch(error => console.error(error));