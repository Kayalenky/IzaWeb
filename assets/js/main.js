const featuredProducts = [
  {
    id: "iza500",
    name: "Alüminyum Kompozit Panel Soyma Makinesi (IZA 500)",
    category: "Metal Geri Dönüşüm Makineleri",
    image: "assets/images/Makineler/MetalGeriDonusumMakineleri/IZA500AluminyumKompozitPanelSoymaMakinesi/IZA500AluminyumKompozitPanelSoymaMakinesi.webp",
    description: "Alüminyum kompozit panelleri verimli şekilde ayırmak için geliştirilmiş geri dönüşüm makinesi."
  },
  {
    id: "tek-rotorlu-shredder-rtx-serisi",
    name: "Tek Rotorlu Shredder (RTX Serisi)",
    category: "Parçalayıcılar",
    image: "assets/images/Makineler/Shredder/RTXSerisiTekRotorluShredder/RTXSerisiTekRotorluShredder.webp",
    description: "Plastik, ahşap ve farklı atık türlerinde güçlü ve homojen parçalama performansı sunar."
  },
  {
    id: "plastik-kirma-makinesi-pcm-serisi",
    name: "Plastik Kırma Makinesi (PCM Serisi)",
    category: "Kırma Makineleri",
    image: "assets/images/Makineler/KirmaMakineleri/PCMSerisiPlastikKirmaMakinesi/PCMSerisiPlastikKirmaMakinesi.webp",
    description: "Farklı plastik türlerini proses öncesi uygun boyutlara getirmek için geliştirilmiştir."
  },
  {
    id: "kablo-soyma-makinesi-cwm-100",
    name: "Kablo Soyma Makinesi (CWM-100)",
    category: "Metal Geri Dönüşüm Makineleri",
    image: "assets/images/Makineler/MetalGeriDonusumMakineleri/CWM100/CWM100.webp",
    description: "Bakır ve alüminyum kabloların geri kazanımında verimli ayırma sağlar."
  },
  {
    id: "turbo-kurutma",
    name: "Turbo Kurutma",
    category: "Yıkama ve Kurutma Sistemleri",
    image: "assets/images/Makineler/YikamaveKurutmaSistemleri/turbokurutma/turbokurutma.webp",
    description: "Yıkanmış plastik malzemelerin hızlı ve etkili şekilde kurutulması için kullanılır."
  },
  {
    id: "cam-kirma-makinesi",
    name: "Cam Kırma Makinesi (İZA CK-700)",
    category: "Kırma Makineleri",
    image: "assets/images/Makineler/KirmaMakineleri/IZACK700/IZACK700.webp",
    description: "Cam şişe ve cam atıkların geri dönüşüm sürecine uygun şekilde kırılmasını sağlar."
  }
];

function createProductCard(product) {
  return `
    <article class="product-card">
      <img src="${product.image}" alt="${product.name}" loading="lazy" />
      <div class="product-card-content">
        <h3>${product.name}</h3>
        <p><strong>Kategori:</strong> ${product.category}</p>
        <p>${product.description}</p>
        <a class="product-link" href="product/product.html?id=${product.id}">Detayları İncele</a>
      </div>
    </article>
  `;
}

function renderFeaturedProducts() {
  const productList = document.getElementById("product-list");

  if (!productList) return;

  productList.innerHTML = featuredProducts.map(createProductCard).join("");
}

document.addEventListener("DOMContentLoaded", renderFeaturedProducts);