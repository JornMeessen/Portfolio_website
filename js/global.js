// De javascipt die over de hele website aanwezig is 
window.onload = function(){
  scrollFunction();
  menu();

  var projectPage = document.getElementById('project');
  if(projectPage){
    progressbar();
  }
};


function scrollFunction() {
 
  document.getElementById("GoToTop").onclick = function() {
    topFunction();
  }
 

// When the user scrolls down 20px from the top of the document, show the button
     window.onscroll = function() {scrollFunction() };

      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("GoToTop").style.display = "block";
      } else {
        document.getElementById("GoToTop").style.display = "none";
      }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
};


function progressbar(){

    var article = document.querySelector('.js-article');
var progressbar = document.querySelector('.js-progress-bar');

var getHeight = function () {
  return article.offsetHeight;
};

var getValue = function () {
  return (window.innerHeight * 0.75) - (article.offsetTop - window.scrollY);
};

var getPercentage = function () {
  var percentage = (getValue() / getHeight()) * 100;
  return Math.max(0, Math.min(100, percentage));
};

var onScroll = function () {
  progressbar.style.width = getPercentage() + '%';
};

window.addEventListener('scroll', onScroll);

};


function menu(){ 
    let mainNav = document.getElementById('menu');
    let navBarToggle = document.getElementById('toggle');

    navBarToggle.addEventListener('click', function () {
      mainNav.classList.toggle('active');
    });
};