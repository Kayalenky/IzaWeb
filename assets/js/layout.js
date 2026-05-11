document.addEventListener("DOMContentLoaded", () => {
  const BASE = "/IzaWeb";

  const productIds = {
    "LDPE Geri Dönüşüm ve Yıkama Hattı": "ldpe-geri-donusum-hatti",
    "HDPE Geri Dönüşüm ve Yıkama Hattı": "hdpe-geri-donusum-hatti",
    "Atık Lastik Geri Dönüşüm Hattı": "atik-lastik-geri-donusum-hatti",
    "Buzdolabı Geri Dönüşüm Hattı": "buzdolabi-geri-donusum-hatti",
    "PET Geri Dönüşüm Hattı": "pet-geri-donusum-hatti",
    "Tek Rotorlu Shredder (RTX Serisi)": "rtx-serisi-tek-rotorlu-shredder",
    "Çift Rotorlu Shredder (SHD Serisi)": "shd-serisi-cift-rotorlu-shredder",
    "Plastik Kırma Makinesi (PCM Serisi)": "pcm-serisi-plastik-kirma",
    "Cam Kırma Makinesi (İZA CK-700)": "iza-ck-700",
    "Alüminyum Kompozit Panel Soyma Makinesi (İZA 500)": "iza-500",
    "Kondenser Geri Dönüşüm Makinesi (CDS-1200)": "cds-1200",
    "Kablo Soyma Makinesi (CWM-100)": "cwm-100",
    "Dikey Sıkma": "dikey-sikma",
    "Yatay Sıkma": "yatay-sikma",
    "Yıkama Havuzu": "yikama-havuzu",
    "Friksiyon Yıkama": "friksiyon-yikama",
    "Turbo Yıkama": "turbo-yikama",
    "Turbo Kurutma": "turbo-kurutma",
    "Granül Extruder (Yandan Beslemeli)": "yandan-beslemeli-ekstruder",
    "Agromel": "agromel",
    "Agromelli Extrüder": "agromelli-ekstruder",
    "Tek Plakalı Elek Değiştirici": "tek-plakali-elek-degistirici",
    "Balya Pres Makinesi": "baler-hp-serisi",
    "Konveyor Bant": "konveyor-bantlar",
    "Helezon Konveyor": "helezon-konveyorler",
    "Pnömatik Taşıma Sistemi (Fan + Siklon)": "pnomatik-tasima-sistemleri"
  };

  const productUrl = (name) => {
    const id = productIds[name];
    return id ? `${BASE}/product/product.html?id=${id}` : `${BASE}/product/product.html`;
  };

  const img = (path) => `${BASE}${path}`;

  const machineCategories = [
    {
      title: "Geri Dönüşüm Hatları",
      url: `${BASE}/pages/category.html?category=geri-donusum-hatlari`,
      products: [
        { name: "LDPE Geri Dönüşüm ve Yıkama Hattı", image: img("/assets/images/Makineler/GeriDonusumHatlari/LDPEGeriDonusumHatti.webp") },
        { name: "HDPE Geri Dönüşüm ve Yıkama Hattı", image: img("/assets/images/Makineler/GeriDonusumHatlari/HDPEGeriDonusumHatti.webp") },
        { name: "Atık Lastik Geri Dönüşüm Hattı", image: img("/assets/images/Makineler/GeriDonusumHatlari/lastikgeridonusumhatti.webp") },
        { name: "Buzdolabı Geri Dönüşüm Hattı", image: img("/assets/images/Makineler/GeriDonusumHatlari/BuzDolabiGeriDonusumHatti.webp") },
        { name: "PET Geri Dönüşüm Hattı", image: img("/assets/images/Makineler/GeriDonusumHatlari/PETGeriDonusumHatti.webp") }
      ]
    },
    {
      title: "Shredder (Parçalayıcı)",
      url: `${BASE}/pages/category.html?category=parcalayicilar`,
      products: [
        { name: "Tek Rotorlu Shredder (RTX Serisi)", image: img("/assets/images/Makineler/Shredder/RTXSerisiTekRotorluShredder/RTXSerisiTekRotorluShredder.webp") },
        { name: "Çift Rotorlu Shredder (SHD Serisi)", image: img("/assets/images/Makineler/Shredder/SHDSerisiCiftRotorluShredder/SHDSerisiCiftRotorluShredder.webp") }
      ]
    },
    {
      title: "Kırma Makineleri",
      url: `${BASE}/pages/category.html?category=kirma-makineleri`,
      products: [
        { name: "Plastik Kırma Makinesi (PCM Serisi)", image: img("/assets/images/Makineler/KirmaMakineleri/PCMSerisiPlastikKirmaMakinesi/PCMSerisiPlastikKirmaMakinesi.webp") },
        { name: "Cam Kırma Makinesi (İZA CK-700)", image: img("/assets/images/Makineler/KirmaMakineleri/IZACK700/IZACK700.webp") }
      ]
    },
    {
      title: "Metal Geri Dönüşüm Makineleri",
      url: `${BASE}/pages/category.html?category=metal-geri-donusum-makineleri`,
      products: [
        { name: "Alüminyum Kompozit Panel Soyma Makinesi (İZA 500)", image: img("/assets/images/Makineler/MetalGeriDonusumMakineleri/IZA500AluminyumKompozitPanelSoymaMakinesi/IZA500AluminyumKompozitPanelSoymaMakinesi.webp") },
        { name: "Kondenser Geri Dönüşüm Makinesi (CDS-1200)", image: img("/assets/images/Makineler/MetalGeriDonusumMakineleri/CDS1200/CDS1200.webp") },
        { name: "Kablo Soyma Makinesi (CWM-100)", image: img("/assets/images/Makineler/MetalGeriDonusumMakineleri/CWM100/CWM100.webp") }
      ]
    },
    {
      title: "Yıkama ve Kurutma Sistemleri",
      url: `${BASE}/pages/category.html?category=yikama-ve-kurutma-sistemleri`,
      products: [
        { name: "Dikey Sıkma", image: img("/assets/images/Makineler/YikamaveKurutmaSistemleri/dikeysikma/dikeysikma.png") },
        { name: "Yatay Sıkma", image: img("/assets/images/Makineler/YikamaveKurutmaSistemleri/yataysikma/yataysikma.webp") },
        { name: "Yıkama Havuzu", image: img("/assets/images/Makineler/YikamaveKurutmaSistemleri/yikamahavuzu/yikamahavuzu.webp") },
        { name: "Friksiyon Yıkama", image: img("/assets/images/Makineler/YikamaveKurutmaSistemleri/FriksiyonYikama/FriksiyonYikama.webp") },
        { name: "Turbo Yıkama", image: img("/assets/images/Makineler/YikamaveKurutmaSistemleri/turboyikama/turboyikama.webp") },
        { name: "Turbo Kurutma", image: img("/assets/images/Makineler/YikamaveKurutmaSistemleri/turbokurutma/turbokurutma.webp") }
      ]
    },
    {
      title: "Granül Extruder Sistemleri",
      url: `${BASE}/pages/category.html?category=ekstruzyon-sistemleri`,
      products: [
        { name: "Granül Extruder (Yandan Beslemeli)", image: img("/assets/images/Makineler/GranulExtruderSistemleri/yandanbeslemeliekstruder/yandanbeslemeliekstruder.webp") },
        { name: "Agromel", image: img("/assets/images/Makineler/GranulExtruderSistemleri/Agromel/Agromel.webp") },
        { name: "Agromelli Extrüder", image: img("/assets/images/Makineler/GranulExtruderSistemleri/AgromelEx/AgromelEx.webp") }
      ]
    },
    {
      title: "Eriyik Filtreleri",
      url: `${BASE}/pages/category.html?category=elek-degistirici-sistemler`,
      products: [
        { name: "Tek Plakalı Elek Değiştirici", image: img("/assets/images/Makineler/EriyikFiltreleri/TekPlakaliElekDegistirici/TekPlakaliElekDegistirici.webp") }
      ]
    },
    {
      title: "Geri Dönüşüm Balyalama Sistemleri",
      url: `${BASE}/pages/category.html?category=balyalama-sistemleri`,
      products: [
        { name: "Balya Pres Makinesi", image: img("/assets/images/Makineler/Balyalama/IZAHPSerisiHidrolikPres/IZAHPSerisiHidrolikPres.webp") }
      ]
    },
    {
      title: "Taşıma Sistemleri",
      url: `${BASE}/pages/category.html?category=tasima-sistemleri`,
      products: [
        { name: "Konveyor Bant", image: img("/assets/images/Makineler/TasimaSistemleri/KonveyorBantlar/KonveyorBantlar.webp") },
        { name: "Helezon Konveyor", image: img("/assets/images/Makineler/TasimaSistemleri/HelezonKonveyorler/HelezonKonveyorler.webp") },
        { name: "Pnömatik Taşıma Sistemi (Fan + Siklon)", image: img("/assets/images/Makineler/TasimaSistemleri/PnomatikTasimaSistemleri/PnomatikTasimaSistemleri.webp") }
      ]
    }
  ];

  const megaMenuHTML = machineCategories.map((category) => `
    <div class="mega-category-item">
      <a href="${category.url}" class="mega-category-link">${category.title}</a>
      <div class="mega-product-panel">
        <div class="mega-product-title">${category.title}</div>
        <div class="mega-product-grid">
          ${category.products.map((product) => `
            <a href="${productUrl(product.name)}" class="mega-product-card">
              <img src="${product.image}" alt="${product.name}">
              <span>${product.name}</span>
            </a>
          `).join("")}
        </div>
      </div>
    </div>
  `).join("");

  const headerHTML = `
<header class="header">
  <div class="container">
    <a href="${BASE}/index.html" class="logo">
      <img src="${BASE}/assets/images/izaLogo.png" alt="IZA Recycling Logo">
    </a>

    <nav class="nav">
      <a href="${BASE}/index.html">Ana Sayfa</a>

      <div class="nav-dropdown nav-mega-dropdown">
        <a href="${BASE}/index.html#kategoriler" class="nav-dropdown-toggle">Makinalar</a>

        <div class="nav-dropdown-menu mega-menu">
          <div class="mega-category-list">
            ${megaMenuHTML}
          </div>
        </div>
      </div>

      <a href="${BASE}/pages/about.html">Hakkımızda</a>
      <a href="${BASE}/pages/contact.html">İletişim</a>
    </nav>
  </div>
</header>
`;

  const footerHTML = `
<footer class="footer">
  <div class="container footer-main">
    <div class="footer-brand">
      <a href="${BASE}/index.html" class="footer-logo">IZA Makina</a>
      <p>
        Geri dönüşüm teknolojileri, endüstriyel makina çözümleri ve projeye özel sistem tasarımlarıyla sürdürülebilir üretime değer katıyoruz.
      </p>
    </div>

    <div class="footer-column">
      <h3>İletişim</h3>
      <ul class="footer-list">
        <li><a href="tel:+903646060622">+90 364 606 06 22</a></li>
        <li><a href="tel:+905325666989">+90 532 566 69 89</a></li>
        <li><a href="mailto:iza@izamakina.com">iza@izamakina.com</a></li>
        <li><a href="mailto:export@izamakina.com">export@izamakina.com</a></li>
      </ul>
    </div>

    <div class="footer-column">
      <h3>Adres</h3>
      <ul class="footer-list footer-address">
        <li>Pınarçay OSB.</li>
        <li>28.Cad. No:7/1</li>
        <li>Çorum Merkez / Çorum</li>
        <li>Türkiye</li>
      </ul>
    </div>

    <div class="footer-column">
      <h3>Hızlı Linkler</h3>
      <ul class="footer-list">
        <li><a href="${BASE}/index.html">Ana Sayfa</a></li>
        <li><a href="${BASE}/index.html#kategoriler">Makinalar</a></li>
        <li><a href="${BASE}/pages/about.html">Hakkımızda</a></li>
        <li><a href="${BASE}/pages/contact.html">İletişim</a></li>
      </ul>
    </div>
  </div>

  <div class="container footer-bottom">
    <p>© 2026 IZA Recycling Machines. Tüm hakları saklıdır.</p>
    <div class="footer-bottom-links">
      <a href="#">Gizlilik Politikası</a>
      <a href="#">KVKK</a>
      <a href="#">Çerez Politikası</a>
    </div>
  </div>
</footer>
`;

  const floatingActionsHTML = `
<div class="floating-actions">
  <a href="tel:05532316365" class="floating-btn floating-call" aria-label="Telefon ile ara" title="Ara">
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.11.37 2.3.56 3.52.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.3 21 3 13.7 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.22.19 2.41.56 3.52a1 1 0 0 1-.24 1.01l-2.2 2.26z"></path>
    </svg>
    <span>Ara</span>
  </a>

  <a href="https://wa.me/905532316365?text=Merhaba%2C%20web%20sitenizden%20ula%C5%9F%C4%B1yorum.%20Bilgi%20almak%20istiyorum." target="_blank" class="floating-btn floating-whatsapp" aria-label="WhatsApp ile iletişim" title="WhatsApp">
    <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp">
    <span>WhatsApp</span>
  </a>

  <button class="floating-btn floating-message" id="message-widget-toggle" type="button" aria-label="Mesaj formunu aç" title="Mesaj Bırak">
    <span class="message-widget-icon">💬</span>
    <span>Mesaj Bırak</span>
  </button>
</div>
`;

  const widgetHTML = `
<div class="message-widget" id="message-widget">
  <div class="message-widget-panel">
    <div class="message-widget-header">
      <span>Mesaj Bırak</span>
      <div class="message-widget-actions">
        <button type="button" id="message-widget-minimize" aria-label="Küçült">−</button>
        <button type="button" id="message-widget-close" aria-label="Kapat">×</button>
      </div>
    </div>

    <div class="message-widget-alert">
      Bilgilerinizi bırakın, en kısa sürede sizinle iletişime geçelim.
    </div>

    <form action="https://formsubmit.co/iza@izamakina.com" method="POST" class="message-widget-form">
      <input type="hidden" name="_subject" value="Web Sitesi Sağ Alt Mesaj Formu">
      <input type="hidden" name="_captcha" value="false">

      <div class="message-widget-row">
        <label>Ad Soyad <span>*</span></label>
        <input type="text" name="Ad Soyad" placeholder="Adınızı girin" required>
      </div>

      <div class="message-widget-row">
        <label>Telefon <span>*</span></label>
        <input type="tel" name="Telefon" placeholder="Telefon numaranızı girin" required>
      </div>

      <div class="message-widget-row">
        <label>E-Posta</label>
        <input type="email" name="Email" placeholder="E-posta adresinizi girin">
      </div>

      <div class="message-widget-row">
        <label>Mesaj <span>*</span></label>
        <textarea name="Mesaj" rows="4" placeholder="Mesajınızı yazın" required></textarea>
      </div>

      <button type="submit" class="message-widget-submit">Gönder</button>
    </form>
  </div>
</div>
`;

  const headerContainer = document.getElementById("site-header");
  const footerContainer = document.getElementById("site-footer");

  if (headerContainer) {
    headerContainer.innerHTML = headerHTML;
  }

  if (footerContainer) {
    footerContainer.innerHTML = footerHTML + floatingActionsHTML + widgetHTML;
  }

  const widget = document.getElementById("message-widget");
  const toggle = document.getElementById("message-widget-toggle");
  const closeBtn = document.getElementById("message-widget-close");
  const minimizeBtn = document.getElementById("message-widget-minimize");

  if (widget && toggle && closeBtn && minimizeBtn) {
    toggle.addEventListener("click", () => {
      widget.classList.add("is-open");
    });

    closeBtn.addEventListener("click", () => {
      widget.classList.remove("is-open");
    });

    minimizeBtn.addEventListener("click", () => {
      widget.classList.remove("is-open");
    });
  }
});