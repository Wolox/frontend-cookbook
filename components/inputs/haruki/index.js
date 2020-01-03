const input = document.querySelector('.input__field--haruki');

function onInputBlur( ev ) {
  if( ev.target.value.trim() === '' ) {
    console.log('empty');
    input.parentNode.classList.remove('input--filled');
  } else {
    input.parentNode.classList.add('input--filled');
    console.log('fill');
  }
}

input.addEventListener('blur', onInputBlur);
