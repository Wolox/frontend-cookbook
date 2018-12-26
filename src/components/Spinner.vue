<template lang="pug">
#spinner
  .container-options
    .control-form
      label(for='inputColor') Color
      input#inputColor.input-control(type='color' name='changeColor' value='#FFFFFF')
    .control-form
      label(for='inputBackgroundColor') Background Color
      input#inputBackgroundColor.input-control(type='color' name='changeBackgroundColor' value='#333333')
  .container-spinners
    .spinner
      .spinner-1
        h4.spinner-1-text Loading...
    .spinner.spinner-flex
      .spinner-2
    .spinner.spinner-3.spinner-flex
      div
      div
      div
      div
      div
      div
      div
      div
    .spinner.spinner-4.spinner-flex
      .spinner-4-wrapper
        .spinner-4-dot1
        .spinner-4-dot2
    .spinner.spinner-flex
      .spinner-5-wrapper
    .spinner.spinner-flex
      .spinner-6-wrapper
    .spinner.spinner-flex
      .spinner-7-wrapper Loading
    .spinner.spinner-flex
      .spinner-8 Loading
    .spinner.spinner-flex
      .spinner-9
    .spinner.spinner-flex.spinner-10
      .spinner-10-dots
        .spinner-10-dot
      h6.spinner-10-text Loading
    .spinner.spinner-flex
      .spinner-11-circle.spinner-11-circle1
      .spinner-11-circle.spinner-11-circle2
      .spinner-11-circle.spinner-11-circle3
    .spinner.spinner-flex
      .spinner-12
        .spinner-12-cube.spinner-12-c1
        .spinner-12-cube.spinner-12-c2
        .spinner-12-cube.spinner-12-c4
        .spinner-12-cube.spinner-12-c3
    .spinner.spinner-flex
      .spinner-13
    .spinner.spinner-flex
      .spinner-14
        .spinner-14-item
        .spinner-14-item
        .spinner-14-item
        .spinner-14-item
        .spinner-14-item
        .spinner-14-item
        .spinner-14-item
        .spinner-14-item
        .spinner-14-item
    .spinner.spinner-flex
      .spinner-15
</template>

<script>
// const inputColor = document.querySelector('#inputColor');
// const inputBackgroundColor = document.querySelector('#inputBackgroundColor');
// const containerSpinners = document.querySelector('.container-spinners');

// inputColor.addEventListener('change', (e) => {
//   const color = e.target.value;
//   containerSpinners.style.setProperty('--color', color);
// });

// inputBackgroundColor.addEventListener('change', (e) => {
//   const color = e.target.value;
//   containerSpinners.style.setProperty('--background-color', color);
// });

export default {}
</script>


<style lang="scss" scoped>
  @import '../scss/variables/colors';

  .container-spinners {
    --color: #FFF;
    --background-color: #333;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .spinner {
    background-color: var(--background-color);
    border-radius: 5px;
    height: 220px;
    margin: 14px;
    position: relative;
    width: 250px;
  }

  .spinner-flex {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  // spinner 1
  .spinner-1 {
    height: 80px;
    left: 0;
    margin: 0 auto;
    position: absolute;
    right: 0;
    top: 30%;
    width: 80px;

    &:before, &:after {
      animation: spinner1 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
      border: 4px solid var(--color);
      border-radius: 50%;
      content: '';
      left: 0;
      margin: 0 auto;
      position: absolute;
      right: 0;
    }

    &:before {
      height: 50px;
      top: 10px;
      width: 50px;
    }

    &:after {
      animation-delay: -0.5s;
      height: 70px;
      width: 70px;
    }
  }

  .spinner-1-text {
    bottom: -14px;
    color: var(--color);
    font-size: 12px;
    left: 0;
    position: absolute;
    right: 0;
    text-align: center;
  }

  @keyframes spinner1 {
    from {
      transform: scale(0);
      opacity: 1;
    }
    to {
      transform: scale(1);
      opacity: 0;
    }
  }
  // end spinner 1

  // spinner 2
  .spinner-2 {

    &::after, &::before {
      animation: spinner2 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border: 6px solid;
      border-color: var(--color) transparent transparent transparent;
      border-radius: 50%;
      content: '';
      height: 50px;
      left: 90px;
      position: absolute;
      top: 80px;
      width: 50px;
    }

    &::after {
      animation-delay: -0.3s;
    }

    &::before {
      animation-delay: -0.15s;
    }
  }

  @keyframes spinner2 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  // end spinner 2

  // spinner 3 - adaptaded of https://loading.io/css/
  .spinner-3 {
    div {
      animation: spinner2 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      left: -32px;
      position: relative;
      top: -32px;
      transform-origin: 32px 32px;

      &:after {
        background-color: var(--color);
        border-radius: 50%;
        content: " ";
        height: 6px;
        margin: -3px 0 0 -3px;
        position: absolute;
        width: 6px;
      }

      @for $i from 1 through 8 {
        &:nth-child(#{$i}) {
          animation-delay: -#{$i * 0.036}s;

          &::after {
            left: #{55 - $i*5}px;
          }
        }
      }

      &:nth-child(1)::after {
        top: 50px;
      }

      &:nth-child(2)::after {
        top: 54px;
      }

      &:nth-child(3)::after {
        top: 57px;
      }

      &:nth-child(4)::after {
        top: 58px;
      }

      &:nth-child(5)::after {
        top: 57px;
      }

      &:nth-child(6)::after {
        top: 54px;
      }

      &:nth-child(7)::after {
        top: 50px;
      }

      &:nth-child(8)::after {
        top: 45px;
      }
    }
  }
  // end spinner 3

  // spinner 4 - adaptaded of http://tobiasahlin.com/spinkit/
  .spinner-4-wrapper {
    animation: spinner4-rotate 2s infinite linear;
    height: 40px;
    position: relative;
    width: 40px;
  }

  .spinner-4-dot1, .spinner-4-dot2 {
    animation: spinner4-bounce 2s infinite ease-in-out;
    background-color: var(--color);
    border-radius: 50%;
    height: 60%;
    position: absolute;
    top: 0;
    width: 60%;
  }

  .spinner-4-dot2 {
    animation-delay: -1s;
    bottom: 0;
    top: auto;
  }

  @keyframes spinner4-rotate { 100% { transform: rotate(360deg); }}

  @keyframes spinner4-bounce {
    0%, 100% {
      transform: scale(0);
    } 50% {
      transform: scale(1);
    }
  }
  // end spinner 4

  // spinner 5
  .spinner-5-wrapper {
    height: 40px;
    position: relative;
    width: 40px;
  }

  .spinner-5-wrapper::after, .spinner-5-wrapper::before {
    animation: spinner5-bounce 2s infinite ease-in-out;
    border-radius: 50%;
    background-color: var(--color);
    content: '';
    height: 100%;
    left: 0;
    opacity: 0.6;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .spinner-5-wrapper::before {
    animation-delay: -1s;
  }

  @keyframes spinner5-bounce {
    0%, 100% {
      transform: scale(0);
    } 50% {
      transform: scale(1);
    }
  }
  // end spinner 5

  // spinner 6 - adaptaded of https://codepen.io/junglelin/pen/epGNxJ
  .spinner-6-wrapper {
    height: 50px;
    position: relative;
    width: 50px;

    &:before,
    &:after {
      animation: spinner6 2.0s linear infinite;
      border: 1px dotted var(--color);
      border-radius: 50%;
      content: "";
      height: 100%;
      left: 0;
      opacity: 0.6;
      position: absolute;
      top: 0;
      width: 100%;
    }

    &:after {
      animation-delay: -1s;
    }
  }

  @keyframes spinner6 {
    0% {
      transform: scale(0);
    }
    20% {
      transform: scale(1);
    }
    40% {
      transform: scale(1.5);
    }
    60% {
      transform: scale(2);
      opacity: .5;
    }
    80% {
      transform: scale(2.5);
      opacity: .25;
    }
    100% {
      transform: scale(3);
      opacity: 0;
    }
  }
  // end spinner 6

  // spinner 7
  .spinner-7-wrapper {
    animation: spinner7 1.7s infinite ease, spinner2 1.7s infinite ease;
    border-radius: 50%;
    color: var(--color);
    font-size: 50px;
    height: 50px;
    overflow: hidden;
    text-indent: -999px;
    width: 50px;
  }

  @keyframes spinner7 {
    0% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    5%,
    95% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    10%,
    59% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
    }
    20% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;
    }
    38% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;
    }
    100% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
  }
  // end spinner 7

  // spinner 8
  .spinner-8,
  .spinner-8::before,
  .spinner-8::after {
    animation: spinner8 1.8s infinite ease-in-out;
    animation-fill-mode: both;
    border-radius: 50%;
    height: 20px;
    width: 20px;
  }

  .spinner-8 {
    animation-delay: -0.16s;
    color: var(--color);
    font-size: 10px;
    position: relative;
    text-indent: -999px;
    top: -25px;
  }

  .spinner-8::before,
  .spinner-8::after {
    content: '';
    position: absolute;
    top: 0;
  }
  .spinner-8::before {
    animation-delay: -0.32s;
    left: -3.5em;
  }

  .spinner-8::after {
    left: 3.5em;
  }

  @keyframes spinner8 {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
  // end spinner 8

  // spinner 9
  .spinner-9,
  .spinner-9:after {
    border-radius: 50%;
    height: 80px;
    width: 80px;
  }

  .spinner-9 {
    animation: spinner2 1.1s infinite linear;
    border: 10px solid;
    border-color: $black-semi-transparent var(--color) $black-semi-transparent $black-semi-transparent;
  }
  // end spinner 9

  // spinner 10
  .spinner-10 {
    flex-direction: column;
  }

  .spinner-10-dots {
    display: flex;
    justify-content: center;
    width: 50px;
  }

  .spinner-10-dot {
    animation: spinner10 1s ease-in infinite;
    background-color: var(--color);
    border-radius: 10px;
    height: 10px;
    transform-origin: bottom;
    width: 10px;
  }

  .spinner-10-text {
    color: var(--color);
    font-size: 11px;
    margin: 10px;
  }

  @keyframes spinner10 {
    0% {
      transform: scale(1.5, 0.5);
    }
    20% {
      transform: scaleY(1.2);
    }
    40% {
      transform: translateY(-50px);
    }
    70% {
      transform: translateY(-55px);
    }
    80% {
      transform: translateY(-50px);
    }
    90% {
      transform: translateY(0);
    }
    100% {
      transform: scale(1.5, 0.5);
    }
  }
  // end spinner 10

  // spinner 11
  .spinner-11-circle {
    border-radius: 50%;
    border: 2px solid;
    position: absolute;
    transform-origin: 50% 50%;
    transform-style: preserve-3d;
  }

  .spinner-11-circle1 {
    animation : spinner-11-rotate1 1s infinite linear;
    border-color : var(--color);
    height: 100px;
    width: 100px;
  }

  .spinner-11-circle2 {
    animation : spinner-11-rotate2 1s infinite linear;
    border-color : rgba(255, 255, 255, .7);
    height: 70px;
    width: 70px;
  }

  .spinner-11-circle3 {
    animation: spinner-11-rotate3 1s infinite linear;
    border-color : rgba(255, 255, 255, .45);
    height: 10px;
    width: 10px;
  }

  @keyframes spinner-11-rotate1 {
    0% { transform: rotateZ(20deg) rotateY(0deg) }
    100% { transform: rotateZ(100deg) rotateY(360deg) }
  }

  @keyframes spinner-11-rotate2 {
    0% { transform: rotateZ(100deg) rotateX(0deg) }
    100% { transform: rotateZ(0deg) rotateX(360deg) }
  }

  @keyframes spinner-11-rotate3 {
    0% { transform: rotateZ(100deg) rotateX(-360deg) }
    100% { transform: rotateZ(-360deg) rotateX(360deg) }
  }
  // end spinner 11

  // spinner 12
  .spinner-12 {
    height: 70px;
    transform: rotateZ(45deg);
    width: 70px;
  }

  .spinner-12-cube {
    float: left;
    height: 50%;
    transform: scale(1.1) rotateZ(0);
    width: 50%;

    &:before {
      animation: cssload-fold-thecube 2.76s infinite linear both;
      background-color: var(--color);
      content: "";
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      transform-origin: 100% 100%;
      width: 100%;
    }
  }

  .spinner-12-c2 {
    transform: scale(1.1) rotateZ(90deg);

    &::before {
      animation-delay: 0.35s;
    }
  }

  .spinner-12-c3 {
    transform: scale(1.1) rotateZ(180deg);

    &::before {
      animation-delay: 0.69s;
    }
  }

  .spinner-12-c4 {
    transform: scale(1.1) rotateZ(270deg);

    &::before {
      animation-delay: 1.04s;
    }
  }

  @keyframes cssload-fold-thecube {
    0%, 10% {
      transform: perspective(129px) rotateX(-180deg);
      opacity: 0;
    }
    25%, 75% {
      transform: perspective(129px) rotateX(0deg);
      opacity: 1;
    }
    90%, 100% {
      transform: perspective(129px) rotateY(180deg);
      opacity: 0;
    }
  }
  // end spinner 12

  // spinner 13
  .spinner-13,
  .spinner-13::before,
  .spinner-13::after {
    animation: spinner2 1150ms linear infinite;
    border: 1px solid var(--color);
    border-left-color: #737373;
    border-radius: 50%;
    left: 50%;
    position: absolute;
    top: 50%;
  }

  .spinner-13 {
    height: 50px;
    margin: -24px 0 0 -24px;
    width: 50px;
  }

  .spinner-13::before {
    animation-duration: 1150ms;
    content: '';
    height: 44px;
    margin: -22px 0 0 -22px;
    width: 44px;
  }

  .spinner-13::after {
    animation-duration: 2300ms;
    content: '';
    height: 56px;
    margin: -28px 0 0 -28px;
    width: 56px;
  }
  // end spinner 13

  // spinner 14
  .spinner-14 {
    height: 50px;
    width: 50px;

    .spinner-14-item {
      animation: spinner-14 1.3s infinite ease-in-out;
      background-color: var(--color);
      height: 33%;
      width: 33%;
      float: left;

      &:first-child, &:nth-child(5), &:last-child { animation-delay: 0.2s; }
      &:nth-child(2), &:nth-child(6) { animation-delay: 0.3s; }
      &:nth-child(3) { animation-delay: 0.4s; }
      &:nth-child(4), &:nth-child(8) { animation-delay: 0.1s; }
      &:nth-child(7) { animation-delay: 0s; }
    }
  }

  @keyframes spinner-14 {
    0%, 70%, 100% {
      transform: scale3D(1, 1, 1);
    } 35% {
      transform: scale3D(0, 0, 1);
    }
  }
  // end spinner 14

  // spinner 15
  .spinner-15 {
    height: 33px;
    width: 33px;

    &::after, &::before {
      animation: spinner2 2.88s linear infinite;
      content: '';
      border: 1px solid var(--color);
      height: 30px;
      position: absolute;
      width: 30px;
    }

    &::before {
      animation-direction: reverse;
      height: 43px;
      margin-left: -6.5px;
      margin-top: -6.5px;
      width: 43px;
    }
  }
  // end spinner 15

  .container-options {
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    padding: 14px;
  }

  .control-form {
    margin-left: 8px;
    text-align: center;
  }

  .input-control {
    border: 1px solid darken($grey, 5%);
    cursor: pointer;
    display: block;
    height: 30px;
    margin: 8px auto 0;
    width: 50px;
  }
</style>
