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

function initPartnersLoop() {
  const slider = document.getElementById("partners-slider");
  const track = document.getElementById("partners-track");

  if (!slider || !track) return;

  const speed = 0.5;
  let animationId;

  const originalItems = Array.from(track.children);
  originalItems.forEach(item => {
    const clone = item.cloneNode(true);
    track.appendChild(clone);
  });

  let offset = 0;

  function getStepWidth() {
    const firstItem = track.querySelector(".partner-item");
    if (!firstItem) return 0;
    const gap = 24;
    return firstItem.offsetWidth + gap;
  }

  function animate() {
    offset += speed;
    const loopWidth = getStepWidth() * originalItems.length;

    if (offset >= loopWidth) {
      offset = 0;
    }

    track.style.transform = `translateX(-${offset}px)`;
    animationId = requestAnimationFrame(animate);
  }

  slider.addEventListener("mouseenter", () => cancelAnimationFrame(animationId));
  slider.addEventListener("mouseleave", () => {
    cancelAnimationFrame(animationId);
    animationId = requestAnimationFrame(animate);
  });

  animationId = requestAnimationFrame(animate);

  window.addEventListener("resize", () => {
    offset = 0;
    track.style.transform = "translateX(0)";
  });
}

document.addEventListener("DOMContentLoaded", initPartnersLoop);