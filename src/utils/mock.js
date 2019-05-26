export default {
  title: 'Checkbox 2',
  html: `
  <div class="item-checkbox">
    <div class="checkbox-2">
      <input id="checkbox-2" class="checkbox" type="checkbox" />
      <label for="checkbox-2">
        <svg width="18px" height="18px" viewbox="0 0 18 18">
          <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z" />
          <polyline points="1 9 7 14 15 4" />
        </svg>
      </label>
    </div>
  </div>
  `,
  css: `
  .checkbox-2 {
    & > label {
      cursor: pointer;
      height: 18px;
      margin: 0 auto;
      position: relative;
      transform: translate3d(0,0,0);
      width: 18px;
  
      &::before {
        background-color: $black-semi-transparent;
        border-radius: 50%;
        content: '';
        height: 48px;
        left: -15px;
        opacity: 0;
        position: absolute;
        top: -15px;
        transition: opacity $transition-duration $transition-function;
        width: 48px;
      }
  
      svg {
        fill: none;
        position: relative;
        stroke: var(--primary-color);
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 1.5;
        transform: translate3d(0,0,0);
        transition: all $transition-duration $transition-function;
        z-index: 1;
  
        path {
          stroke-dasharray: 60;
          stroke-dashoffset: 0;
        }
  
        polyline {
          stroke-dasharray: 22;
          stroke-dashoffset: 66;
        }
      }
  
      &:hover {
        &::before {
          opacity: 1;
        }
  
        svg {
          stroke: var(--active-color);
        }
      }
    }
  
    & > input:checked + label {
      svg {
        stroke: var(--active-color);
  
        path {
          stroke-dashoffset: 60;
          transition: all 0.3s linear;
        }
  
        polyline {
          stroke-dashoffset: 42;
          transition: all 0.2s linear;
          transition-delay: 0.15s;
        }
      }
    }
  }
  `,
  author: 'FrankieCapo123'
}