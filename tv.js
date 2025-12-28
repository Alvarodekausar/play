/* Fungsi Pintar: Cukup panggil playTV('nama_file')
   Contoh: playTV('ch1') atau playTV('bein1')
*/
function playTV(channel) {
    const box = document.getElementById("tv");
    if (box) {
        box.innerHTML = `<iframe src="https://tv.sportsnews.id/p/${channel}.html" 
            allow="encrypted-media" 
            scrolling="no" 
            frameborder="0" 
            height="100%" 
            width="100%" 
            allowfullscreen="allowfullscreen"></iframe>`;
    } else {
        console.error("Elemen dengan ID 'tv' tidak ditemukan!");
    }
}
