//VARIABEL
const tombolSB = document.querySelector("#tombolSB");
const ddSB_display = document.querySelector(".dropdownSB");
const dd_display = document.querySelector(".dropdown");
const tombolCancel = document.querySelector("#cancel");
//TOMBOL MEMUNCULKAN SIDEBAR
tombolSB.addEventListener('click', function(event) {
    ddSB_display.style.display = "block";
    dd_display.style.display = "none";
});
//TOMBOL MENGHILANGKAN SIDEBAR
tombolCancel.addEventListener('click', function(event) {
    ddSB_display.style.display = "none";
    dd_display.style.display = "block";
});
//FUNGSI DIBUAT UNTUK SEBUAH KONDISI TOMBOL MEMUNCULKAN SIDEBAR YANG MANA PADA SAAT MENGUBAH SIZE, TOMBOL MEMUNCULKAN SIDEBAR AKAN MENGHILANG/MUNCUL SESUAI KONDISI YANG TELAH DITENTUKAN
function aa(){
const ukuranKondisi = window.matchMedia('(min-width: 890px)');
    if (ukuranKondisi.matches) {
        dd_display.style.display = "none";
    }else{
        dd_display.style.display = "block";
    }
}