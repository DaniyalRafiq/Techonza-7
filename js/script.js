

$(document).ready(function () {


  $(function () {
    $('.lazy').Lazy();
  });
  
  $('.search_icon').click(function () {
    $('.header_search').toggleClass('active');
    $('.search_icon .ti').toggleClass("ti-pointer-search , ti-x");

  });
});
$('.menu').click(function () {
  $(".nav_links").toggleClass('Active');
  $('.menu .ti').toggleClass("ti-pointer-search , ti-x");
  $('body').toggleClass("active");
});




$('.search_menu_icon').click(function () {
  $(".search_bottom").toggleClass('Active');
  $(".menu_search").toggleClass('Active');

  $('.search_menu_icon .ti').toggleClass("ti-pointer-search , ti-x");

});


$(".filter_").click(function (e) {
  e.preventDefault()
  var myVariable = $(this).attr("data-type");

  $(`.single_card_[data-type="${myVariable}"]`).show().siblings(".single_card_").hide();
  if (myVariable == "all") {
    $(".single_card_").show();
  }
})
$('.filter_').click(function () {
  $(this).addClass('active').siblings().removeClass('active');
});




var container = $(window);
var scrollSpeed = 10; // Adjust the scroll speed as needed

container.on("wheel", function (event) {
  event.preventDefault();
  var wheelDelta = event.originalEvent.deltaY;

  container.scrollLeft(container.scrollLeft() + wheelDelta * scrollSpeed);
});




// Keyup event listener on search input
$('#searchInput').keyup(function () {
  if ($(this).val() != "") {
    $(".form").addClass('active')
    $(".search_result").slideDown();
  }
  else {
    $(".form").removeClass('active')
    $(".search_result").slideUp();
  }
});

var swiper = new Swiper(".p_cate_main", {
  loop: true,
  slidesPerView: "auto",
  speed: 500, 
  spaceBetween: 30,
  pagination: {
    clickable: true,
    el: ".Popular_Category .main_heading .swiper-pagination",
  },

});
$(".filter_blog").click(function (e) { 
  e.preventDefault();
  $(".filter_blog").toggleClass("active");
  var attr =   $(this).attr("data-type") ;

$(`.side_bar_post_main[data-type="${attr}"]`).addClass("active").siblings().removeClass("active");
});

var swiper = new Swiper(".blog_main", {
  loop: true,
  slidesPerView: "auto",
  speed: 500, 
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



var swiper = new Swiper(".latest_post_wrapper", {
  loop: true,
  slidesPerView: "auto",
  speed: 500, 
  spaceBetween: 30,
  pagination: {
    clickable: true,

    el: ".swiper-pagination",
  },

});




$('.alphabet-item').click(function () {
  $(this).addClass('active').siblings().removeClass('active')
});


