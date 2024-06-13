
// Tento kód přidává menu do elementu s ID 'navbar'

document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbar");
    if (navbar) {
        navbar.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="https://www.google.cz" target="_blank" style="font-size:80%;">Google</a>

                    <span>Web o ZAL-auto - Centrálně spravované menu</span>
                    <div class="dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Menu
                        </a>
                        <div class="dropdown-menu bg-dark">

                            <a class="dropdown-item text-white" href="./index.html"> </i> Náhodné obrázky</a>
                            <a class="dropdown-item text-white" href="./zal-auto-zadani.html"> </i> Zadání</a>
                            <a class="dropdown-item text-white" href="./zal-auto-reseni.html"> </i> Řešení</a>
                            <a class="dropdown-item text-white" href="./zal-auto-zaver.html"> </i> Závěr</a>


                        </div>
                    </div>
                </div>
            </nav>
        `;
    }
});

// <i class="fas fa-image"></i>
// <i class="fas fa-file-image"></i>
// <i class="fas fa-file-archive"></i>
// <i class="fas fa-vector-square"></i>
// nod/182e87a842.png
