export function spacesToHyphen(str) {
  return str.replace(/\s/g, '-')
}

export const getComponentsCode = results => {
  console.log(results)
  return results.map(comp => (
    {
      title: comp.name,
      html: comp.object.entries[0].object.text,
      css: comp.object.entries[1].object.text,
      scss: comp.object.entries[2].object.text
    }
  ))
  }