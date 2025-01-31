// Toggle mobile menu

$('#mobile-menu').click(function(){
  $('#nav-links').toggle('fast');
});
// Search functionality (dynamic filtering)
document.getElementById('search-input').addEventListener('input', function () {
  const searchTerm = this.value.toLowerCase();
  const appCards = document.querySelectorAll('.app-card');
  const trendsSection = $('.trends-section');

  if (searchTerm === '') {
      trendsSection.fadeIn(); // Use fadeIn to ensure it's visible
  } else {
      trendsSection.hide();
  }

  let hasResults = false;
  appCards.forEach(card => {
      const appName = card.querySelector('h3').textContent.toLowerCase();
      if (appName.includes(searchTerm)) {
          card.style.display = 'block';
          hasResults = true;
      } else {
          card.style.display = 'none';
      }
  });

  // Ensure trends section is only shown if no search results
  if (!hasResults && searchTerm !== '') {
      trendsSection.hide();
  }
});

$('.trending-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,  
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

