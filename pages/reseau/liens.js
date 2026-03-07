var lien = "site_vide.html";

function visit() {
    if (lien != "site_vide.html") {
        open(lien, "_blank");
    }
}

function update(url) {
    lien = url;
    document.getElementById("site-web-view").src = url;
}