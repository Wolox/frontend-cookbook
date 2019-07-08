export default [
  {
    title: 'waves',
    html: `
      <div class='spinner-1'></div>
    `,
    css: `.spinner-1{height:80px;left:0;margin:0 auto;position:absolute;right:0;top:30%;width:80px}.spinner-1::before,.spinner-1::after{animation:spinner1 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;border:4px solid #fff;border-radius:50%;content:'';left:0;margin:0 auto;position:absolute;right:0}.spinner-1::before{height:50px;top:10px;width:50px}.spinner-1::after{animation-delay:-0.5s;height:70px;width:70px}.spinner-1-text{bottom:-14px;color:#fff;font-size:12px;left:0;position:absolute;right:0;text-align:center}@keyframes spinner1{from{opacity:1;transform:scale(0)}to{opacity:0;transform:scale(1)}}`
  },
  {
    title: 'circle',
    html: `
    <div class='row center middle'>
      <div class='spinner-2'></div>
    </div>
    `,
    css: `.spinner-2::after,.spinner-2::before{animation:spinner2 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;border:6px solid;border-color:#fff transparent transparent transparent;border-radius:50%;content:'';height:50px;left:0;margin:0 auto;position:absolute;right:0;top:40%;width:50px}.spinner-2::after{animation-delay:-0.3s}.spinner-2::before{animation-delay:-0.15s}@keyframes spinner2{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}`
  },
  {
    title: 'dots',
    html: `
    <div class='spinner-3'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    `,
    css: `@keyframes spinner2{0% {transform: rotate(0deg);}100% {transform: rotate(360deg);}}.spinner-3 div{animation:spinner2 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;left:-32px;position:relative;top:-32px;transform-origin:32px 32px}.spinner-3 div::after{background-color:#fff;border-radius:50%;content:' ';height:6px;margin:-3px 0 0 -3px;position:absolute;width:6px}.spinner-3 div:nth-child(1){animation-delay:-.036s}.spinner-3 div:nth-child(1)::after{left:50px}.spinner-3 div:nth-child(2){animation-delay:-.072s}.spinner-3 div:nth-child(2)::after{left:45px}.spinner-3 div:nth-child(3){animation-delay:-.108s}.spinner-3 div:nth-child(3)::after{left:40px}.spinner-3 div:nth-child(4){animation-delay:-.144s}.spinner-3 div:nth-child(4)::after{left:35px}.spinner-3 div:nth-child(5){animation-delay:-.18s}.spinner-3 div:nth-child(5)::after{left:30px}.spinner-3 div:nth-child(6){animation-delay:-.216s}.spinner-3 div:nth-child(6)::after{left:25px}.spinner-3 div:nth-child(7){animation-delay:-.252s}.spinner-3 div:nth-child(7)::after{left:20px}.spinner-3 div:nth-child(8){animation-delay:-.288s}.spinner-3 div:nth-child(8)::after{left:15px}.spinner-3 div:nth-child(1)::after{top:50px}.spinner-3 div:nth-child(2)::after{top:54px}.spinner-3 div:nth-child(3)::after{top:57px}.spinner-3 div:nth-child(4)::after{top:58px}.spinner-3 div:nth-child(5)::after{top:57px}.spinner-3 div:nth-child(6)::after{top:54px}.spinner-3 div:nth-child(7)::after{top:50px}.spinner-3 div:nth-child(8)::after{top:45px}`
  },
  {
    title: 'dots-couple',
    html: `
    <div class="spinner-4">
      <div class="spinner-4-wrapper">
        <div class="spinner-4-dot1"></div>
        <div class="spinner-4-dot2"></div>
      </div>
    </div>
    `,
    css: `.spinner-4-wrapper{animation:spinner4-rotate 2s infinite linear;height:40px;position:relative;width:40px}.spinner-4-dot1,.spinner-4-dot2{animation:spinner4-bounce 2s infinite ease-in-out;background-color:#fff;border-radius:50%;height:60%;position:absolute;top:0;width:60%}.spinner-4-dot2{animation-delay:-1s;bottom:0;top:auto}@keyframes spinner4-rotate{100%{transform:rotate(360deg)}}@keyframes spinner4-bounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}`
  }
]
