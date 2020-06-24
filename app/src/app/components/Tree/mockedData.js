import { FileTypes } from '~constants/interfaces/recipe';

const TreeComponentsExample = {
  name: 'Button-1',
  files: [
    {
      type: FileTypes.file,
      name: 'styles.css',
      lang: 'css',
      content:
        "button.btn,button.btn:active,button.btn:focus{outline:none}.btn-1{display:flex;flex-wrap:wrap;width:100%;--btn-radius: 130px;--btn-border-radius: 0;--btn-border: 2px;--btn-color-1: #DF0000;--btn-color-2: #AD0000;--btn-text-color: #FFF;--btn-font-size: 10pt;--btn-trn-duration: 150ms;--btn-color-1: #00F1D1;--btn-color-2: #0077FF;--btn-text-color: hsl(0, 0%, 15%)}.btn-1{align-items:center;background:none;border:0;border-radius:var(--btn-border-radius);cursor:pointer;display:flex;font-size:var(--btn-font-size);justify-content:center;overflow:hidden;padding:var(--btn-border);position:relative;transition-duration:var(--btn-trn-duration);transition-property:transform}.btn-1:disabled{--btn-color-1: #FEFEFE;--btn-color-2: #878787;--btn-text-color: var(--btn-color-2);pointer-events:none}.btn-1>*{pointer-events:none;user-select:none}.btn-1:hover{transform:scale(1.02)}.btn-1:active{transform:scale(0.95)}.btn-1 .btn__content{align-items:center;background:white;border-radius:var(--btn-border-radius);color:var(--btn-text-color);font-weight:800;letter-spacing:1px;text-transform:uppercase;display:flex;justify-content:center;padding:12px 25px;position:relative}.btn-1 .btn__content::before{animation:rotate 1s infinite linear;animation-play-state:paused;background-image:linear-gradient(var(--btn-color-1), var(--btn-color-2));border-radius:var(--btn-radius);content:'';height:var(--btn-radius);position:absolute;transform:scale(1);transform-origin:center;transition:transform 500ms;width:var(--btn-radius);z-index:-1}.btn-1:hover .btn__content::before,.btn-1:focus .btn__content::before{animation-play-state:running}@keyframes rotate{0%{transform:rotate(0deg)}100%{transform:rotate(359deg)}}\n\n/*# sourceMappingURL=styles.css */"
    },
    {
      type: FileTypes.file,
      name: 'index.html',
      lang: 'html',
      content:
        '<div class="column center btn-group-1">\n\t<button class="btn btn-1 m-bottom-2" disabled="">\n\t\t<div class="btn__content">cancel</div>\n\t</button>\n\t<button type="button" class="btn btn-1">\n\t\t<div class="btn__content">submit</div>\n\t</button>\n</div>'
    },
    {
      type: FileTypes.file,
      name: 'readme.md',
      lang: 'markdown',
      content: '##HOLA SOY UN README'
    },
    {
      type: FileTypes.folder,
      name: 'components',
      content: [
        {
          type: FileTypes.folder,
          name: 'IconButton',
          content: [
            {
              type: FileTypes.file,
              name: 'EstoyEnLaCarpeta.md',
              lang: 'md',
              content: '¿Viste? Estoy dentro de la carpeta.'
            }
          ]
        }
      ]
    }
  ]
};

export default TreeComponentsExample;
