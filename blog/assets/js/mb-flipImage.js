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
