


let sr_dnk = 0;
function btn_def() {
    if (sr_dnk == 0) {
    sr_dnk = 1;
} else if (sr_dnk == 1) {
    sr_dnk = 0;
}
    let slon_12 = document.querySelector('.audio_1');
    let slon_11 = document.querySelector('.h2_audio');
    if (sr_dnk == 0) {
    slon_12.setAttribute('src', 'audio.mp3');
    slon_11.innerHTML = "Музика зі звуками природи";
} else if (sr_dnk == 1) {
    slon_12.setAttribute('src', 'tham.mp3');
    slon_11.innerHTML = "Therefore I am";
}
}





