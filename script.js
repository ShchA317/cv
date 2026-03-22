(function () {
  'use strict';

  document.querySelectorAll('.toggle-detail').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var content = this.previousElementSibling;
      var isOpen = content.classList.contains('is-open');
      content.classList.toggle('is-open', !isOpen);
      this.setAttribute('aria-expanded', !isOpen);
    });
  });

  document.querySelectorAll('.skill-item-header').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var detail = this.nextElementSibling;
      var isOpen = detail && detail.classList.contains('is-open');
      if (detail) detail.classList.toggle('is-open', !isOpen);
      this.setAttribute('aria-expanded', !isOpen);
    });
  });
})();
