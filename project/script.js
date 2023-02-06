$(document).ready(function () {
    $('.navbar-nav .nav-link').click(function () {
      $('.navbar-nav .nav-link').removeClass('active');
      $(this).addClass('active');
    });
  
    $('.card .btn-primary').click(function (e) {
      e.preventDefault();
      alert("You have successfully added this book to your cart!");
    });
  });
  