document.addEventListener("DOMContentLoaded", function() {
  //set image array
  var mainImage = document.getElementById('main-image');
  var count = 0;
  var images = [
    'images/ttn-axe.jpg',
    'images/ttn-shoulder-animal.jpg',
    'images/ttn-skull-sword.jpg',
    'images/ttn-skullhood.jpg',
    'images/ttn-skullscyth.jpg',
    'images/ttn-skullstar.jpg',
    'images/ttn-snek.jpg'
  ];

  //animations
  function addCurse() {
    mainImage.classList.add('twitch-background');
    mainImage.classList.add('dark-background');
  }
  function removeCurse() {
    mainImage.classList.remove('twitch-background');
    mainImage.classList.remove('dark-background');
  }
  function switchImage() {
    if (count == images.length) {
      count = 0;
    }
    var bg = images[count];
    mainImage.style.backgroundImage = 'url('+ bg +')';
    count++;
  }

  //animate timing
  function animateImage(){
      addCurse();
      setTimeout(switchImage, 1000);
      setTimeout(removeCurse, 2000);
  }
    setInterval(animateImage, 6000);

});

