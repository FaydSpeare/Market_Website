function changeText(text) {
  document.getElementById("btn").innerHTML = text;
}

function test(id) {
  $('html, body').animate({
      scrollTop: ($(id).offset().top - 100)
  }, 500);
}
