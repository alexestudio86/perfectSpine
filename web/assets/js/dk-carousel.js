// DESKTOP CAROUSEL

var slideNumber;
    totalSlides = document.querySelectorAll('#home > div > div > div.slide');
    prev = document.querySelector('.prev');
    next = document.querySelector('.next');
    headerDots = document.querySelectorAll('#home > div > div.dots > a');
if(prev){
  prev.addEventListener('click', manualSlideshow)
}
if(next){
  next.addEventListener('click', manualSlideshow)
}

// Autoslide
const autoSlideshow = () => {
  for(let slide of totalSlides){
    slide.classList.remove('w3-show');
  }
  if(slideNumber == null){
    slideNumber = 0;
  }else{
    slideNumber++;
    if(slideNumber > totalSlides.length-1){
      slideNumber = 0;
    }
  }
  for(dot of headerDots){
    dot.classList.remove('activeSlide');
  }
  headerDots[slideNumber].classList.add('activeSlide');
  totalSlides[slideNumber].classList.add('w3-show');
  setTimeout(autoSlideshow, 5000);
}

// Manual slide
const manualSlideshow = () => {
  for(let slide of totalSlides){
    slide.classList.remove('w3-show');
  }
  if(this.classList.contains("prev")){
    if(slideNumber == 0){
      slideNumber = totalSlides.length-1;
    }else{
      slideNumber--;
    }
  }else if(this.classList.contains("next")){
    if(slideNumber == totalSlides.length-1){
      slideNumber = 0;
    }else{
      slideNumber++;
    }
  }
  //Header dots sections
  for(info of headerDots){
    info.classList.remove('activeSlide');
  }
  totalSlides[slideNumber].classList.add('w3-show');
  headerDots[slideNumber].classList.add('activeSlide');
}

const dotsSlideshow = () => {
  slideNumber = this.getAttribute('slideNum');
  for(slide of totalSlides){
    slide.classList.remove('w3-show');
  }
  //Header dots section
  for(info of headerDots){
    info.classList.remove('activeSlide');
  }
  totalSlides[slideNumber].classList.add('w3-show');
  this.classList.add('activeSlide');
}

// Show search bar in desktop
const showBar = () => {
  let search = document.querySelector('#searchBar + div'); 
      search.classList.toggle('w3-show');
      searchInput = document.querySelector('#searchBarInput');
      searchInput.focus();
}
