// Şirketleri yükle
fetch('companies.json')
	.then(response => response.json()) // Yanıtın "json()" yöntemi kullanılarak işlenmesini sağlar
	.then(companies => { // Şirket verileri "companies" değişkenine atanır ve aşağıdaki işlemler gerçekleştirilir

		// İngiltere ve Amerika dışındaki şirketleri filtrele
		const foreignCompanies = companies.filter(company => {
			return company.country !== 'United Kingdom' && company.country !== 'United States';
		});

		// Şirket sayısını ekrana yazdır
		document.body.insertAdjacentHTML('beforeend', `<p>Toplam ${foreignCompanies.length} adet şirket bulundu.</p>`);

		// Şirket listesini ekrana yazdır
		const companyList = document.getElementById('company-list');
    
		foreignCompanies.forEach(company => {
			const item = `
				<div class="company-item">
				
					<span>${company.companyName}</span>
				</div>
			`;
			companyList.insertAdjacentHTML('beforeend', item); // Şirket listesine "companyList" öğesine eklenir
		});
	})
	.catch(error => console.error(error)); // Hata oluşursa, hata mesajını konsol ekranına yazdırır

