function descargar() {
    var url = document.getElementById("url").value;
    var iframe = document.createElement("iframe");
    iframe.width = "100%"
    iframe.style.overflow = "hidden";
    iframe.style.border = "none";

    iframe.src = "https://yt-download.org/api/button/mp3?url="+url;
    document.body.appendChild(iframe);
}