export const COMPONENTS = [
  {
    name: 'button-1',
    object: {
      entries: [
        {
          name: 'index.html',
          object: {
            text:
              '<div class="column center btn-group-1">\n  <button class="btn btn-1 m-bottom-2" disabled="">\n    <div class="btn__content">cancel</div>\n  </button>\n  <button type="button" class="btn btn-1">\n    <div class="btn__content">submit</div>\n  </button>\n</div>\n'
          }
        },
        {
          name: 'styles.css',
          object: {
            text:
              "button.btn,button.btn:active,button.btn:focus{outline:none}.btn-1{display:flex;flex-wrap:wrap;width:100%;--btn-radius: 130px;--btn-border-radius: 0;--btn-border: 2px;--btn-color-1: #DF0000;--btn-color-2: #AD0000;--btn-text-color: #FFF;--btn-font-size: 10pt;--btn-trn-duration: 150ms;--btn-color-1: #00F1D1;--btn-color-2: #0077FF;--btn-text-color: hsl(0, 0%, 15%)}.btn-1{align-items:center;background:none;border:0;border-radius:var(--btn-border-radius);cursor:pointer;display:flex;font-size:var(--btn-font-size);justify-content:center;overflow:hidden;padding:var(--btn-border);position:relative;transition-duration:var(--btn-trn-duration);transition-property:transform}.btn-1:disabled{--btn-color-1: #FEFEFE;--btn-color-2: #878787;--btn-text-color: var(--btn-color-2);pointer-events:none}.btn-1>*{pointer-events:none;user-select:none}.btn-1:hover{transform:scale(1.02)}.btn-1:active{transform:scale(0.95)}.btn-1 .btn__content{align-items:center;background:white;border-radius:var(--btn-border-radius);color:var(--btn-text-color);font-weight:800;letter-spacing:1px;text-transform:uppercase;display:flex;justify-content:center;padding:12px 25px;position:relative}.btn-1 .btn__content::before{animation:rotate 1s infinite linear;animation-play-state:paused;background-image:linear-gradient(var(--btn-color-1), var(--btn-color-2));border-radius:var(--btn-radius);content:'';height:var(--btn-radius);position:absolute;transform:scale(1);transform-origin:center;transition:transform 500ms;width:var(--btn-radius);z-index:-1}.btn-1:hover .btn__content::before,.btn-1:focus .btn__content::before{animation-play-state:running}@keyframes rotate{0%{transform:rotate(0deg)}100%{transform:rotate(359deg)}}\n\n/*# sourceMappingURL=styles.css */"
          }
        },
        {
          name: 'styles.scss',
          object: {
            text:
              "button.btn,\nbutton.btn:active,\nbutton.btn:focus {\n  outline: none;\n}\n\n.btn-1 {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  --btn-radius: 130px;\n  --btn-border-radius: 0;\n  --btn-border: 2px;\n  --btn-color-1: #DF0000;\n  --btn-color-2: #AD0000;\n  --btn-text-color: #FFF;\n  --btn-font-size: 10pt;\n  --btn-trn-duration: 150ms;\n  --btn-color-1: #00F1D1;\n  --btn-color-2: #0077FF;\n  --btn-text-color: hsl(0, 0%, 15%);\n}\n\n.btn-1 {\n  align-items: center;\n  background: none;\n  border: 0;\n  border-radius: var(--btn-border-radius);\n  cursor: pointer;\n  display: flex;\n  font-size: var(--btn-font-size);\n  justify-content: center;\n  overflow: hidden;\n  padding: var(--btn-border);\n  position: relative;\n  transition-duration: var(--btn-trn-duration);\n  transition-property: transform;\n}\n\n.btn-1:disabled {\n  --btn-color-1: #FEFEFE;\n  --btn-color-2: #878787;\n  --btn-text-color: var(--btn-color-2);\n  pointer-events: none;\n}\n\n.btn-1 > * {\n  pointer-events: none;\n  user-select: none;\n}\n\n.btn-1:hover {\n  transform: scale(1.02);\n}\n\n.btn-1:active {\n  transform: scale(0.95);\n}\n\n.btn-1 .btn__content {\n  align-items: center;\n  background: white;\n  border-radius: var(--btn-border-radius);\n  color: var(--btn-text-color);\n  font-weight: 800;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  display: flex;\n  justify-content: center;\n  padding: 12px 25px;\n  position: relative;\n}\n\n.btn-1 .btn__content::before {\n  animation: rotate 1s infinite linear;\n  animation-play-state: paused;\n  background-image: linear-gradient(var(--btn-color-1), var(--btn-color-2));\n  border-radius: var(--btn-radius);\n  content: '';\n  height: var(--btn-radius);\n  position: absolute;\n  transform: scale(1);\n  transform-origin: center;\n  transition: transform 500ms;\n  width: var(--btn-radius);\n  z-index: -1;\n}\n\n.btn-1:hover .btn__content::before,\n.btn-1:focus .btn__content::before {\n  animation-play-state: running;\n}\n\n@keyframes rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(359deg);\n  }\n}\n"
          }
        }
      ]
    }
  },
  {
    name: 'button-2',
    object: {
      entries: [
        {
          name: 'index.html',
          object: {
            text:
              '<div class="column center btn-group-2">\n  <button class="btn btn-2 m-bottom-2" disabled="">\n    <div class="btn__content">cancel</div>\n  </button>\n  <button type="button" class="btn btn-2">\n    <div class="btn__content">submit</div>\n  </button>\n</div>\n'
          }
        },
        {
          name: 'styles.css',
          object: {
            text:
              'button.btn,button.btn:active,button.btn:focus{outline:none}.btn{display:flex;flex-wrap:wrap;width:100%;--btn-border-radius: 0;--btn-border: 2px;--btn-color-1: #DF0000;--btn-color-2: #AD0000;--btn-text-color: #FFF;--btn-font-size: 10pt;--btn-trn-duration: 150ms}.btn.btn-2{align-items:center;background-color:var(--btn-color-1);border:0;border-radius:var(--btn-border-radius);box-shadow:1px 1px 0 1px var(--btn-color-2),2px 2px 0 1px var(--btn-color-2),3px 3px 0 1px var(--btn-color-2),4px 4px 0 1px var(--btn-color-2);cursor:pointer;display:flex;font-size:var(--btn-font-size);justify-content:center;padding:var(--btn-border);position:relative;transition-duration:var(--btn-trn-duration);transition-property:transform box-shadow}.btn.btn-2:disabled{--btn-color-1: #DEDEDE;--btn-color-2: #CBCBCB;--btn-text-color: #A9A9A9;box-shadow:1px 1px 0 1px var(--btn-color-2),2px 2px 0 1px var(--btn-color-2);pointer-events:none;transform:translate(2px, 2px)}.btn.btn-2>*{pointer-events:none;user-select:none}.btn.btn-2:active{transform:translate(4px, 4px);box-shadow:0 0 0 transparent}.btn.btn-2 .btn__content{align-items:center;border-radius:var(--btn-border-radius);color:var(--btn-text-color);font-weight:800;letter-spacing:1px;text-transform:uppercase;display:flex;justify-content:center;padding:10px 25px;position:relative}\n\n/*# sourceMappingURL=styles.css */'
          }
        },
        {
          name: 'styles.scss',
          object: {
            text:
              'button.btn,\nbutton.btn:active,\nbutton.btn:focus {\n  outline: none;\n}\n\n.btn {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  --btn-border-radius: 0;\n  --btn-border: 2px;\n  --btn-color-1: #DF0000;\n  --btn-color-2: #AD0000;\n  --btn-text-color: #FFF;\n  --btn-font-size: 10pt;\n  --btn-trn-duration: 150ms;\n}\n\n.btn.btn-2 {\n  align-items: center;\n  background-color: var(--btn-color-1);\n  border: 0;\n  border-radius: var(--btn-border-radius);\n  box-shadow: \n    1px 1px 0 1px var(--btn-color-2),\n    2px 2px 0 1px var(--btn-color-2),\n    3px 3px 0 1px var(--btn-color-2),\n    4px 4px 0 1px var(--btn-color-2);\n  cursor: pointer;\n  display: flex;\n  font-size: var(--btn-font-size);\n  justify-content: center;\n  padding: var(--btn-border);\n  position: relative;\n  transition-duration: var(--btn-trn-duration);\n  transition-property: transform box-shadow;\n}\n\n.btn.btn-2:disabled {\n  --btn-color-1: #DEDEDE;\n  --btn-color-2: #CBCBCB;\n  --btn-text-color: #A9A9A9;\n  box-shadow: \n    1px 1px 0 1px var(--btn-color-2),\n    2px 2px 0 1px var(--btn-color-2);\n  pointer-events: none;\n  transform: translate(2px, 2px);\n}\n\n.btn.btn-2 > * {\n  pointer-events: none;\n  user-select: none;\n}\n\n.btn.btn-2:active {\n  transform: translate(4px, 4px);\n  box-shadow: 0 0 0 transparent;\n}\n\n.btn.btn-2 .btn__content {\n  align-items: center;\n  border-radius: var(--btn-border-radius);\n  color: var(--btn-text-color);\n  font-weight: 800;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  display: flex;\n  justify-content: center;\n  padding: 10px 25px;\n  position: relative;\n}\n'
          }
        }
      ]
    }
  },
  {
    name: 'button-3',
    object: {
      entries: [
        {
          name: 'index.html',
          object: {
            text:
              '<div class="column center btn-group-3">\n  <button class="btn btn-3 m-bottom-2" disabled="">\n    <div class="btn__content">cancel</div>\n  </button>\n  <button type="button" class="btn btn-3">\n    <div class="btn__content">submit</div>\n  </button>\n</div>\n'
          }
        },
        {
          name: 'styles.css',
          object: {
            text:
              ".btn{display:flex;flex-wrap:wrap;width:100%;--btn-radius: 130px;--btn-border-radius: 0;--btn-border: 2px;--btn-color-1: #DF0000;--btn-color-2: #AD0000;--btn-text-color: #FFF;--btn-font-size: 10pt;--btn-trn-duration: 150ms;--btn-skew-angle: -20deg;--btn-content-skew-angle: calc(var(--btn-skew-angle) * -1)}.btn.btn-3{align-items:center;background:none;border:var(--btn-border) solid var(--btn-color-1);border-radius:var(--btn-border-radius);cursor:pointer;display:flex;font-size:var(--btn-font-size);justify-content:center;overflow:hidden;padding:var(--btn-border);position:relative;transition-duration:var(--btn-trn-duration);transition-property:transform;transform:skewX(var(--btn-skew-angle))}.btn.btn-3:disabled{--btn-color-1: #DEDEDE;--btn-color-2: #CBCBCB;--btn-text-color: #A9A9A9;pointer-events:none}.btn.btn-3>*{pointer-events:none;user-select:none}.btn.btn-3 .btn__content{align-items:center;border-radius:var(--btn-border-radius);color:var(--btn-color-1);font-weight:800;letter-spacing:1px;text-transform:uppercase;display:flex;justify-content:center;padding:10px 25px;position:relative;transition-duration:var(--btn-trn-duration);transition-property:color;transform:skewX(var(--btn-content-skew-angle))}.btn.btn-3::before{background-color:var(--btn-color-1);content:'';height:100%;left:0;position:absolute;top:0;width:100%;z-index:-1;transition:var(--btn-trn-duration);transform:translateX(-100%)}.btn.btn-3:hover .btn__content{color:var(--btn-text-color)}.btn.btn-3:hover::before{transform:translateX(0)}.btn.btn-3:active{transform:skewX(var(--btn-skew-angle)) scale(0.95)}\n\n/*# sourceMappingURL=styles.css */"
          }
        },
        {
          name: 'styles.scss',
          object: {
            text:
              ".btn {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  --btn-radius: 130px;\n  --btn-border-radius: 0;\n  --btn-border: 2px;\n  --btn-color-1: #DF0000;\n  --btn-color-2: #AD0000;\n  --btn-text-color: #FFF;\n  --btn-font-size: 10pt;\n  --btn-trn-duration: 150ms;\n  --btn-skew-angle: -20deg;\n  --btn-content-skew-angle: calc(var(--btn-skew-angle) * -1);\n}\n\n.btn.btn-3 {\n  align-items: center;\n  background: none;\n  border: var(--btn-border) solid var(--btn-color-1);\n  border-radius: var(--btn-border-radius);\n  cursor: pointer;\n  display: flex;\n  font-size: var(--btn-font-size);\n  justify-content: center;\n  overflow: hidden;\n  padding: var(--btn-border);\n  position: relative;\n  transition-duration: var(--btn-trn-duration);\n  transition-property: transform;\n  transform: skewX(var(--btn-skew-angle));\n}\n\n.btn.btn-3:disabled {\n  --btn-color-1: #DEDEDE;\n  --btn-color-2: #CBCBCB;\n  --btn-text-color: #A9A9A9;\n  pointer-events: none;\n}\n\n.btn.btn-3 > * {\n  pointer-events: none;\n  user-select: none;\n}\n\n.btn.btn-3 .btn__content {\n  align-items: center;\n  border-radius: var(--btn-border-radius);\n  color: var(--btn-color-1);\n  font-weight: 800;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  display: flex;\n  justify-content: center;\n  padding: 10px 25px;\n  position: relative;\n  transition-duration: var(--btn-trn-duration);\n  transition-property: color;\n  transform: skewX(var(--btn-content-skew-angle));\n}\n\n.btn.btn-3::before {\n  background-color: var(--btn-color-1);\n  content: '';\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: -1;\n  transition: var(--btn-trn-duration);\n  transform: translateX(-100%);\n}\n\n.btn.btn-3:hover .btn__content{\n  color: var(--btn-text-color);\n}\n\n.btn.btn-3:hover::before {\n  transform: translateX(0);\n}\n\n.btn.btn-3:active {\n  transform: skewX(var(--btn-skew-angle)) scale(0.95);\n}\n"
          }
        }
      ]
    }
  },
  {
    name: 'button-4',
    object: {
      entries: [
        {
          name: 'index.html',
          object: {
            text:
              '<div class="column center btn-group-4">\n  <button class="btn btn-4 m-bottom-2" disabled="">\n    <div class="btn__content">cancel</div>\n  </button>\n  <button type="button" class="btn btn-4">\n    <div class="btn__content">submit</div>\n  </button>\n</div>\n'
          }
        },
        {
          name: 'styles.css',
          object: {
            text:
              "button.btn,button.btn:active,button.btn:focus{outline:none}.btn{display:flex;flex-wrap:wrap;width:100%;--btn-radius: 130px;--btn-border-radius: 0;--btn-border: 2px;--btn-color-1: #DF0000;--btn-color-2: #AD0000;--btn-text-color: #FFF;--btn-font-size: 10pt;--btn-trn-duration: 150ms}.btn.btn-4{perspective:1000px;perspective-origin:left center}.btn.btn-4{align-items:center;background:none;border:0;border-radius:var(--btn-border-radius);cursor:pointer;display:flex;font-size:var(--btn-font-size);justify-content:center;padding:var(--btn-border);position:relative;transition:var(--btn-trn-duration);transform-origin:bottom;transition-duration:var(--btn-trn-duration);transition-property:transform}.btn.btn-4:disabled{--btn-color-1: #DEDEDE;--btn-color-2: #CBCBCB;--btn-text-color: #A9A9A9;pointer-events:none}.btn.btn-4>*{pointer-events:none;user-select:none}.btn.btn-4 .btn__content{align-items:center;border-radius:var(--btn-border-radius);color:var(--btn-color-1);font-weight:800;letter-spacing:1px;text-transform:uppercase;display:flex;justify-content:center;padding:10px 25px;position:relative;transition-duration:var(--btn-trn-duration);transition-property:color}.btn.btn-4::before{background-color:var(--btn-color-1);content:'';height:100%;left:0;position:absolute;top:0;width:100%;z-index:-1;transition:var(--btn-trn-duration);transform-origin:bottom;transform:rotateX(90deg)}.btn.btn-4:hover .btn__content{color:var(--btn-text-color)}.btn.btn-4:hover::before{transform:translateX(0)}.btn.btn-4:active{transform:rotateX(30deg)}\n\n/*# sourceMappingURL=styles.css */"
          }
        },
        {
          name: 'styles.scss',
          object: {
            text:
              "button.btn,\nbutton.btn:active,\nbutton.btn:focus {\n  outline: none;\n}\n\n.btn {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  --btn-radius: 130px;\n  --btn-border-radius: 0;\n  --btn-border: 2px;\n  --btn-color-1: #DF0000;\n  --btn-color-2: #AD0000;\n  --btn-text-color: #FFF;\n  --btn-font-size: 10pt;\n  --btn-trn-duration: 150ms;\n}\n\n.btn.btn-4 {\n  perspective: 1000px;\n  perspective-origin: left center;\n}\n\n.btn.btn-4 {\n  align-items: center;\n  background: none;\n  border: 0;\n  border-radius: var(--btn-border-radius);\n  cursor: pointer;\n  display: flex;\n  font-size: var(--btn-font-size);\n  justify-content: center;\n  padding: var(--btn-border);\n  position: relative;\n  transition: var(--btn-trn-duration);\n  transform-origin: bottom;\n  transition-duration: var(--btn-trn-duration);\n  transition-property: transform;\n}\n\n.btn.btn-4:disabled {\n  --btn-color-1: #DEDEDE;\n  --btn-color-2: #CBCBCB;\n  --btn-text-color: #A9A9A9;\n  pointer-events: none;\n}\n\n.btn.btn-4 > * {\n  pointer-events: none;\n  user-select: none;\n}\n\n.btn.btn-4 .btn__content {\n  align-items: center;\n  border-radius: var(--btn-border-radius);\n  color: var(--btn-color-1);\n  font-weight: 800;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  display: flex;\n  justify-content: center;\n  padding: 10px 25px;\n  position: relative;\n  transition-duration: var(--btn-trn-duration);\n  transition-property: color;\n}\n\n.btn.btn-4::before {\n  background-color: var(--btn-color-1);\n  content: '';\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: -1;\n  transition: var(--btn-trn-duration);\n  transform-origin: bottom;\n  transform: rotateX(90deg);\n}\n\n.btn.btn-4:hover .btn__content{\n  color: var(--btn-text-color);\n}\n\n.btn.btn-4:hover::before {\n  transform: translateX(0);\n}\n\n.btn.btn-4:active {\n  transform: rotateX(30deg);\n}\n"
          }
        }
      ]
    }
  },
  {
    name: 'button-5',
    object: {
      entries: [
        {
          name: 'index.html',
          object: {
            text:
              '<div class="column center btn-group-5">\n  <button class="btn btn-5 m-bottom-2" disabled="">\n    <span class="btn__content">cancel</span>\n  </button>\n  <button type="button" class="btn btn-5">\n    <span class="btn__content">submit</span>\n  </button>\n</div>\n'
          }
        },
        {
          name: 'styles.css',
          object: {
            text:
              "button.btn,button.btn:active,button.btn:focus{outline:none}.btn{display:flex;flex-wrap:wrap;width:100%;--btn-radius: 130px;--btn-border-radius: 0;--btn-border: 2px;--btn-color-1: #DF0000;--btn-color-2: #AD0000;--btn-text-color: #FFF;--btn-font-size: 10pt;--btn-trn-duration: 150ms}.btn.btn-5{--btn-border-radius: 20px}.btn.btn-5{align-items:center;background:none;border:0;border-radius:var(--btn-border-radius);cursor:pointer;display:flex;font-size:var(--btn-font-size);justify-content:center;overflow:hidden;padding:var(--btn-border);position:relative;transition:var(--btn-trn-duration);transition-duration:var(--btn-trn-duration);transition-property:transform}.btn.btn-5:disabled{--btn-color-1: #DEDEDE;--btn-color-2: #CBCBCB;--btn-text-color: #A9A9A9;pointer-events:none}.btn.btn-5:disabled .btn__content{transform:none}.btn.btn-5:disabled::before{transform:translateX(-100%)}.btn.btn-5>*{pointer-events:none;user-select:none}.btn.btn-5 .btn__content{align-items:center;border-radius:var(--btn-border-radius);color:var(--btn-color-1);font-weight:800;letter-spacing:1px;text-transform:uppercase;display:flex;justify-content:center;padding:10px 25px;position:relative;transform:translateX(calc(var(--btn-border-radius)));transition-duration:var(--btn-trn-duration);transition-property:transform color}.btn.btn-5::before{background-color:var(--btn-color-1);border-radius:var(--btn-border-radius);content:'';height:100%;left:0;position:absolute;top:0;width:100%;z-index:-1;transition:var(--btn-trn-duration);transform:translateX(calc(-100% + calc(var(--btn-border-radius) * 2)))}.btn.btn-5:hover .btn__content{color:var(--btn-text-color);transform:translateX(0)}.btn.btn-5:hover::before{transform:translateX(0)}.btn.btn-5:active::before{transform:scale(0.7)}\n\n/*# sourceMappingURL=styles.css */"
          }
        },
        {
          name: 'styles.scss',
          object: {
            text:
              "button.btn,\nbutton.btn:active,\nbutton.btn:focus {\n  outline: none;\n}\n\n.btn {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  --btn-radius: 130px;\n  --btn-border-radius: 0;\n  --btn-border: 2px;\n  --btn-color-1: #DF0000;\n  --btn-color-2: #AD0000;\n  --btn-text-color: #FFF;\n  --btn-font-size: 10pt;\n  --btn-trn-duration: 150ms;\n}\n\n.btn.btn-5 {\n  --btn-border-radius: 20px;\n}\n\n.btn.btn-5 {\n  align-items: center;\n  background: none;\n  border: 0;\n  border-radius: var(--btn-border-radius);\n  cursor: pointer;\n  display: flex;\n  font-size: var(--btn-font-size);\n  justify-content: center;\n  overflow: hidden;\n  padding: var(--btn-border);\n  position: relative;\n  transition: var(--btn-trn-duration);\n  transition-duration: var(--btn-trn-duration);\n  transition-property: transform;\n}\n\n.btn.btn-5:disabled {\n  --btn-color-1: #DEDEDE;\n  --btn-color-2: #CBCBCB;\n  --btn-text-color: #A9A9A9;\n  pointer-events: none;\n}\n\n.btn.btn-5:disabled .btn__content {\n  transform: none;\n}\n\n.btn.btn-5:disabled::before {\n  transform: translateX(-100%);\n}\n\n.btn.btn-5 > * {\n  pointer-events: none;\n  user-select: none;\n}\n\n.btn.btn-5 .btn__content {\n  align-items: center;\n  border-radius: var(--btn-border-radius);\n  color: var(--btn-color-1);\n  font-weight: 800;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  display: flex;\n  justify-content: center;\n  padding: 10px 25px;\n  position: relative;\n  transform: translateX(calc(var(--btn-border-radius)));\n  transition-duration: var(--btn-trn-duration);\n  transition-property: transform color;\n}\n\n.btn.btn-5::before {\n  background-color: var(--btn-color-1);\n  border-radius: var(--btn-border-radius);\n  content: '';\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: -1;\n  transition: var(--btn-trn-duration);\n  transform: translateX(calc(-100% + calc(var(--btn-border-radius) * 2)));\n}\n\n.btn.btn-5:hover .btn__content{\n  color: var(--btn-text-color);\n  transform: translateX(0);\n}\n\n.btn.btn-5:hover::before {\n  transform: translateX(0);\n}\n\n.btn.btn-5:active::before {\n  transform: scale(0.7);\n}\n"
          }
        }
      ]
    }
  }
];

export const getComponentsCode = () =>
  COMPONENTS.map(comp => ({
    title: comp.name,
    html: comp.object.entries[0].object.text,
    css: comp.object.entries[1].object.text,
    scss: comp.object.entries[2].object.text
  }));
