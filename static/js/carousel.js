$(document).ready(function () {
  $(".owl-one").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: ["<span>&#129128;</span>", "<span>&#129130;</span>"],
  });
});
$(document).ready(function () {
  $(".owl-two").owlCarousel({
    items: 3,
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: ["<span>&#129128;</span>", "<span>&#129130;</span>"],
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
