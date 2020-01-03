import './styles.scss'

const urlParams = new URLSearchParams(window.location.search),
  category = urlParams.get('category'),
  component = urlParams.get('component')

let componentHTML, componentStyles

async function componentToMount() {
  const response = await new Promise(async resolve => {
    await import(`../components/${category}/${component}/index.html`).then(resp => { componentHTML = resp.default })
    await import(`../components/${category}/${component}/styles.scss`).then(resp => { componentStyles = resp.default[0][1] })
    /* await import(`../components/${category}/${component}/index.js`).then(resp => {
      console.log(resp)
    }) */
    resolve(componentHTML)
  })
  return response
}

componentToMount().then(() => {
  const shadowHost = document.getElementById('host')
  const shadowRoot = shadowHost.attachShadow({mode: 'closed'})
  shadowRoot.innerHTML = `${componentHTML}<style>${componentStyles}</style>`
})
