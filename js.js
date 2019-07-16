var images = document.querySelectorAll('.image-item img');
var redFader = document.querySelectorAll('.image-item .red-fader');
var i = 0;
console.log(window.innerWidth);
var hovered = false; 
if(window.innerWidth > 980){
	images.forEach(function(image){
		image.number = i++;
			image.onmouseover = function(){
				redFader[image.number].style.display = 'flex';
			}
		
			redFader[image.number].onmouseout = function(){
				redFader[image.number].style.display = 'none';
			}
		
	})
}

// var dots = document.querySelectorAll('.dot');
// var slides = document.querySelectorAll('.slider1-item');
// console.log(dots, slides);
// var k = 0;
// var j = 0;
// dots.forEach(function(dot){
// 	dot.number = k++;
// 	dot.addEventListener('click', function(){
// 		slides.forEach(function(slide){
// 			slide.style.display = 'none';
// 		});
// 		slides[dot.number].style.display = 'block';

// 	})
// })
// function autoSlide(){
// 	if(j < slides.length){
// 	slides.forEach(function(slide){
// 		slide.style.display = 'none';
// 	});
// 	dots.forEach(function(dot){
// 		dot.style.backgroundColor = '#dddddd';
// 	});
// 	slides[j].style.display = 'block';
// 	dots[j].style.backgroundColor = '#c0301c';
// 	j++;
// 	}else{
// 		j = 0;
// 	}
// 	setTimeout("autoSlide()", 3000);
// }



var slides = document.querySelectorAll('.slider1-item');
var dots = document.querySelectorAll('.dot');
var i = 0;
dots.forEach(function(dot){
	dot.number = i++;
	dot.addEventListener('click', function(){
		if(dot.number == 0){
			slides[dot.number].style.left = '0%';
			slides[1].style.left = '100%';
			slides[2].style.left = '200%';
		}else if(dot.number == 1){
			slides[0].style.left = '-100%';
			slides[dot.number].style.left = '0';
			slides[2].style.left = '100%';
		}else{
			slides[0].style.left = '-200%';
			slides[1].style.left = '-100%';
			slides[dot.number].style.left = '0%';
		}
	})
})




