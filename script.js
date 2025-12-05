const radios = document.querySelectorAll('input[name="plan"]');
const totalPrice = document.getElementById('total-price');

function createRows(box, count) {
  box.innerHTML = `
    <div class="variant-header">
      <span></span><span>Size</span><span>Colour</span>
    </div>
  `;
  for (let i = 1; i <= count; i++) {
    const row = document.createElement('div');
    row.className = 'variant-row';
    row.innerHTML = `
      <span>#${i}</span>
      <select>
        <option>S</option>
        <option>M</option>
        <option>L</option>
        <option>XL</option>
      </select>
      <select>
        <option>Black</option>
        <option>Red</option>
        <option>Blue</option>
        <option>Green</option>
      </select>
    `;
    box.appendChild(row);
  }
}

function updateUI() {
  document.querySelectorAll('.variant-box').forEach(box => {
    box.style.display = 'none';
  });

  const checked = document.querySelector("input[name='plan']:checked");
  const units = Number(checked.dataset.units);
  const price = Number(checked.dataset.price).toFixed(2);

  const targetBox = document.getElementById('variant-' + units);
  targetBox.style.display = 'block';
  createRows(targetBox, units);

  totalPrice.textContent = `$${price} USD`;
}

radios.forEach(r => r.addEventListener('change', updateUI));
updateUI(); // initial
