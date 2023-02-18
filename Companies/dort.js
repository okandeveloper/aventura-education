// Şirketlerin bulunduğu JSON dosyası
const companiesUrl = 'companies.json';

// Ülkelerin bulunduğu JSON dosyası
const countriesUrl = 'countries.json';

// Şirketlerin listeleneceği div elementi
const companiesList = document.getElementById('companies-list');

// Şirketleri filtreleyip listeleme fonksiyonu
function listCompanies(companies, countries) {
  // Telefon numarası +44 ile başlayan şirketlerin listesi
  const filteredCompanies = companies.filter(company => company.companyPhone.startsWith('+44'));

  // Her bir şirket için bir div elementi oluştur
  const companyElements = filteredCompanies.map(company => {
    // Şirketin ülkesinin bayrağını bul
    const country = countries.find(country => country.name === company.country);
    const flagUrl = country ? country.flag : '';

    // Şirketin resmini ve bayrağını gösteren bir div elementi oluştur
    const companyDiv = document.createElement('div');
    companyDiv.classList.add('company');
    companyDiv.innerHTML = `
      <img src="${company.companyPic}" alt="${company.companyName} logo">
      <div>
        <h3>${company.companyName}</h3>
        <p>${company.country} <img src="${flagUrl}" alt="${company.country} flag"></p>
      </div>
    `;
    return companyDiv;
  });

  // Şirketleri listele
  companyElements.forEach(company => {
    companiesList.appendChild(company);
  });
}

// Şirketler ve ülkeler yüklendiğinde listeleme fonksiyonunu çağır
Promise.all([
  fetch(companiesUrl).then(response => response.json()),
  fetch(countriesUrl).then(response => response.json())
]).then(([companies, countries]) => {
  listCompanies(companies, countries);
}).catch(error => {
  console.error(error);
});
