fetch('companies.json') // "companies.json" dosyasına bir HTTP GET isteği gönderir
.then(response => response.json()) // Yanıtın "json()" yöntemi kullanılarak işlenmesini sağlar
.then(data => { // Veri, "data" değişkeninde saklanır ve aşağıdaki işlemler gerçekleştirilir
    const companyList = document.getElementById("companyList"); // HTML dosyasındaki "companyList" öğesine erişir

    // Şirketlerin telefon numaralarının "+33" ile başlaması kriterine göre filtreleme yapar ve her biri için bir liste öğesi oluşturur
    data.filter(company => company.companyPhone.startsWith('+33'))
        .forEach(company => {
            const li = document.createElement("li"); // Liste öğesi oluşturur
            li.appendChild(document.createTextNode(company.companyName)); // Şirket ismini liste öğesine ekler
            companyList.appendChild(li); // Liste öğesini "companyList" öğesine ekler
        });
})
.catch(error => console.error(error)); // Hata oluşursa, hata mesajını konsol ekranına yazdırır
