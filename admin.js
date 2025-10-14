document.addEventListener('DOMContentLoaded', () => {
    const loginSection = document.getElementById('login-section');
    const adminIcerik = document.getElementById('admin-icerik');
    const loginBtn = document.getElementById('login-btn');
    const passwordInput = document.getElementById('password');
    const loginError = document.getElementById('login-error');

    const DOGRU_SIFRE = "DüşünBilimSanat3531";

    // Giriş yapma işlemi
    loginBtn.addEventListener('click', () => {
        if (passwordInput.value === DOGRU_SIFRE) {
            loginSection.style.display = 'none';
            adminIcerik.style.display = 'block';
        } else {
            loginError.style.display = 'block';
        }
    });
    
    passwordInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            loginBtn.click();
        }
    });

    // Etkinlik JSON Üretici
    const etkinlikUretBtn = document.getElementById('etkinlik-uret-btn');
    etkinlikUretBtn.addEventListener('click', () => {
        const etkinlik = {
            id: Date.now(),
            baslik: document.getElementById('etkinlik-baslik').value,
            detay: document.getElementById('etkinlik-detay').value,
            resimUrl: document.getElementById('etkinlik-resim').value,
            tarih: document.getElementById('etkinlik-tarih').value,
            mekan: document.getElementById('etkinlik-mekan').value,
            harita: document.getElementById('etkinlik-harita').value,
            kayitLinki: document.getElementById('etkinlik-kayit').value,
        };
        const sonucJSON = JSON.stringify(etkinlik, null, 2); // 2-space indentation
        document.getElementById('etkinlik-sonuc').value = `,\n${sonucJSON}`;
    });

    // Galeri JSON Üretici
    const galeriUretBtn = document.getElementById('galeri-uret-btn');
    galeriUretBtn.addEventListener('click', () => {
        const galeriOgesi = {
            id: Date.now(),
            resimUrl: document.getElementById('galeri-resim').value,
            aciklama: document.getElementById('galeri-aciklama').value,
        };
        const sonucJSON = JSON.stringify(galeriOgesi, null, 2);
        document.getElementById('galeri-sonuc').value = `,\n${sonucJSON}`;
    });
});

