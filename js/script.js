

$(document).ready(function () {
  // $(".menu_bar").click(function () {
  //   $(".nav_links").toggleClass('active');
  //   $('body').toggleClass('active');
  //   $(this).find('.ti').toggleClass("ti-x");
  // });
  // $(".ti-caret-down").click(function () {
  //   $(".cate_bottom").slideToggle();
  //   $(this).toggleClass("ti-caret-down").toggleClass('ti-caret-up')
  // });

  // $('.modal').modal('show');
  $('.search_icon').click(function () {
    $('.header_search').toggleClass('active');
    $('.search_icon .ti').toggleClass("ti-pointer-search , ti-x");
    // $('.nav_links').toggleClass('active')
  });
});
$('.menu').click(function () {
  $(".nav_links").toggleClass('Active');
  $('.menu .ti').toggleClass("ti-pointer-search , ti-x");

});



$('.search_menu_icon').click(function () {
  $(".search_bottom").toggleClass('Active');
  $(".menu_search").toggleClass('Active');

  $('.search_menu_icon .ti').toggleClass("ti-pointer-search , ti-x");


});


let prevScrollPos = window.pageYOffset;

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  // console.log("Scroll position:", currentScrollPos);

  if (prevScrollPos > currentScrollPos) {
    // User is scrolling up
    document.querySelector("header").classList.add("visible");
  } else {
    // User is scrolling down
    document.querySelector("header").classList.remove("visible");
  }

  prevScrollPos = currentScrollPos;
};


// var swiper = new Swiper(".store_swiper", {
//   slidesPerView: "auto",
//   grid: {
//     rows: 2,
//   },
//   spaceBetween: 30,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });


// Show the loading screen
function showLoadingScreen() {
  $('#loading-screen').fadeIn();
}

// Hide the loading screen
function hideLoadingScreen() {
  $('#loading-screen').fadeOut();
}

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

function handleSearchInput() {
  var searchInput = $('#searchInput').val().toLowerCase();

  // Filter the search result elements based on the input
  $('.populor_card_side').each(function () {
    var title = $(this).find('h4').text().toLowerCase();
    if ($('#searchInput').val() !== '' && title.indexOf(searchInput) > -1) {
      $(this).show();
    }
    else {
      $(this).hide();
    }
  });
}





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

var container = $(".hero_main");
var scrollSpeed = 10; // Adjust the scroll speed as needed

container.on("wheel", function (event) {
  event.preventDefault();
  var wheelDelta = event.originalEvent.deltaY;

  container.scrollLeft(container.scrollLeft() + wheelDelta * scrollSpeed);
});


$(function () {
  $('.lazy').Lazy();
});

