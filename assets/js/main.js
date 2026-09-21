// Nirbhay Insurance Marketing — shared site behaviour

document.addEventListener('DOMContentLoaded', function () {
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav drawer
  var navToggle = document.getElementById('navToggle');
  var drawer = document.getElementById('mobileDrawer');
  var drawerClose = document.getElementById('drawerClose');
  if (navToggle && drawer) {
    navToggle.addEventListener('click', function () { drawer.classList.add('open'); });
  }
  if (drawerClose && drawer) {
    drawerClose.addEventListener('click', function () { drawer.classList.remove('open'); });
  }
  if (drawer) {
    drawer.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { drawer.classList.remove('open'); });
    });
  }

  // Scroll reveal
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  // Contact form -> mailto
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('cf-name').value;
      var contact = document.getElementById('cf-phone').value;
      var topic = document.getElementById('cf-topic') ? document.getElementById('cf-topic').value : '';
      var message = document.getElementById('cf-message').value;
      var subject = encodeURIComponent('Insurance counselling enquiry from ' + name);
      var bodyLines = [
        'Name: ' + name,
        'Phone/Email: ' + contact
      ];
      if (topic) bodyLines.push('Topic: ' + topic);
      bodyLines.push('', 'Message:', message);
      var body = encodeURIComponent(bodyLines.join('\n'));
      window.location.href = 'mailto:care@nirbhayinsurance.co.in?subject=' + subject + '&body=' + body;
    });
  }
});
