// CAROUSEL

// Variables declarations
var slideNumber;
    totalSlides = document.querySelectorAll('#home > div.slide');

// Auto slideshow
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
  totalSlides[slideNumber].classList.add('w3-show');
  setTimeout(autoSlideshow, 5000);
}

// Manual Slideshow
const manualSlideshow = () => {
  for(let slide of totalSlides){
    slide.classList.remove('w3-show');
  }
  if(this.classList.contains('prev')){
    if(slideNumber == 0){
      slideNumber = totalSlides.length -1;
    }else{
      slideNumber--;
    }
  }else if(this.classList.contains('next')){
    if(slideNumber == totalSlides.length -1){
      slideNumber = 0;
    }else{
      slideNumber++;
    }
  }
  totalSlides[slideNumber].classList.add('w3-show');
}
