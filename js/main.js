// jQuery 3 required
$(function () {

  // smooth scroll for anchors / buttons
  $(document).on('click', '.js-scroll', function (e) {
    e.preventDefault();

    var target = $(this).attr('href') || $(this).data('target');
    if (!target) return;

    var $el = $(target);
    if (!$el.length) return;

    $('html, body').animate({
      scrollTop: $el.offset().top - 80
    }, 500);

    // close mobile nav after click
    $('.navbar-collapse').collapse('hide');
  });

});
