document.addEventListener('DOMContentLoaded', function () {
  const contactBtn = document.querySelector('.contact-btn');
  const overlay = document.querySelector('.overlay');
  const popup = document.querySelector('.information__center');
  const closeBtn = document.querySelector('.information__center_content_btn');
  const callorderPopup = document.querySelector('.callorder');
  const onclickDiv = document.querySelector('.onclick');

  function showPopup() {
      overlay.classList.remove('hidden');
      popup.classList.remove('hidden');
  }

  function hidePopup() {
      overlay.classList.add('hidden');
      popup.classList.add('hidden');
  }

  function showCallorderPopup() {
      overlay.classList.remove('hidden');
      callorderPopup.classList.remove('hidden');
  }

  function hideCallorderPopup() {
      overlay.classList.add('hidden');
      callorderPopup.classList.add('hidden');
  }

  contactBtn.addEventListener('click', function () {
      showPopup();
      hideCallorderPopup();
  });

  closeBtn.addEventListener('click', hidePopup);
  overlay.addEventListener('click', function (event) {
      if (event.target === overlay) {
          hidePopup();
          hideCallorderPopup();
      }
  });

  onclickDiv.addEventListener('click', function () {
      showCallorderPopup();
      hidePopup();
  });

  const closeCallorderBtn = document.querySelector('.callorder__title .close-btn');
  closeCallorderBtn.addEventListener('click', function () {
      hideCallorderPopup();
  });
});
