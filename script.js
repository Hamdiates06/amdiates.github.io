function toggleMenu() {
    const menu = document.getElementById("side-menu");
    const mainContainer = document.getElementById("main-container");
    const body = document.body;

    // Menü sınıfını kontrol et
    menu.classList.toggle("open");
    
    // Body'e sınıf ekle (Blur efekti ve kaydırma kontrolü için)
    body.classList.toggle("menu-open");

    // Menü açıldığında ana içeriği it
    if (menu.classList.contains("open")) {
        // Genişliği CSS root değişkeninden al
        const menuWidth = getComputedStyle(document.documentElement).getPropertyValue('--menu-width');
        mainContainer.style.marginLeft = menuWidth;
    } else {
        mainContainer.style.marginLeft = "0";
    }
}

// Konsola bir selam çakalım
console.log("Hamdi Ateş Portfolyo v3: Siyah & Beyaz Tema Aktif.");