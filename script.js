const STORAGE_KEY = "listaSpesaVisuale_v1";
const EXTRA_NOTES_STORAGE_KEY = "listaSpesaExtraNotes_v1";
const SUPABASE_URL = "https://gcujevbkbsdbngwlcyrz.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_O0yVt9J2Duwxlh_hqlPBFg_FskgM1lc";
const SYNC_DEBOUNCE_DELAY = 600;

const defaultProducts = [
  { id: "mele", name: "Mele", image: "img/mele.png", category: "Frutta", state: "catalog" },
  { id: "banane", name: "Banane", image: "img/banane.png", category: "Frutta", state: "catalog" },
  { id: "arance", name: "Arance", image: "img/arance.png", category: "Frutta", state: "catalog" },
  { id: "fragole", name: "Fragole", image: "img/fragole.png", category: "Frutta", state: "catalog" },
  { id: "uva", name: "Uva", image: "img/uva.png", category: "Frutta", state: "catalog" },
  { id: "kiwi", name: "Kiwi", image: "img/kiwi.png", category: "Frutta", state: "catalog" },
  { id: "pere", name: "Pere", image: "img/pere.png", category: "Frutta", state: "catalog" },
  { id: "melone", name: "Melone", image: "img/melone.png", category: "Frutta", state: "catalog" },
  { id: "limoni", name: "Limoni", image: "img/limoni.png", category: "Frutta", state: "catalog" },
  { id: "pesche", name: "Pesche", image: "img/pesche.png", category: "Frutta", state: "catalog" },
  { id: "albicocche", name: "Albicocche", image: "img/albicocche.png", category: "Frutta", state: "catalog" },
  { id: "anguria", name: "Anguria", image: "img/anguria.png", category: "Frutta", state: "catalog" },
  { id: "mandarini", name: "Mandarini / clementini", image: "img/mandarini.png", category: "Frutta", state: "catalog" },
  { id: "ciliegie", name: "Ciliegie", image: "img/ciliegie.png", category: "Frutta", state: "catalog" },
  { id: "prugne", name: "Prugne / susine", image: "img/prugne.png", category: "Frutta", state: "catalog" },
  { id: "ananas", name: "Ananas", image: "img/ananas.png", category: "Frutta", state: "catalog" },

  { id: "insalata", name: "Insalata", image: "img/Insalata.png", category: "Verdura", state: "catalog" },
  { id: "broccoli", name: "Broccoli", image: "img/Broccoli.png", category: "Verdura", state: "catalog" },
  { id: "pomodori", name: "Pomodori", image: "img/Pomodori.png", category: "Verdura", state: "catalog" },
  { id: "carote", name: "Carote", image: "img/Carote.png", category: "Verdura", state: "catalog" },
  { id: "patate", name: "Patate", image: "img/Patate.png", category: "Verdura", state: "catalog" },
  { id: "finocchi", name: "Finocchi", image: "img/finocchi.png", category: "Verdura", state: "catalog" },
  { id: "zucchine", name: "Zucchine", image: "img/zucchine.png", category: "Verdura", state: "catalog" },
  { id: "melanzane", name: "Melanzane", image: "img/melanzane.png", category: "Verdura", state: "catalog" },
  { id: "peperoni", name: "Peperoni", image: "img/peperoni.png", category: "Verdura", state: "catalog" },
  { id: "cipolle", name: "Cipolle", image: "img/cipolle.png", category: "Verdura", state: "catalog" },
  { id: "aglio", name: "Aglio", image: "img/aglio.png", category: "Verdura", state: "catalog" },
  { id: "sedano", name: "Sedano", image: "img/sedano.png", category: "Verdura", state: "catalog" },
  { id: "cetrioli", name: "Cetrioli", image: "img/cetrioli.png", category: "Verdura", state: "catalog" },
  { id: "fagiolini", name: "Fagiolini", image: "img/fagiolini.png", category: "Verdura", state: "catalog" },
  { id: "spinaci", name: "Spinaci", image: "img/spinaci.png", category: "Verdura", state: "catalog" },
  { id: "zucca", name: "Zucca", image: "img/zucca.png", category: "Verdura", state: "catalog" },
  { id: "cavolfiore", name: "Cavolfiore", image: "img/cavolfiore.png", category: "Verdura", state: "catalog" },
  { id: "bietola", name: "Bietola", image: "img/bietola.png", category: "Verdura", state: "catalog" },
  { id: "asparagi", name: "Asparagi", image: "img/asparagi.png", category: "Verdura", state: "catalog" },
  { id: "piselli", name: "Piselli", image: "img/piselli.png", category: "Verdura", state: "catalog" },

  { id: "pane", name: "Pane", image: "img/pane.png", category: "Pane e pasta", state: "catalog" },
  { id: "pasta", name: "Pasta", image: "img/pasta.png", category: "Pane e pasta", state: "catalog" },
  { id: "riso", name: "Riso", image: "img/riso.png", category: "Pane e pasta", state: "catalog" },
  { id: "pizza", name: "Pizza", image: "img/pizza.png", category: "Pane e pasta", state: "catalog" },
  { id: "piadine", name: "Piadine", image: "img/piadine.png", category: "Pane e pasta", state: "catalog" },
  { id: "farina", name: "Farina", image: "img/farina.png", category: "Pane e pasta", state: "catalog" },
  { id: "pangrattato", name: "Pangrattato", image: "img/pangrattato.png", category: "Pane e pasta", state: "catalog" },
  { id: "farro", name: "Farro", image: "img/farro.png", category: "Pane e pasta", state: "catalog" },
  { id: "polenta", name: "Polenta", image: "img/polenta.png", category: "Pane e pasta", state: "catalog" },
  { id: "gnocchi", name: "Gnocchi", image: "img/gnocchi.png", category: "Pane e pasta", state: "catalog" },
  { id: "lasagne", name: "Lasagne", image: "img/lasagne.png", category: "Pane e pasta", state: "catalog" },
  { id: "tortellini", name: "Tortellini", image: "img/tortellini.png", category: "Pane e pasta", state: "catalog" },
  { id: "ravioli", name: "Ravioli", image: "img/ravioli.png", category: "Pane e pasta", state: "catalog" },
  { id: "crackers", name: "Crackers", image: "img/crackers.png", category: "Pane e pasta", state: "catalog" },
  { id: "grissini", name: "Grissini", image: "img/grissini.png", category: "Pane e pasta", state: "catalog" },
  { id: "fette-biscottate", name: "Fette biscottate", image: "img/fette-biscottate.png", category: "Pane e pasta", state: "catalog" },

  { id: "latte", name: "Latte", image: "img/latte.png", category: "Frigo", state: "catalog" },
  { id: "uova", name: "Uova", image: "img/uova.png", category: "Frigo", state: "catalog" },
  { id: "formaggio", name: "Formaggio", image: "img/formaggio.png", category: "Frigo", state: "catalog" },
  { id: "yogurt", name: "Yogurt", image: "img/yogurt.png", category: "Frigo", state: "catalog" },
  { id: "mozzarella", name: "Mozzarella", image: "img/mozzarella.png", category: "Frigo", state: "catalog" },
  { id: "ricotta", name: "Ricotta", image: "img/ricotta.png", category: "Frigo", state: "catalog" },
  { id: "parmigiano", name: "Parmigiano", image: "img/parmigiano.png", category: "Frigo", state: "catalog" },
  { id: "formaggio-grattugiato", name: "Formaggio grattugiato", image: "img/formaggio-grattugiato.png", category: "Frigo", state: "catalog" },
  { id: "burro", name: "Burro", image: "img/burro.png", category: "Frigo", state: "catalog" },
  { id: "prosciutto", name: "Prosciutto", image: "img/prosciutto.png", category: "Frigo", state: "catalog" },
  { id: "bresaola", name: "Bresaola", image: "img/bresaola.png", category: "Frigo", state: "catalog" },
  { id: "salmone-affumicato", name: "Salmone affumicato", image: "img/salmone-affumicato.png", category: "Frigo", state: "catalog" },
  { id: "yogurt-greco", name: "Yogurt greco", image: "img/yogurt-greco.png", category: "Frigo", state: "catalog" },
  { id: "hummus", name: "Hummus", image: "img/hummus.png", category: "Frigo", state: "catalog" },
  { id: "kefir", name: "Kefir", image: "img/kefir.png", category: "Frigo", state: "catalog" },
  { id: "tofu", name: "Tofu", image: "img/tofu.png", category: "Frigo", state: "catalog" },
  { id: "hamburger", name: "Hamburger", image: "img/hamburger.png", category: "Frigo", state: "catalog" },

  { id: "gelato", name: "Gelato", image: "img/gelato.png", category: "Congelatore", state: "catalog" },
  { id: "piselli-surgelati", name: "Piselli surgelati", image: "img/piselli-surgelati.png", category: "Congelatore", state: "catalog" },
  { id: "spinaci-surgelati", name: "Spinaci surgelati", image: "img/spinaci-surgelati.png", category: "Congelatore", state: "catalog" },
  { id: "minestrone-surgelato", name: "Minestrone surgelato", image: "img/minestrone-surgelato.png", category: "Congelatore", state: "catalog" },
  { id: "filetti-tonno", name: "Filetti di tonno", image: "img/filetti-tonno.png", category: "Congelatore", state: "catalog" },
  { id: "filetti-salmone", name: "Filetti di salmone", image: "img/filetti-salmone.png", category: "Congelatore", state: "catalog" },
  { id: "pizza-surgelata", name: "Pizza surgelata", image: "img/pizza-surgelata.png", category: "Congelatore", state: "catalog" },
  { id: "patatine-surgelate", name: "Patatine surgelate", image: "img/patatine-surgelate.png", category: "Congelatore", state: "catalog" },

  { id: "acqua", name: "Acqua", image: "img/acqua.png", category: "Bevande", state: "catalog" },
  { id: "coca-cola", name: "Coca cola", image: "img/coca-cola.png", category: "Bevande", state: "catalog" },
  { id: "birre", name: "Birra", image: "img/birre.png", category: "Bevande", state: "catalog" },
  { id: "caffe", name: "Caffè", image: "img/caffe.png", category: "Bevande", state: "catalog" },

  { id: "olio", name: "Olio", image: "img/olio.png", category: "Dispensa", state: "catalog" },
  { id: "sale", name: "Sale", image: "img/sale.png", category: "Dispensa", state: "catalog" },
  { id: "tonno", name: "Tonno in scatola", image: "img/tonno.png", category: "Dispensa", state: "catalog" },
  { id: "passata-pomodoro", name: "Passata di pomodoro", image: "img/passata-pomodoro.png", category: "Dispensa", state: "catalog" },
  { id: "ceci", name: "Ceci", image: "img/ceci.png", category: "Dispensa", state: "catalog" },
  { id: "fagioli", name: "Fagioli", image: "img/fagioli.png", category: "Dispensa", state: "catalog" },
  { id: "aceto", name: "Aceto", image: "img/aceto.png", category: "Dispensa", state: "catalog" },
  { id: "zucchero", name: "Zucchero", image: "img/zucchero.png", category: "Dispensa", state: "catalog" },
  { id: "miele", name: "Miele", image: "img/miele.png", category: "Dispensa", state: "catalog" },
  { id: "capperi", name: "Capperi", image: "img/capperi.png", category: "Dispensa", state: "catalog" },
  { id: "olive", name: "Olive", image: "img/olive.png", category: "Dispensa", state: "catalog" },
  { id: "biscotti", name: "Biscotti", image: "img/biscotti.png", category: "Dispensa", state: "catalog" },

  { id: "sapone", name: "Sapone", image: "img/sapone.png", category: "Casa e igiene", state: "catalog" },
  { id: "carta", name: "Carta igienica", image: "img/carta.png", category: "Casa e igiene", state: "catalog" },
  { id: "scottex", name: "Scottex", image: "img/scottex.png", category: "Casa e igiene", state: "catalog" },
  { id: "detersivo", name: "Detersivo", image: "img/detersivo.png", category: "Casa e igiene", state: "catalog" },
  { id: "spugne", name: "Spugne", image: "img/spugne.png", category: "Casa e igiene", state: "catalog" },
  { id: "shampoo", name: "Shampoo", image: "img/shampoo.png", category: "Casa e igiene", state: "catalog" },
  { id: "bagnoschiuma", name: "Bagnoschiuma", image: "img/bagnoschiuma.png", category: "Casa e igiene", state: "catalog" },
  { id: "dentifricio", name: "Dentifricio", image: "img/dentifricio.png", category: "Casa e igiene", state: "catalog" },
  { id: "sgrassatore", name: "Sgrassatore", image: "img/sgrassatore.png", category: "Casa e igiene", state: "catalog" },
  { id: "ammorbidente", name: "Ammorbidente", image: "img/ammorbidente.png", category: "Casa e igiene", state: "catalog" },
  { id: "pastiglie-lavastoviglie", name: "Pastiglie lavastoviglie", image: "img/pastiglie-lavastoviglie.png", category: "Casa e igiene", state: "catalog" },
  { id: "sacchetti-spazzatura", name: "Sacchetti spazzatura", image: "img/sacchetti-spazzatura.png", category: "Casa e igiene", state: "catalog" },
  { id: "carta-forno", name: "Carta forno", image: "img/carta-forno.png", category: "Casa e igiene", state: "catalog" },
  { id: "alluminio", name: "Alluminio", image: "img/alluminio.png", category: "Casa e igiene", state: "catalog" },
  { id: "pellicola", name: "Pellicola", image: "img/pellicola.png", category: "Casa e igiene", state: "catalog" },
  { id: "tovaglioli", name: "Tovaglioli", image: "img/tovaglioli.png", category: "Casa e igiene", state: "catalog" }
];

let products = loadProducts();

const authView = document.getElementById("authView");
const appView = document.getElementById("appView");
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const loginButton = document.getElementById("loginButton");
const loginError = document.getElementById("loginError");
const syncStatus = document.getElementById("syncStatus");
const userEmail = document.getElementById("userEmail");
const logoutButton = document.getElementById("logoutButton");
const catalog = document.getElementById("catalog");
const toBuyList = document.getElementById("toBuyList");
const boughtList = document.getElementById("boughtList");
const toBuyEmpty = document.getElementById("toBuyEmpty");
const boughtEmpty = document.getElementById("boughtEmpty");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const resetBought = document.getElementById("resetBought");
const extraNotes = document.getElementById("extraNotes");

let supabaseClient = null;
let currentUser = null;
let stateRowId = null;
let remoteReady = false;
let syncInProgress = false;
let pendingSync = false;
let notesSyncTimer = null;
let realtimeChannel = null;
let lastLocalSyncTimestamp = null;
let lastKnownRemoteTimestamp = null;
let lastKnownRemoteSignature = null;
let remotePollingTimer = null;

assertRequiredElements();

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

function normalizeProducts(savedProducts) {
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

function assertRequiredElements() {
  const requiredElements = {
    authView,
    appView,
    loginForm,
    emailInput,
    passwordInput,
    loginButton,
    loginError,
    syncStatus,
    userEmail,
    logoutButton,
    catalog,
    toBuyList,
    boughtList,
    toBuyEmpty,
    boughtEmpty,
    searchInput,
    clearSearch,
    resetBought,
    extraNotes
  };

  Object.entries(requiredElements).forEach(([name, element]) => {
    if (!element) {
      throw new Error(`Elemento HTML mancante: ${name}`);
    }
  });
}

function setLoginError(message) {
  loginError.textContent = message;
}

function setSyncStatus(message, isError = false) {
  syncStatus.textContent = message;
  syncStatus.classList.toggle("error", isError);
}

function showLoggedOut() {
  authView.classList.remove("is-hidden");
  appView.classList.add("is-hidden");
  userEmail.textContent = "";
  setSyncStatus("");
}

function showLoggedIn(user) {
  authView.classList.add("is-hidden");
  appView.classList.remove("is-hidden");
  userEmail.textContent = user.email || "";
}

function createSupabaseClient() {
  if (!window.supabase) {
    setLoginError("Supabase non è disponibile. Controlla la connessione e riprova.");
    return null;
  }

  return window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: false
    }
  });
}

function getRemotePayload() {
  lastLocalSyncTimestamp = new Date().toISOString();

  return {
    products,
    extra_notes: extraNotes.value,
    updated_at: lastLocalSyncTimestamp
  };
}

function createStateSignature(row) {
  return JSON.stringify({
    products: normalizeProducts(row.products).map(product => ({
      id: product.id,
      state: product.state
    })),
    extra_notes: typeof row.extra_notes === "string" ? row.extra_notes : ""
  });
}

function applyRemoteState(row) {
  lastKnownRemoteTimestamp = row.updated_at || lastKnownRemoteTimestamp;
  lastKnownRemoteSignature = createStateSignature(row);
  products = normalizeProducts(row.products);
  extraNotes.value = typeof row.extra_notes === "string" ? row.extra_notes : "";
  saveProducts();
  saveExtraNotes();
  render();
  setSyncStatus("Aggiornato da un altro dispositivo.");
}

async function removeRealtimeSubscription() {
  if (!realtimeChannel || !supabaseClient) return;

  const channelToRemove = realtimeChannel;
  realtimeChannel = null;
  await supabaseClient.removeChannel(channelToRemove);
}

async function subscribeToRealtimeState() {
  await removeRealtimeSubscription();

  if (!supabaseClient || !stateRowId) return;

  realtimeChannel = supabaseClient
    .channel(`shopping-list:${stateRowId}`)
    .on(
      "postgres_changes",
      {
        event: "UPDATE",
        schema: "public",
        table: "shopping_lists",
        filter: `id=eq.${stateRowId}`
      },
      payload => {
        if (!payload.new) return;

        const nextSignature = createStateSignature(payload.new);

        if (nextSignature === lastKnownRemoteSignature) {
          setSyncStatus("Salvato.");
          return;
        }

        applyRemoteState(payload.new);
      }
    )
    .subscribe(status => {
      if (status === "SUBSCRIBED") {
        setSyncStatus("Lista sincronizzata in tempo reale.");
      }

      if (["CHANNEL_ERROR", "TIMED_OUT"].includes(status)) {
        setSyncStatus("Lista sincronizzata. Aggiornamento live non disponibile al momento.", true);
      }
    });
}

function stopRemotePolling() {
  window.clearInterval(remotePollingTimer);
  remotePollingTimer = null;
}

function startRemotePolling() {
  stopRemotePolling();

  remotePollingTimer = window.setInterval(async () => {
    if (!remoteReady || !currentUser || !stateRowId || !supabaseClient || syncInProgress) return;

    const { data, error } = await supabaseClient
      .from("shopping_lists")
      .select("products, extra_notes, updated_at")
      .eq("id", stateRowId)
      .single();

    if (error || !data) {
      setSyncStatus("Sincronizzazione automatica non riuscita. Riprovo tra poco.", true);
      return;
    }

    const nextSignature = createStateSignature(data);

    if (nextSignature === lastKnownRemoteSignature) {
      lastKnownRemoteTimestamp = data.updated_at || lastKnownRemoteTimestamp;
      return;
    }

    applyRemoteState(data);
  }, 4000);
}

async function loadOrCreateRemoteState() {
  remoteReady = false;
  stateRowId = null;
  lastKnownRemoteTimestamp = null;
  lastKnownRemoteSignature = null;
  setSyncStatus("Caricamento lista condivisa...");

  const localProducts = products;
  const localExtraNotes = loadExtraNotes();
  const { data: membership, error: membershipError } = await supabaseClient
    .from("shopping_list_members")
    .select("list_id, role")
    .eq("user_id", currentUser.id)
    .limit(1)
    .maybeSingle();

  if (membershipError) {
    throw membershipError;
  }

  if (!membership) {
    throw new Error("Nessuna lista condivisa associata a questo account.");
  }

  stateRowId = membership.list_id;

  const { data: sharedList, error: listError } = await supabaseClient
    .from("shopping_lists")
    .select("id, products, extra_notes, updated_at")
    .eq("id", stateRowId)
    .single();

  if (listError) {
    throw listError;
  }

  const shouldSeedSharedList =
    Array.isArray(sharedList.products) &&
    sharedList.products.length === 0;

  if (shouldSeedSharedList) {
    const { data: seededList, error: seedError } = await supabaseClient
      .from("shopping_lists")
      .update({
        products: localProducts,
        extra_notes: localExtraNotes
      })
      .eq("id", stateRowId)
      .select("products, extra_notes, updated_at")
      .single();

    if (seedError) {
      throw seedError;
    }

    products = normalizeProducts(seededList.products);
    extraNotes.value = typeof seededList.extra_notes === "string" ? seededList.extra_notes : "";
    lastKnownRemoteTimestamp = seededList.updated_at || null;
    lastKnownRemoteSignature = createStateSignature(seededList);
  } else {
    products = normalizeProducts(sharedList.products);
    extraNotes.value = typeof sharedList.extra_notes === "string" ? sharedList.extra_notes : "";
    lastKnownRemoteTimestamp = sharedList.updated_at || null;
    lastKnownRemoteSignature = createStateSignature(sharedList);
  }

  saveProducts();
  saveExtraNotes();
  remoteReady = true;
  render();
  await subscribeToRealtimeState();
  startRemotePolling();
  setSyncStatus("Lista condivisa sincronizzata.");
}

async function syncRemoteState() {
  if (!remoteReady || !currentUser || !stateRowId || !supabaseClient) return;

  if (syncInProgress) {
    pendingSync = true;
    return;
  }

  syncInProgress = true;
  pendingSync = false;
  setSyncStatus("Salvataggio...");

  const { data, error } = await supabaseClient
    .from("shopping_lists")
    .update(getRemotePayload())
    .eq("id", stateRowId)
    .select("products, extra_notes, updated_at")
    .single();

  syncInProgress = false;

  if (error) {
    setSyncStatus("Errore di sincronizzazione. I dati sono salvati su questo dispositivo.", true);
    return;
  }

  lastKnownRemoteTimestamp = data?.updated_at || lastLocalSyncTimestamp;
  lastKnownRemoteSignature = data ? createStateSignature(data) : lastKnownRemoteSignature;
  setSyncStatus("Salvato.");

  if (pendingSync) {
    syncRemoteState();
  }
}

function saveProductsEverywhere() {
  saveProducts();
  syncRemoteState();
}

function saveExtraNotesEverywhere() {
  saveExtraNotes();

  window.clearTimeout(notesSyncTimer);
  notesSyncTimer = window.setTimeout(() => {
    syncRemoteState();
  }, SYNC_DEBOUNCE_DELAY);
}

async function handleSignedIn(session) {
  currentUser = session.user;
  showLoggedIn(currentUser);

  try {
    await loadOrCreateRemoteState();
  } catch (error) {
    remoteReady = false;
    setSyncStatus(`Errore di sincronizzazione: ${error.message}`, true);
  }
}

async function setupAuth() {
  supabaseClient = createSupabaseClient();

  if (!supabaseClient) {
    showLoggedOut();
    return;
  }

  const { data, error } = await supabaseClient.auth.getSession();

  if (error) {
    setLoginError(`Errore sessione: ${error.message}`);
    showLoggedOut();
    return;
  }

  if (data.session) {
    await handleSignedIn(data.session);
  } else {
    showLoggedOut();
  }

  supabaseClient.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_OUT") {
      removeRealtimeSubscription();
      stopRemotePolling();
      currentUser = null;
      stateRowId = null;
      lastKnownRemoteTimestamp = null;
      lastLocalSyncTimestamp = null;
      lastKnownRemoteSignature = null;
      remoteReady = false;
      showLoggedOut();
      render();
    }

    if (event === "TOKEN_REFRESHED" && session) {
      currentUser = session.user;
    }
  });
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

  saveProductsEverywhere();
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
  const query = searchInput.value.trim().toLowerCase();

  const catalogProducts = products.filter(product => {
    const matchesSearch =
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query);

    return product.state === "catalog" && matchesSearch;
  });
  const toBuy = products.filter(product => product.state === "to-buy");
  const bought = products.filter(product => product.state === "bought");

  renderCatalog(catalogProducts);
  renderList(toBuyList, toBuy, toBuyEmpty);
  renderList(boughtList, bought, boughtEmpty);
  renderStats();
}

if (extraNotes) {
  extraNotes.value = loadExtraNotes();
  extraNotes.addEventListener("input", saveExtraNotesEverywhere);
}

loginForm.addEventListener("submit", async event => {
  event.preventDefault();
  setLoginError("");

  if (!supabaseClient) {
    setLoginError("Supabase non è disponibile. Controlla la connessione e riprova.");
    return;
  }

  loginButton.disabled = true;
  loginButton.textContent = "Accesso...";

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email,
    password
  });

  loginButton.disabled = false;
  loginButton.textContent = "Accedi";

  if (error) {
    setLoginError(`Accesso non riuscito: ${error.message}`);
    return;
  }

  if (!data.session) {
    setLoginError("Accesso non riuscito: sessione non disponibile.");
    return;
  }

  passwordInput.value = "";
  await handleSignedIn(data.session);
});

logoutButton.addEventListener("click", async () => {
  setSyncStatus("Uscita in corso...");
  await supabaseClient.auth.signOut();
});

searchInput.addEventListener("input", render);

clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  render();
});

resetBought.addEventListener("click", () => {
  products = products.map(product => ({
    ...product,
    state: "catalog"
  }));

  saveProductsEverywhere();
  render();
});

render();
setupAuth();
