document.addEventListener('DOMContentLoaded', () => {
    // === GİRİŞ PANELİ İŞLEVLERİ ===
    const loginContainer = document.getElementById('login-container');
    const adminPanel = document.getElementById('admin-panel');
    const loginButton = document.getElementById('login-button');
    const passwordInput = document.getElementById('password');
    const loginError = document.getElementById('login-error');
    
    const correctPassword = 'DBS35-admin';

    // Giriş yapma fonksiyonu
    const handleLogin = () => {
        if (passwordInput.value === correctPassword) {
            loginContainer.style.display = 'none';
            adminPanel.style.display = 'block';
        } else {
            loginError.style.display = 'block';
        }
    };

    // Butona tıklandığında giriş yapmayı dene
    loginButton.addEventListener('click', handleLogin);
    
    // Enter tuşuna basıldığında giriş yapmayı dene
    passwordInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            handleLogin();
        }
    });

    // === ETKİNLİK JSON ÜRETİCİSİ ===
    const etkinlikJsonUretBtn = document.getElementById('etkinlik-json-uret');
    etkinlikJsonUretBtn.addEventListener('click', () => {
        const etkinlik = {
            id: Date.now(),
            baslik: document.getElementById('etkinlik-baslik').value,
            detay: document.getElementById('etkinlik-detay').value,
            resimUrl: document.getElementById('etkinlik-resim').value,
            tarih: document.getElementById('etkinlik-tarih').value,
            mekan: document.getElementById('etkinlik-mekan').value,
            harita: document.getElementById('etkinlik-harita').value,
            kayitLinki: document.getElementById('etkinlik-link').value
        };

        const jsonCiktiAlani = document.getElementById('etkinlik-json-cikti');
        // JSON'u okunabilir formatta (pretty-print) string'e çevir
        const jsonString = JSON.stringify(etkinlik, null, 4); 
        jsonCiktiAlani.textContent = `,\n${jsonString}`; // Başına virgül ve yeni satır ekle
        jsonCiktiAlani.style.display = 'block';
    });

    // === GALERİ JSON ÜRETİCİSİ ===
    const galeriJsonUretBtn = document.getElementById('galeri-json-uret');
    galeriJsonUretBtn.addEventListener('click', () => {
        const galeriOgesi = {
            id: Date.now(),
            resimUrl: document.getElementById('galeri-resim-url').value,
            aciklama: document.getElementById('galeri-aciklama').value
        };
        
        const jsonCiktiAlani = document.getElementById('galeri-json-cikti');
        const jsonString = JSON.stringify(galeriOgesi, null, 4);
        jsonCiktiAlani.textContent = `,\n${jsonString}`; // Başına virgül ve yeni satır ekle
        jsonCiktiAlani.style.display = 'block';
    });
});

