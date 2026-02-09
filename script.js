let items = [];
let total = 0;
const list = document.getElementById('items');

function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function openCategory(cat) {
  showPage(cat);
}

function qty(btn, n) {
  let i = btn.parentElement.querySelector('input');
  let v = parseInt(i.value) + n;
  if (v < 1) v = 1;
  i.value = v;
}

function addToCart(card, name) {
  const cardEl = card.parentElement;
  const quantity = parseInt(cardEl.querySelector('input').value);
  const price = parseInt(cardEl.querySelector('.size').value);
  items.push({ name, price, quantity });
  total += price * quantity;
  renderCart();
}

function renderCart() {
  list.innerHTML = '';
  items.forEach(i => {
    let li = document.createElement('li');
    li.textContent = `${i.name} x${i.quantity} - ₱${i.price * i.quantity}`;
    list.appendChild(li);
  });
  document.getElementById('total').textContent = total;
  document.getElementById('cart').style.display = 'block';
}

function clearCart() {
  items = [];
  total = 0;
  renderCart();
  document.getElementById('cart').style.display = 'none';
}

function checkout() {
  let payment = document.getElementById('payment').value;
  let r = document.getElementById('receipt');
  r.style.display = 'block';
  r.innerHTML = '<h3>Receipt</h3>' + 
    items.map(i => `<p>${i.name} x${i.quantity} - ₱${i.price * i.quantity}</p>`).join('') + 
    `<hr><strong>Total: ₱${total}</strong><br>Payment Mode: ${payment}`;
  document.getElementById('thankyou').style.display = 'block';
  clearCart();
}
