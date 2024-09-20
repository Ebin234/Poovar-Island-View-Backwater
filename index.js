let currentSlide = 0;

function moveSlide(direction) {
  const slides = document.querySelector('.slides');
  const totalSlides = slides.children.length;

  const visibleSlides = 3; // Show 3 images at a time
  const maxSlideIndex = totalSlides - visibleSlides; // Max slide index to not overflow

  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

  if (currentSlide > maxSlideIndex) {
    currentSlide = 0; // Reset to first slide if overflow
  }

  slides.style.transform = `translateX(${-currentSlide * 33.33}%)`; // 33.33% for 3 images
}


// BOAT 

const Bkey = document.getElementById('Bkey')
const Bkey1 = document.getElementById('Bkey-1')
const Bmap = document.getElementById('Bmap')
const Bmap1 = document.getElementById('Bmap-1')
const Bguid = document.getElementById('Bguid')
const Bguid1 = document.getElementById('Bguid-1')
const card1 = document.getElementById('card1')

Bkey.addEventListener('click', function () {
  Bguid1.style.display = 'none'
  Bmap1.style.display = 'none'

  if (Bkey1.style.display == 'none' || Bkey1.style.display == '') {
    Bkey1.style.display = 'flex'
    card1.style.height='800px'
  } else {
    Bkey1.style.display = 'none'
    card1.style.height='100%'
  }
})

Bmap.addEventListener('click', function () {
  Bkey1.style.display = 'none'
  Bguid1.style.display = 'none'

  if (Bmap1.style.display == 'none' || Bmap1.style.display == '') {
    Bmap1.style.display = 'flex'
    card1.style.height='800px'
  } else {
    Bmap1.style.display = 'none'
    card1.style.height='100%'
  }
})


Bguid.addEventListener('click', function () {
  Bkey1.style.display = 'none'
  Bmap1.style.display = 'none'

  if (Bguid1.style.display == 'none' || Bguid1.style.display == '') {
    Bguid1.style.display = 'flex'
    card1.style.height='800px'
  } else {
    Bguid1.style.display = 'none'
    card1.style.height='100%'
  }
})

//  RESORT

const Rkey = document.getElementById('Rkey')
const Rkey1 = document.getElementById('Rkey-1')
const Rmap = document.getElementById('Rmap')
const Rmap1 = document.getElementById('Rmap-1')
const Rguid = document.getElementById('Rguid')
const Rguid1 = document.getElementById('Rguid-1')
const stay = document.getElementById('stay')

Rkey.addEventListener('click', function () {
  Rguid1.style.display = 'none'
  Rmap1.style.display = 'none'

  if (Rkey1.style.display == 'none' || Rkey1.style.display == '') {
    Rkey1.style.display = 'flex'
    stay.style.height='800px'
  } else {
    Rkey1.style.display = 'none'
    stay.style.height='100%'
  }
})

Rmap.addEventListener('click', function () {
  Rkey1.style.display = 'none'
  Rguid1.style.display = 'none'

  if (Rmap1.style.display == 'none' || Rmap1.style.display == '') {
    Rmap1.style.display = 'flex'
    stay.style.height='800px'
  } else {
    Rmap1.style.display = 'none'
    stay.style.height='100%'
  }
})


Rguid.addEventListener('click', function () {
  Rkey1.style.display = 'none'
  Rmap1.style.display = 'none'

  if (Rguid1.style.display == 'none' || Rguid1.style.display == '') {
    Rguid1.style.display = 'flex'
    stay.style.height='800px'
  } else {
    Rguid1.style.display = 'none'
    stay.style.height='100%'
  }
})
