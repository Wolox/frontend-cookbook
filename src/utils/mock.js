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
  .item-checkbox {
    --primary-color: #636060;
    --secondary-color: #FFF;
    --active-color: #00D478;
  }

  .checkbox {
    display: none;
  }  
  
  .checkbox-2 > label {
    cursor: pointer;
    height: 18px;
    margin: 0 auto;
    position: relative;
    transform: translate3d(0, 0, 0);
    width: 18px;
 }
  .checkbox-2 > label::before {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    content: '';
    height: 48px;
    left: -15px;
    opacity: 0;
    position: absolute;
    top: -15px;
    transition: opacity 330ms cubic-bezier(0.79, 0.01, 0.375, 0.995);
    width: 48px;
 }
  .checkbox-2 > label svg {
    fill: none;
    position: relative;
    stroke: var(--primary-color);
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1.5;
    transform: translate3d(0, 0, 0);
    transition: all 330ms cubic-bezier(0.79, 0.01, 0.375, 0.995);
    z-index: 1;
 }
  .checkbox-2 > label svg path {
    stroke-dasharray: 60;
    stroke-dashoffset: 0;
 }
  .checkbox-2 > label svg polyline {
    stroke-dasharray: 22;
    stroke-dashoffset: 66;
 }
  .checkbox-2 > label:hover::before {
    opacity: 1;
 }
  .checkbox-2 > label:hover svg {
    stroke: var(--active-color);
 }
  .checkbox-2 > input:checked + label svg {
    stroke: var(--active-color);
 }
  .checkbox-2 > input:checked + label svg path {
    stroke-dashoffset: 60;
    transition: all 0.3s linear;
 }
  .checkbox-2 > input:checked + label svg polyline {
    stroke-dashoffset: 42;
    transition: all 0.2s linear;
    transition-delay: 0.15s;
 }
 
  `,
  author: 'FrankieCapo123'
}