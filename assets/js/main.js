const featuredProductIds = [
  "iza-500",
  "rtx-serisi-tek-rotorlu-shredder",
  "pcm-serisi-plastik-kirma",
  "cwm-100",
  "turbo-kurutma",
  "iza-ck-700"
];

function createProductCard(product) {
  return `
    <article class="product-card">
      <img src="${product.image}" alt="${product.name}" loading="lazy" />
      <div class="product-card-content">
        <h3>${product.name}</h3>
        <p><strong>Kategori:</strong> ${product.category}</p>
        <p>${product.shortDescription || ""}</p>
        <a class="product-link" href="product/product.html?id=${product.id}">Detayları İncele</a>
      </div>
    </article>
  `;
}

function renderFeaturedProducts() {
  const productList = document.getElementById("product-list");

  if (!productList || !window.products) return;

  const featuredProducts = featuredProductIds
    .map(id => window.products.find(product => product.id === id))
    .filter(Boolean);

  productList.innerHTML = featuredProducts.map(createProductCard).join("");
}

document.addEventListener("DOMContentLoaded", renderFeaturedProducts);