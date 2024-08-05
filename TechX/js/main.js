(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Project carousel
  $(".project-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 25,
    loop: true,
    center: true,
    dots: false,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
    },
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    margin: 24,
    dots: true,
    loop: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
    },
  });
})(jQuery);

/* ************* Coming soon...  *************** */
function calculateTimeDifference(targetDate) {
  const targetDateTime = new Date(targetDate);
  targetDateTime.setHours(10, 0, 0, 0); // Set the target time to 14:00:00

  const currentDate = new Date();
  const timeDifference = Math.abs(targetDateTime - currentDate);

  if (timeDifference === 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  const seconds = Math.floor(timeDifference / 1000) % 60;
  const minutes = Math.floor(timeDifference / (1000 * 60)) % 60;
  const hours = Math.floor(timeDifference / (1000 * 60 * 60)) % 24;
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

function updateTimeInterval() {
  const targetDate = "2024-09-10T10:00:00Z"; // sep 10, 2024, 10:00 AM
  const { days, hours, minutes, seconds } = calculateTimeDifference(targetDate);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

// Update the time difference initially
updateTimeInterval();

// Update the time difference every second
setInterval(updateTimeInterval, 1000);

// Get Year
document.getElementById("currentYear").textContent = new Date().getFullYear();
/* ************* Coming soon...  *************** */

// Scroll
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const sections = document.querySelectorAll("div[id]");
  function updateActiveNavLink() {
    const currentScrollPos = window.scrollY;
    let currentSection;
    for (const section of sections) {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (currentScrollPos > sectionTop && currentScrollPos < sectionBottom) {
        currentSection = section;
        break;
      }
    }
    if (currentSection) {
      const sectionId = currentSection.getAttribute("id");
      for (const link of navLinks) {
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      }
    }
  }
  updateActiveNavLink();
  window.addEventListener("scroll", updateActiveNavLink);
});
