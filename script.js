(function () {
  'use strict';

  // Toggle "Подробнее" in timeline items
  document.querySelectorAll('.toggle-detail').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var content = this.previousElementSibling;
      var isOpen = content.classList.contains('is-open');
      content.classList.toggle('is-open', !isOpen);
      this.setAttribute('aria-expanded', !isOpen);
    });
  });

  // Toggle раскрытие описания навыка (что и в каком объёме)
  document.querySelectorAll('.skill-item-header').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var detail = this.nextElementSibling;
      var isOpen = detail && detail.classList.contains('is-open');
      if (detail) detail.classList.toggle('is-open', !isOpen);
      this.setAttribute('aria-expanded', !isOpen);
    });
  });

  // По умолчанию открыт только первый блок в колонке «Карьера»; образование — свёрнуто
  var careerRoadmap = document.querySelector('.roadmap-career');
  if (careerRoadmap) {
    var firstDetail = careerRoadmap.querySelector('.timeline-detail');
    var firstBtn = firstDetail && firstDetail.nextElementSibling;
    if (firstDetail) firstDetail.classList.add('is-open');
    if (firstBtn && firstBtn.classList.contains('toggle-detail')) {
      firstBtn.setAttribute('aria-expanded', 'true');
    }
  }
})();
