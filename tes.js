const http = require("http");


function createServer() {
    const server = http.createServer((req, res) => {
        const urlParams = new URL(req.url, "http://localhost");
        const name = urlParams.searchParams.get("name") || "Invité";

        // Ici, on insère directement la valeur de `name` dans le HTML
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`<h1>Bonjour ${name}</h1>`);
    });

    server.listen(3000, () => {
        console.log("Serveur vulnérable en écoute sur http://localhost:3000");
    });
}
createServer();

