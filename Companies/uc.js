// Şirketleri yükle
fetch('companies.json')
	.then(response => response.json()) // JSON verilerinin işlenmesini sağla
	.then(data => { // Veriler "data" değişkenine atanır ve aşağıdaki işlemler gerçekleştirilir

		// ".com" ile biten web sitelerine sahip şirketleri filtrele
		data.filter(company => company.website.endsWith('.com'))
			.forEach(company => { // Filtrelenen şirketlerin isimlerini listele

			// Yeni bir "li" öğesi oluştur
			const li = document.createElement("li");
			li.appendChild(document.createTextNode(company.companyName)); // Şirket ismini "li" öğesine ekle
			const companyList = document.getElementById("companyList");
			companyList.appendChild(li); // "li" öğesini "companyList" öğesine ekle
		});
	})
	.catch(error => console.error(error)); // Hata oluşursa, hata mesajını konsol ekranına yazdırır
