document.addEventListener('DOMContentLoaded', function () {
    const contactBtn = document.querySelector('.contact-btn');
    const overlay = document.querySelector('.overlay');
    const popup = document.querySelector('.information__center');
    const closeBtn = document.querySelector('.information__center_content_btn');
  
    // Popup'ı gösteren fonksiyon
    function showPopup() {
      overlay.classList.remove('hidden');
      popup.classList.remove('hidden');
    }
  
    // Popup'ı gizleyen fonksiyon
    function hidePopup() {
      overlay.classList.add('hidden');
      popup.classList.add('hidden');
    }
  
    // İletişim butonu için olay dinleyicisi
    contactBtn.addEventListener('click', showPopup);
  
    // Popup içindeki kapatma butonu için olay dinleyicisi
    closeBtn.addEventListener('click', hidePopup);
  
    // Overlay'e tıklanınca (popup dışına tıklanınca) popup'ı kapatma için olay dinleyicisi
    overlay.addEventListener('click', function (event) {
      if (event.target === overlay) {
        hidePopup();
      }
    });
  });
  