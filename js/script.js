(function() {
  
  window.onload = function() {
    document.querySelector('.search-form .keyword')
            .value = 'Keyword, name, date, ...';

    document.querySelector('.email-form .email')
            .value = 'your@email.com';
  }

  var nav = document.querySelector('#header .main-nav');

  var burger = document.querySelector('#header .burger');
  burger.addEventListener('click', function(e) {
    e.preventDefault();

    nav.classList.add('show');
  });


  var close = document.querySelector('#header .close');
  close.addEventListener('click', function(e) {
    e.preventDefault();

    nav.classList.remove('show');
  });
  
})();