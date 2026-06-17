const STORAGE_KEY = "listaSpesaVisuale_v1";
const EXTRA_NOTES_STORAGE_KEY = "listaSpesaExtraNotes_v1";

const defaultProducts = [
  { id: "mele", name: "Mele", image: "img/mele.svg", category: "Frutta", state: "catalog" },
  { id: "banane", name: "Banane", image: "img/banane.svg", category: "Frutta", state: "catalog" },
  { id: "arance", name: "Arance", image: "img/arance.svg", category: "Frutta", state: "catalog" },
  { id: "fragole", name: "Fragole", image: "img/fragole.svg", category: "Frutta", state: "catalog" },
  { id: "uva", name: "Uva", image: "img/uva.svg", category: "Frutta", state: "catalog" },
  { id: "kiwi", name: "Kiwi", image: "img/kiwi.svg", category: "Frutta", state: "catalog" },
  { id: "pere", name: "Pere", image: "img/pere.svg", category: "Frutta", state: "catalog" },
  { id: "melone", name: "Melone", image: "img/melone.svg", category: "Frutta", state: "catalog" },

  { id: "insalata", name: "Insalata", image: "img/Insalata.png", category: "Verdura", state: "catalog" },
  { id: "broccoli", name: "Broccoli", image: "img/Broccoli.png", category: "Verdura", state: "catalog" },
  { id: "pomodori", name: "Pomodori", image: "img/Pomodori.png", category: "Verdura", state: "catalog" },
  { id: "carote", name: "Carote", image: "img/Carote.png", category: "Verdura", state: "catalog" },
  { id: "patate", name: "Patate", image: "img/Patate.png", category: "Verdura", state: "catalog" },
  { id: "finocchi", name: "Finocchi", image: "img/finocchi.png", category: "Verdura", state: "catalog" },

  { id: "pane", name: "Pane", image: "img/pane.svg", category: "Pane e pasta", state: "catalog" },
  { id: "pasta", name: "Pasta", image: "img/pasta.svg", category: "Pane e pasta", state: "catalog" },
  { id: "riso", name: "Riso", image: "img/riso.svg", category: "Pane e pasta", state: "catalog" },
  { id: "pizza", name: "Pizza", image: "img/pizza.svg", category: "Pane e pasta", state: "catalog" },

  { id: "latte", name: "Latte", image: "img/latte.svg", category: "Frigo", state: "catalog" },
  { id: "uova", name: "Uova", image: "img/uova.svg", category: "Frigo", state: "catalog" },
  { id: "formaggio", name: "Formaggio", image: "img/formaggio.svg", category: "Frigo", state: "catalog" },
  { id: "yogurt", name: "Yogurt", image: "img/yogurt.svg", category: "Frigo", state: "catalog" },

  { id: "acqua", name: "Acqua", image: "img/acqua.svg", category: "Bevande", state: "catalog" },
  { id: "coca-cola", name: "Coca cola", image: "img/coca-cola.svg", category: "Bevande", state: "catalog" },
  { id: "birre", name: "Birre", image: "img/birre.svg", category: "Bevande", state: "catalog" },
  { id: "caffe", name: "Caffè", image: "img/caffe.svg", category: "Bevande", state: "catalog" },
  { id: "te", name: "Tè", image: "img/te.svg", category: "Bevande", state: "catalog" },
  { id: "succo", name: "Succo", image: "img/succo.svg", category: "Bevande", state: "catalog" },

  { id: "olio", name: "Olio", image: "img/olio.svg", category: "Dispensa", state: "catalog" },
  { id: "sale", name: "Sale", image: "img/sale.svg", category: "Dispensa", state: "catalog" },
  { id: "tonno", name: "Tonno", image: "img/tonno.svg", category: "Dispensa", state: "catalog" },
  { id: "biscotti", name: "Biscotti", image: "img/biscotti.svg", category: "Dispensa", state: "catalog" },

  { id: "sapone", name: "Sapone", image: "img/sapone.svg", category: "Casa e igiene", state: "catalog" },
  { id: "carta", name: "Carta igienica", image: "img/carta.svg", category: "Casa e igiene", state: "catalog" },
  { id: "scottex", name: "Scottex", image: "img/scottex.svg", category: "Casa e igiene", state: "catalog" },
  { id: "detersivo", name: "Detersivo", image: "img/detersivo.svg", category: "Casa e igiene", state: "catalog" },
  { id: "spugne", name: "Spugne", image: "img/spugne.svg", category: "Casa e igiene", state: "catalog" }
];

let products = loadProducts();

const catalog = document.getElementById("catalog");
const toBuyList = document.getElementById("toBuyList");
const boughtList = document.getElementById("boughtList");
const toBuyEmpty = document.getElementById("toBuyEmpty");
const boughtEmpty = document.getElementById("boughtEmpty");
const resetBought = document.getElementById("resetBought");
const extraNotes = document.getElementById("extraNotes");

function loadProducts() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return defaultProducts;

  let savedProducts;

  try {
    savedProducts = JSON.parse(saved);
  } catch {
    return defaultProducts;
  }

  if (!Array.isArray(savedProducts)) return defaultProducts;

  const savedById = savedProducts.reduce((items, product) => {
    items[product.id] = product;
    return items;
  }, {});

  return defaultProducts.map(product => ({
    ...product,
    state: savedById[product.id]?.state || product.state
  }));
}

function saveProducts() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
}

function loadExtraNotes() {
  return localStorage.getItem(EXTRA_NOTES_STORAGE_KEY) || "";
}

function saveExtraNotes() {
  if (!extraNotes) return;
  localStorage.setItem(EXTRA_NOTES_STORAGE_KEY, extraNotes.value);
}

function nextState(currentState) {
  if (currentState === "catalog") return "to-buy";
  if (currentState === "to-buy") return "bought";
  return "catalog";
}

function updateProductState(id) {
  products = products.map(product => {
    if (product.id !== id) return product;
    return { ...product, state: nextState(product.state) };
  });

  saveProducts();
  render();
}

function createItem(product) {
  const button = document.createElement("div");

  button.className = `item ${product.state === "to-buy" ? "to-buy" : ""} ${product.state === "bought" ? "bought" : ""}`;

  button.setAttribute("role", "button");
  button.setAttribute("tabindex", "0");

  const visual = `<img class="product-img" src="${product.image}" alt="${product.name}">`;

  button.innerHTML = `
    ${visual}
    <div class="name">${product.name}</div>
  `;

  button.addEventListener("click", () => updateProductState(product.id));

  button.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      updateProductState(product.id);
    }
  });

  return button;
}

function groupByCategory(items) {
  return items.reduce((groups, item) => {
    if (!groups[item.category]) groups[item.category] = [];
    groups[item.category].push(item);
    return groups;
  }, {});
}

function renderCatalog(items) {
  catalog.innerHTML = "";

  const grouped = groupByCategory(items);

  Object.entries(grouped).forEach(([category, categoryItems]) => {
    const wrapper = document.createElement("div");
    wrapper.className = "category";

    const title = document.createElement("h3");
    title.textContent = category;

    const grid = document.createElement("div");
    grid.className = "grid";

    categoryItems.forEach(item => {
      grid.appendChild(createItem(item));
    });

    wrapper.appendChild(title);
    wrapper.appendChild(grid);
    catalog.appendChild(wrapper);
  });
}

function renderList(container, items, emptyElement) {
  container.innerHTML = "";

  items.forEach(item => {
    container.appendChild(createItem(item));
  });

  emptyElement.style.display = items.length ? "none" : "block";
}

function renderStats() {
  document.getElementById("countCatalog").textContent =
    products.filter(product => product.state === "catalog").length;

  document.getElementById("countToBuy").textContent =
    products.filter(product => product.state === "to-buy").length;

  document.getElementById("countBought").textContent =
    products.filter(product => product.state === "bought").length;
}

function render() {
  const catalogProducts = products.filter(product => product.state === "catalog");
  const toBuy = products.filter(product => product.state === "to-buy");
  const bought = products.filter(product => product.state === "bought");

  renderCatalog(catalogProducts);
  renderList(toBuyList, toBuy, toBuyEmpty);
  renderList(boughtList, bought, boughtEmpty);
  renderStats();
}

if (extraNotes) {
  extraNotes.value = loadExtraNotes();
  extraNotes.addEventListener("input", saveExtraNotes);
}

resetBought.addEventListener("click", () => {
  products = products.map(product => ({
    ...product,
    state: product.state === "bought" ? "catalog" : product.state
  }));

  saveProducts();
  render();
});

render();
