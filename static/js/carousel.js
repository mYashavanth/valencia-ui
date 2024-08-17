$(document).ready(function () {
  $(".owl-one").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: ["&#129128;", "&#129130;"],
  });
});
$(document).ready(function () {
  $(".owl-two").owlCarousel({
    items: 3,
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: ["&#129128;", "&#129130;"],
    responsive: {
      0: {
        items: 1,
      },
      769: {
        items: 2,
      },
      1400: {
        items: 3,
      },
    },
  });
});
