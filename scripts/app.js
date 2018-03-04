particlesJS.load('particles-js', 'assets/particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});
function goResume(){
  $('html,body').animate({
      scrollTop: $("#resume").offset().top
  },
      2000);
}
