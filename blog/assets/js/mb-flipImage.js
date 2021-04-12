// FLIPIMAGE 3D

const flipimage = () => {
  if(this.getAttribute('front')){
	flipCarda = document.querySelector('article div[front='+this.getAttribute('front')+']');
    flipCardb = document.querySelector('article div[back='+this.getAttribute('front')+']');
  }else if(this.getAttribute('flipcard')){
	flipCarda = document.querySelector('article div[back='+this.getAttribute('flipcard')+']')
    flipCardb = document.querySelector('article div[front='+this.getAttribute('flipcard')+']')
  }
  flipCarda.classList.toggle('w3-show');
  flipCardb.classList.toggle('w3-show');
}

// Add events for flip cards 3d
articulo = document.querySelectorAll('article div[front]');
for(let image of articulo){
  image.addEventListener('click', flipimage);
}

// Add event to image
regresaArticulo = document.querySelectorAll('article i[flipcard]');
for(let btn of regresaArticulo){
  btn.addEventListener('click', flipimage);
}
