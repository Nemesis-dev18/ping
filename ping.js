const URL_PAGINA = "https://pagina-detox-pantallas.onrender.com";
const INTERVALO_MS = 40000;

async function pedir() {
  try {
    const res = await fetch(URL_PAGINA, { method: "GET", cache: "no-store" });
    console.log(`${new Date().toISOString()} ${res.status}`);
  } catch (err) {
    console.log(`${new Date().toISOString()} error: ${err.message}`);
  }
}

pedir();
setInterval(pedir, INTERVALO_MS);
