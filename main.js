// Renders car cards into a grid element, with brand/model/type/year filtering.

function placeholderPhoto(car) {
  const initials = car.brand.slice(0, 2).toUpperCase();
  return `<div class="photo placeholder">
    <div>
      <div style="font-size:1.8rem;font-weight:800;color:var(--accent-dark);">${initials}</div>
      <div>${car.brand} ${car.model}<br>photo pending</div>
    </div>
  </div>`;
}

function formatPrice(m) {
  return `USh ${m}m`;
}

function carCardHtml(car) {
  const statusLabel = { available: "Available", reserved: "Reserved", sold: "Sold" }[car.status] || "Available";
  const statusClass = `status-${car.status}`;
  return `
    <div class="car-card" onclick="location.href='car-detail.html?id=${car.id}'">
      ${placeholderPhoto(car)}
      <div class="body">
        <span class="status-badge ${statusClass}">${statusLabel}</span>
        <p class="title">${car.year} ${car.brand} ${car.model}</p>
        <p class="tagline">${car.type} • ${car.fuel}${car.mileage ? " • " + car.mileage : ""}</p>
        <div class="meta">
          <span>${car.transmission}</span>
          <span>${car.fuel}</span>
        </div>
        <div class="price">${formatPrice(car.price)}</div>
      </div>
    </div>
  `;
}

function renderCars(cars, targetId) {
  const el = document.getElementById(targetId);
  if (!el) return;
  el.innerHTML = cars.length
    ? cars.map(carCardHtml).join("")
    : `<p style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:40px 0;">No cars match those filters — try widening your search.</p>`;
}

function populateBrandFilter(selectId) {
  const sel = document.getElementById(selectId);
  if (!sel) return;
  const brands = Object.keys(BRAND_MODELS).sort();
  sel.innerHTML = `<option value="">All brands</option>` + brands.map((b) => `<option value="${b}">${b}</option>`).join("");
}

function populateModelFilter(brandSelectId, modelSelectId) {
  const brand = document.getElementById(brandSelectId).value;
  const modelSel = document.getElementById(modelSelectId);
  if (!brand) {
    modelSel.innerHTML = `<option value="">All models</option>`;
    return;
  }
  const models = Array.from(BRAND_MODELS[brand] || []).sort();
  modelSel.innerHTML = `<option value="">All models</option>` + models.map((m) => `<option value="${m}">${m}</option>`).join("");
}

function populateYearFilter(selectId) {
  const sel = document.getElementById(selectId);
  if (!sel) return;
  const years = Array.from(new Set(CARS.map((c) => c.year))).sort((a, b) => b - a);
  sel.innerHTML = `<option value="">Any year</option>` + years.map((y) => `<option value="${y}">${y}</option>`).join("");
}

function applyFilters({ brandId, modelId, typeId, yearId, sortId, targetId }) {
  let result = [...CARS];
  const brand = document.getElementById(brandId)?.value;
  const model = document.getElementById(modelId)?.value;
  const type = document.getElementById(typeId)?.value;
  const year = document.getElementById(yearId)?.value;
  const sort = document.getElementById(sortId)?.value;

  if (brand) result = result.filter((c) => c.brand === brand);
  if (model) result = result.filter((c) => c.model === model);
  if (type) result = result.filter((c) => c.type === type);
  if (year) result = result.filter((c) => String(c.year) === year);
  if (sort === "price_asc") result.sort((a, b) => a.price - b.price);
  if (sort === "price_desc") result.sort((a, b) => b.price - a.price);

  renderCars(result, targetId);
}
