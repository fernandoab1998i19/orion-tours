import fs from "node:fs";
import path from "node:path";

const distClient = path.join(process.cwd(), "dist", "client");
const assetsDir = path.join(distClient, "assets");
const serverEntryPath = path.join(process.cwd(), "dist", "server", "server.js");

async function generatePrerenderedHtml() {
  try {
    if (fs.existsSync(serverEntryPath)) {
      const serverModule = await import(`file://${serverEntryPath.replace(/\\/g, "/")}`);
      const server = serverModule.default ?? serverModule;

      if (server && typeof server.fetch === "function") {
        const response = await server.fetch(new Request("http://localhost/"));
        const htmlText = await response.text();

        if (htmlText && htmlText.includes("<!DOCTYPE html>")) {
          fs.writeFileSync(path.join(distClient, "index.html"), htmlText, "utf-8");
          console.log("Successfully pre-rendered full HTML landing page into dist/client/index.html!");
          return;
        }
      }
    }
  } catch (err) {
    console.warn("SSR pre-rendering fallback notice:", err.message);
  }

  // Fallback if SSR pre-render fails
  if (fs.existsSync(assetsDir)) {
    const files = fs.readdirSync(assetsDir);
    const cssFile = files.find((f) => f.endsWith(".css"));
    const jsIndexFile = files.find((f) => f.startsWith("index-") && f.endsWith(".js"));
    const jsRoutesFile = files.find((f) => f.startsWith("routes-") && f.endsWith(".js"));

    const htmlContent = `<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Orion Tours | Viajes a Brasil, Sudamérica, Cancún y Las Bahamas en Cuotas</title>
    <meta name="description" content="Agencia boliviana de viajes. Paquetes familiares y grupales en cuotas accesibles a Río, São Paulo, Florianópolis, Buenos Aires, Santiago, Lima, Bogotá, Cancún y Bahamas." />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap" />
    ${cssFile ? `<link rel="stylesheet" href="/assets/${cssFile}">` : ""}
  </head>
  <body>
    <div id="root"></div>
    ${jsIndexFile ? `<script type="module" src="/assets/${jsIndexFile}"></script>` : ""}
    ${jsRoutesFile ? `<script type="module" src="/assets/${jsRoutesFile}"></script>` : ""}
  </body>
</html>`;

    fs.writeFileSync(path.join(distClient, "index.html"), htmlContent, "utf-8");
    console.log("Successfully generated fallback dist/client/index.html!");
  }
}

generatePrerenderedHtml();
