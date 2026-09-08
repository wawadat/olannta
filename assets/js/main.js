(function () {
  'use strict';

  // Mobile navigation toggle
  var toggle = document.querySelector('.hamburger');
  var nav = document.getElementById('primary-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Form submission feedback (no native alert dialogs)
  function handleFormSubmit(form, message) {
    if (!form) return;
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      var status = form.querySelector('.form-status');
      if (status) {
        status.textContent = message;
        status.classList.add('is-visible');
      }
      form.reset();
    });
  }

  handleFormSubmit(
    document.getElementById('trade-form'),
    'Thank you — your trade quote request has been submitted. Our team will get back to you within one working day.'
  );
  handleFormSubmit(
    document.getElementById('sample-form'),
    'Thank you — your sample board request has been received. We will contact you shortly to confirm dispatch.'
  );

  // Footer year
  var yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
