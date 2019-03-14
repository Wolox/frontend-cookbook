import $ from 'jquery';

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

var textInput = $('.-input4')[0];
var inputWrap = textInput.parentElement;
var inputWidth = parseInt(getComputedStyle(inputWrap).width);
var svgText = Snap('.line');
console.log(svgText);
var qCurve = inputWidth / 2;  // For correct curving on diff screen sizes
var textPath = svgText.path("M0 0 " + inputWidth + " 0");
var textDown = function(){
    textPath.animate({d:"M0 0 Q" + qCurve + " 40 " + inputWidth + " 0"},150,mina.easeout);
};
var textUp = function(){
  textPath.animate({d:"M0 0 Q" + qCurve + " -30 " + inputWidth + " 0"},150,mina.easeout);
};
var textSame = function(){
  textPath.animate({d:"M0 0 " + inputWidth + " 0"},200,mina.easein);
};
var textRun = function(){
  setTimeout(textDown, 200 );
  setTimeout(textUp, 400 );
  setTimeout(textSame, 600 );
};

(function(){
    textInput.addEventListener('focus', function(){
      var parentDiv = this.parentElement;
      parentDiv.classList.add('active');
      textRun();
      this.addEventListener('blur', function(){
        var rg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.]{3,9})+\.([A-Za-z]{2,4})$/;
        this.value == 0 ? parentDiv.classList.remove('active') : null;
        !rg.test(this.value) && this.value != 0 ?
         (parentDiv.classList.remove('valid'), parentDiv.classList.add('invalid'), parentDiv.style.transformOrigin="center")
         : rg.test(this.value) && this.value != 0 ?
        (parentDiv.classList.add('valid'), parentDiv.classList.remove('invalid'), parentDiv.style.transformOrigin="bottom") :null;
        });
     parentDiv.classList.remove('valid', 'invalid')
    });
})();