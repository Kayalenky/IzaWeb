function getProductIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function createListItems(items = []) {
  return items.map(item => `<li>${item}</li>`).join("");
}

function createSpecs(specs = {}) {
  return Object.entries(specs)
    .map(
      ([key, value]) => `
        <div class="spec-item">
          <span class="spec-label">${key}</span>
          <span class="spec-value">${value}</span>
        </div>
      `
    )
    .join("");
}

function createSimilarProductCard(product) {
  return `
    <article class="product-card">
      <img src="../${product.image}" alt="${product.name}" loading="lazy" />

      <div class="product-card-content">
        <h3>${product.name}</h3>

        <p>
          <strong>Kategori:</strong>
          ${product.category}
        </p>

        <p>${product.shortDescription || ""}</p>

        <a class="product-link" href="product.html?id=${product.id}">
          Detayları İncele
        </a>
      </div>
    </article>
  `;
}

function hideElementIfEmpty(element, hasContent) {
  if (!element) return;

  if (!hasContent) {
    element.style.display = "none";
  }
}

/* ================= TECHNICAL TABLE ================= */

function renderTechnicalTable(product) {
  const wrapper = document.getElementById("technical-table-wrapper");

  if (!wrapper) return;

  if (!product.technicalTable || !product.technicalTable.length) {
    wrapper.innerHTML = "";
    return;
  }

  const headers = product.technicalTableHeaders || [];

  wrapper.innerHTML = `
    <div class="technical-table-container">

      <table class="technical-table">

        <thead>
          <tr>
            <th>Teknik Veriler</th>

            ${headers
              .map(header => `<th>${header}</th>`)
              .join("")}
          </tr>
        </thead>

        <tbody>

          ${product.technicalTable
            .map(
              row => `
                <tr>

                  <td>${row.label}</td>

                  ${row.values
                    .map(
                      value => `
                        <td>${value}</td>
                      `
                    )
                    .join("")}

                </tr>
              `
            )
            .join("")}

        </tbody>

      </table>

    </div>
  `;
}

/* ================= MAIN RENDER ================= */

function renderProductPage() {
  const productId = getProductIdFromUrl();

  if (!window.products) return;

  const product = window.products.find(p => p.id === productId);

  const pageTitle = document.getElementById("product-page-title");
  const pageSubtitle = document.getElementById("product-page-subtitle");

  const productImage = document.getElementById("product-image");

  const productCategory = document.getElementById("product-category");
  const productName = document.getElementById("product-name");

  const productShortDescription = document.getElementById("product-short-description");
  const productFullDescription = document.getElementById("product-full-description");

  const productFeatures = document.getElementById("product-features");
  const productUsageAreas = document.getElementById("product-usage-areas");
  const productSpecs = document.getElementById("product-specs");

  const categoryLink = document.getElementById("product-category-link");

  const similarProductsList = document.getElementById("similar-products-list");

  const featuresCard = document.getElementById("features-card");
  const usageCard = document.getElementById("usage-card");
  const specsCard = document.getElementById("specs-card");

  if (!product) {
    pageTitle.textContent = "Ürün Bulunamadı";
    return;
  }

  /* ================= PAGE INFO ================= */

  document.title = `${product.name} | IZA Makina`;

  pageTitle.textContent = product.name;
  pageSubtitle.textContent = product.shortDescription || "";

  productImage.src = `../${product.image}`;
  productImage.alt = product.name;

  productCategory.textContent = product.category;
  productName.textContent = product.name;

  productShortDescription.textContent =
    product.shortDescription || "";

  productFullDescription.textContent =
    product.fullDescription || "";

  categoryLink.href =
    `../pages/category.html?category=${product.categorySlug}`;

  categoryLink.textContent =
    `${product.category} Kategorisine Dön`;

  /* ================= PRODUCT DATA ================= */

  const featureItems = product.features || [];
  const usageItems = product.usageAreas || [];
  const specsObject = product.specs || {};

  if (featureItems.length) {
    productFeatures.innerHTML =
      createListItems(featureItems);
  }

  if (usageItems.length) {
    productUsageAreas.innerHTML =
      createListItems(usageItems);
  }

  if (Object.keys(specsObject).length) {
    productSpecs.innerHTML =
      createSpecs(specsObject);
  }

  hideElementIfEmpty(featuresCard, featureItems.length);

  hideElementIfEmpty(usageCard, usageItems.length);

  hideElementIfEmpty(
    specsCard,
    Object.keys(specsObject).length
  );

  /* ================= TECHNICAL TABLE ================= */

  renderTechnicalTable(product);

  /* ================= SIMILAR PRODUCTS ================= */

  const similarProducts = window.products
    .filter(
      item =>
        item.categorySlug === product.categorySlug &&
        item.id !== product.id
    )
    .slice(0, 3);

  similarProductsList.innerHTML = similarProducts
    .map(createSimilarProductCard)
    .join("");
}

document.addEventListener(
  "DOMContentLoaded",
  renderProductPage
);