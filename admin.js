document.addEventListener('DOMContentLoaded', () => {
    const loginContainer = document.getElementById('login-container');
    const adminPanel = document.getElementById('admin-panel');
    const loginButton = document.getElementById('login-button');
    const passwordInput = document.getElementById('password');
    const loginError = document.getElementById('login-error');
    const logoutButton = document.getElementById('logout-button');

    // Şifre
    const ADMIN_SIFRESI = 'DBS35-admin';

    // Oturum kontrolü
    if (sessionStorage.getItem('isAdmin') === 'true') {
        showAdminPanel();
    }

    // Giriş
    loginButton.addEventListener('click', () => {
        if (passwordInput.value === ADMIN_SIFRESI) {
            sessionStorage.setItem('isAdmin', 'true');
            showAdminPanel();
        } else {
            loginError.textContent = 'Hatalı şifre!';
        }
    });
    
    // Çıkış
    logoutButton.addEventListener('click', () => {
        sessionStorage.removeItem('isAdmin');
        loginContainer.classList.remove('hidden');
        adminPanel.classList.add('hidden');
        passwordInput.value = '';
    });

    function showAdminPanel() {
        loginContainer.classList.add('hidden');
        adminPanel.classList.remove('hidden');
    }

    // --- ETKİNLİK JSON ÜRETİCİ ---
    const etkinlikFormu = document.getElementById('etkinlik-formu');
    const etkinlikJsonCikti = document.getElementById('etkinlik-json-cikti');
    
    etkinlikFormu.addEventListener('submit', (e) => {
        e.preventDefault();
        const etkinlik = {
            id: Date.now(),
            baslik: document.getElementById('etkinlik-baslik').value,
            detay: document.getElementById('etkinlik-detay').value,
            tarih: document.getElementById('etkinlik-tarih').value,
            mekan: document.getElementById('etkinlik-mekan').value,
            harita: document.getElementById('etkinlik-harita').value,
            kayitLinki: document.getElementById('etkinlik-kayit-linki').value,
        };
        // JSON'u formatlayarak textarea'ya yazdırıyoruz.
        etkinlikJsonCikti.value = JSON.stringify(etkinlik, null, 2) + ','; // Sonuna virgül ekleyerek kopyalamayı kolaylaştırıyoruz.
        etkinlikJsonCikti.select(); // Kopyalama kolaylığı için metni seçili hale getir.
        alert('Etkinlik JSON\'u oluşturuldu! Aşağıdaki metin kutusundan kopyalayabilirsiniz.');
    });


    // --- GALERİ JSON ÜRETİCİ ---
    const galeriFormu = document.getElementById('galeri-formu');
    const galeriJsonCikti = document.getElementById('galeri-json-cikti');

    galeriFormu.addEventListener('submit', (e) => {
        e.preventDefault();
        const oge = {
            id: Date.now(),
            resimUrl: document.getElementById('galeri-resim-url').value,
            aciklama: document.getElementById('galeri-aciklama').value
        };
        
        galeriJsonCikti.value = JSON.stringify(oge, null, 2) + ',';
        galeriJsonCikti.select();
        alert('Galeri JSON\'u oluşturuldu! Aşağıdaki metin kutusundan kopyalayabilirsiniz.');
    });
});

