// transiciones.js

document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll("a").forEach(link => {

        const href = link.getAttribute("href");

        if(!href) return;

        const esAncla = href.startsWith("#");
        const esExterno = href.startsWith("http") || href.startsWith("//");
        const abreNuevaPestana = link.target === "_blank";

        if(esAncla || esExterno || abreNuevaPestana) return;

        link.addEventListener("click", function(evento){

            evento.preventDefault();

            const destino = this.getAttribute("href");

            document.body.classList.add("pagina-saliendo");

            setTimeout(() => {
                window.location.href = destino;
            }, 250);

        });

    });

});