let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  total += precio;
  actualizarCarrito();
}

function actualizarCarrito() {
  document.getElementById("cart-count").innerText = carrito.length;
  document.getElementById("cart-total").innerText = total;

  let items = document.getElementById("cart-items");
  items.innerHTML = "";
  carrito.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = `${item.nombre} - $${item.precio}`;
    items.appendChild(li);
  });
}

function toggleCarrito() {
  let panel = document.getElementById("carrito-panel");
  if (panel.style.right === "0px") {
    panel.style.right = "-400px";
  } else {
    panel.style.right = "0px";
  }
}
