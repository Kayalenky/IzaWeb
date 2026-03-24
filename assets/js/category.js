function getCategorySlugFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("category");
}

function createCategoryProductCard(product) {
  return `
    <article class="product-card">
      <img src="../${product.image}" alt="${product.name}" loading="lazy" />
      <div class="product-card-content">
        <h3>${product.name}</h3>
        <p><strong>Kategori:</strong> ${product.category}</p>
        <p>${product.shortDescription || ""}</p>
        <a class="product-link" href="../product/product.html?id=${product.id}">Detayları İncele</a>
      </div>
    </article>
  `;
}

function renderCategoryPage() {
  const categorySlug = getCategorySlugFromUrl();
  const titleEl = document.getElementById("category-title");
  const headingEl = document.getElementById("category-heading");
  const countEl = document.getElementById("category-count");
  const productListEl = document.getElementById("category-product-list");
  const descriptionEl = document.getElementById("category-description");

  if (!categorySlug || !window.categories || !window.products) {
    if (titleEl) titleEl.textContent = "Kategori Bulunamadı";
    if (headingEl) headingEl.textContent = "Kategori bulunamadı";
    if (countEl) countEl.textContent = "Geçerli bir kategori seçilmedi.";
    if (descriptionEl) descriptionEl.textContent = "Lütfen ana sayfadan bir kategori seçin.";
    if (productListEl) productListEl.innerHTML = "";
    return;
  }

  const category = window.categories.find(item => item.slug === categorySlug);
  const products = window.getProductsByCategory
    ? window.getProductsByCategory(categorySlug)
    : [];

  if (!category || !products.length) {
    if (titleEl) titleEl.textContent = "Kategori Bulunamadı";
    if (headingEl) headingEl.textContent = "Kategori bulunamadı";
    if (countEl) countEl.textContent = "Bu kategoriye ait ürün bulunamadı.";
    if (descriptionEl) descriptionEl.textContent = "Lütfen ana sayfadan başka bir kategori seçin.";
    if (productListEl) productListEl.innerHTML = "";
    return;
  }

  document.title = `${category.name} | IZA Makina`;
  if (titleEl) titleEl.textContent = category.name;
  if (headingEl) headingEl.textContent = category.name;
  if (descriptionEl) descriptionEl.textContent = `${category.name} kategorisindeki makineleri inceleyin.`;
  if (countEl) countEl.textContent = `Bu kategoride toplam ${products.length} makine bulunmaktadır.`;

  if (productListEl) {
    productListEl.innerHTML = products.map(createCategoryProductCard).join("");
  }
}

document.addEventListener("DOMContentLoaded", renderCategoryPage);