function FLT(XD) {
  $(".grid").isotope({ filter: XD })
}


$("#GCOMPANY").on("input", function() {

  var TEMPO = $(this).val().toLowerCase();

  $('.grid').isotope({ filter: function() {
    var name = $(this).find('.AAA').text().toLowerCase();
    return name.includes(TEMPO);
  } })

})

$(function() {

  fitty('.X', { minSize: 12, maxSize: 128 });
  fitty('.Y', { minSize: 12, maxSize: 128 });


  $('.grid').isotope({
    itemSelector: '.element-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.element-item'
    }
  });

});

function REDDD(xD) {
  var Dx = $(xD).attr("class").split(" ").pop();
  window.location.href = "GIFTCARD/index.html?C=" + Dx;
}
