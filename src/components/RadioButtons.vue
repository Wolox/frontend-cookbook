<template lang="pug">
  #info-container.radio-buttons-container
  .radio-button
    label.circle-progress-radio
      input(type='radio', name='radio-grp')
      svg(width='20px', height='20px', viewBox='0 0 20 20')
        circle(cx='10', cy='10', r='9')
        path.inner(d='M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z')
        path.outer(d='M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z')
    label.circle-progress-radio
      input(type='radio', name='radio-grp')
      svg(width='20px', height='20px', viewBox='0 0 20 20')
        circle(cx='10', cy='10', r='9')
        path.inner(d='M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z')
        path.outer(d='M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z')
    label.circle-progress-radio
      input(type='radio', name='radio-grp')
      svg(width='20px', height='20px', viewBox='0 0 20 20')
        circle(cx='10', cy='10', r='9')
        path.inner(d='M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z')
        path.outer(d='M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z')
  .radio-button
    .custom-radios
      input#color-1(type='radio', name='color', value='color-1', checked='')
      label(for='color-1')
        span
          img(src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg', alt='Checked Icon')
      input#color-2(type='radio', name='color', value='color-2')
      label(for='color-2')
        span
          img(src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg', alt='Checked Icon')
      input#color-3(type='radio', name='color', value='color-3')
      label(for='color-3')
        span
          img(src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg', alt='Checked Icon')
      input#color-4(type='radio', name='color', value='color-4')
      label(for='color-4')
        span
          img(src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg', alt='Checked Icon')
</template>

<style lang="scss" scoped>
  @import '../../scss/variables/colors';

  .radio-buttons-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 100px 10px;
  }

  .radio-button {
    align-items: center;
    background-color: $grey;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    height: 100px;
    margin-right:100px;
    padding: 20px;
    width: 250px;
  }

  .circle-progress-radio svg {
    fill: none;
    vertical-align: middle;
  }

  .circle-progress-radio svg circle {
    stroke-width: 2;
    stroke: #C8CCD4;
  }

  .circle-progress-radio svg path {
    stroke: #008FFF;
  }

  .circle-progress-radio svg path.inner {
    stroke-width: 6;
    stroke-dasharray: 19;
    stroke-dashoffset: 19;
  }

  .circle-progress-radio svg path.outer {
    stroke-width: 2;
    stroke-dasharray: 57;
    stroke-dashoffset: 57;
  }

  .circle-progress-radio input {
    display: none;
  }

  .circle-progress-radio input:checked + svg path {
    transition: all 0.4s ease;
  }

  .circle-progress-radio input:checked + svg path.inner {
    stroke-dashoffset: 38;
    transition-delay: 0.3s;
  }

  .circle-progress-radio input:checked + svg path.outer {
    stroke-dashoffset: 0;
  }

  .circle-progress-radio span {
    display: inline-block;
    vertical-align: middle;
  }

  .custom-radios {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .custom-radios input[type="radio"] {
    display: none;
  }

  .custom-radios input[type="radio"] + label span {
    display: inline-block;
    width: 40px;
    height: 40px;
    margin: 10px;
    vertical-align: middle;
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.33);
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;
    line-height: 44px;
  }

  .custom-radios label span img {
    opacity: 0;
    transition: all .3s ease;
  }

  .custom-radios #color-1 + label span {
    background-color: #2ecc71;
  }

  .custom-radios #color-2 + label span {
    background-color: #3498db;
  }

  .custom-radios #color-3 + label span {
    background-color: #f1c40f;
  }

  .custom-radios #color-4 + label span {
    background-color: #e74c3c;
  }

  .custom-radios input[type="radio"]:checked + label span img {
    opacity: 1;
  }
</style>
