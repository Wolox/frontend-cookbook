// INPUT 1
$('.input-wrapper .input-base')
.focus(function() {
  $(this).addClass('filled-input');
})
.blur(function() {
  if (!this.value) {
    $(this).removeClass('filled-input');
  }
});