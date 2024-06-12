window.addEventListener('load', function () {
  var $button = document.querySelector('.menu-button');
  var $menu = document.querySelector('.header-site-menu');
  $button.addEventListener('click', function () {
      if ($menu.classList.contains('active')) {
          $menu.classList.remove('active');
      }
      else {
          $menu.classList.add('active');
      }
  });
});
