//VARIABEL
const nama = document.querySelector("#nama");
const email = document.querySelector("#email");
const band = document.querySelector("#band");
const tiket = document.querySelector("#tiket");
const tombol = document.querySelector("#tombol");
const tombolSB = document.querySelector("#tombolSB");
const ddSB_display = document.querySelector(".dropdownSB");
const dd_display = document.querySelector(".dropdown");
const tombolCancel = document.querySelector("#cancel");
const tampungNama = [];
const tampungEmail = [];
const tampungBand = [];
const tampungTiket = [];
//MENGECEK APAKAH STORAGE MENDUKUNG PADA BROWSER
if (typeof(Storage) !== 'undefined') {
    console.log("Browser mendukung local/session Storage");
  } else {
    console.log("Browser tidak mendukung local/session Storage");
}
//TOMBOL KONFIRMASI PEMBELIAN
tombol.addEventListener('click', function (){
    if(nama.value != "" && email.value != "" && band.value != "--Choose Option--" && tiket.value != ('--Choose Option--')){
        alert("Pembelian atas nama ["+nama.value+"] dengan email pembeli ["+email.value+"] dengan band yang dipilih ["+band.value+"] serta dengan jenis tiket ["+tiket.value+"] telah berhasil dilakukan. Terima kasih atas pembeliannya diwebsite kami, Arigatou Gozaimasu!!!");
        event.preventDefault();
        tampungNama.push(nama.value)
        tampungEmail.push(email.value)
        tampungBand.push(band.value)
        tampungTiket.push(tiket.value)
        localStorage.setItem('Nama Pembeli', JSON.stringify(tampungNama));
        localStorage.setItem('Email Pembeli', JSON.stringify(tampungEmail));
        localStorage.setItem('Band', JSON.stringify(tampungBand));
        localStorage.setItem('Jenis Tiket', JSON.stringify(tampungTiket));
        nama.value = "";
        email.value = "";
        band.value = "--Choose Option--";
        tiket.value = "--Choose Option--";
    }else{
        alert("Inputan tidak boleh kosong satupun!");
        nama.value = "";
        email.value = "";
        band.value = "--Choose Option--";
        tiket.value = "--Choose Option--";
    }
})
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
