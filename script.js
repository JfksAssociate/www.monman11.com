function launch() {
    //window.location.href='minecraft://?addServer=monman11.com:25606';
    navigator.clipboard.writeText("monman11.com");
    var e = document.querySelector("#launch");
    e.innerText = "Copied!";
}
//JQUERY ios scrolling
const isMobileiOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
if (window.innerWidth <= 767) {
$(window).scroll(function() {
    var scrolledY = $(window).scrollTop();
    $('#container').css('background-position', 'left ' + ((scrolledY)) + 'px');
  });
}
