"use strict"

$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header_list-link').toggleClass('active'); // добавляет класс при нажатии
		$('body').toggleClass('lock'); //убирает прокрутку у элемента
	});
	$('.header_list-link').click(function(event) {
		$('.header__burger,.header_list-link').toggleClass('active'); // добавляет класс при нажатии
		$('body').toggleClass('lock'); //убирает прокрутку у элемента
	});
});
$('.single-item').slick();

// slider from JQuery
let slider = $('.slider');

$('#prev').on('click', function() {
	let elem = $('.slider .slider-small-img li.active').prev();
	$('.slider .slider-small-img li.active').removeClass('active');

	if(!elem.length) {
		elem = $('.slider .slider-small-img li:last-child');
	}
	elem.addClass('active');

	$('.slider-img img').attr( 'src', elem.find( 'img' ).attr( 'src' ) );
});

$('#next').on('click', function() {
	let elem = $('.slider .slider-small-img li.active').next();
	$('.slider .slider-small-img li.active').removeClass('active');

	if(!elem.length) {
		elem = $('.slider .slider-small-img li:first-child');
	}
	elem.addClass('active');

	$('.slider-img img').attr( 'src', elem.find( 'img' ).attr( 'src' ) );
});


// my-project
/**************************************
enlarge image when clicked
**************************************/

$(function(){
	$('.minimized').click(function(event) {
	  var i_path = $(this).attr('src');
	  $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
	  $('#magnify').css({
		left: ($(document).width() - $('#magnify').outerWidth())/2,
		// top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
				 top: ($(window).height() - $('#magnify').outerHeight())/2
	 });
	  $('#overlay, #magnify').fadeIn('fast');
	});
	
	$('body').on('click', '#close-popup, #overlay', function(event) {
	  event.preventDefault();
 
	  $('#overlay, #magnify').fadeOut('fast', function() {
		 $('#close-popup, #magnify, #overlay').remove();
	  });
	});
 });

 /*************************
divs appearance when scrolling down
**************************/
function onEntry(entry) {
 entry.forEach(change => {
	if (change.isIntersecting) {
	  change.target.classList.add('element-show');
	}
 });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.my-project-item');
for (let elm of elements) {
 observer.observe(elm);
}





/******************** */
// клик по фото и замена срс выбраного элемента jquery
let currentSlide = $(".my-project-item .my-projects_secondary-links div.active");
function getBigImage(){

	let slideImgArray = $('.my-project-item .my-projects_secondary-links img');
	var a;

	for (let i = 0; i < slideImgArray.length; i++) {

		slideImgArray[i].addEventListener('click', function() {
			 currentSlide = $(".my-project-item .my-projects_secondary-links div.active");
			currentSlide.removeClass('active');
			if(currentSlide.classList == "active"){
				currentSlide.removeClass('active');
			} else{
				let slideArr = $(".my-project-item .my-projects_secondary-links div");
				slideArr[i].classList.add('active');
			}

		a = '#' + slideImgArray[i].parentNode.parentNode.id.slice(0,-1);

			SetSlide(slideImgArray[i].src);
			
		});
	}
	let SetSlide = function(selected){

	document.querySelector(a).src = selected;
	}
}

getBigImage();

