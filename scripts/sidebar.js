function showMenu(el, id) {
  $(el).parent().hide('slide').promise().done(() => {
    $(`#${id}`).show('slide');
  });
  $("#previous-menu").addClass("active");
}

function back() {
  $('.tab-list:visible').hide('slide').promise().done(() => {
    $('.tab-list:first').show('slide');
  });
  $("#previous-menu").removeClass("active")
}

function setContent(params) {
  $.get(params, function (data) {
    $('#info-container').html(data);
  });
}