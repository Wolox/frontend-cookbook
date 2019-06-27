export function spacesToHyphen(str) {
  return str.replace(/\s/g, '-')
}

export const getComponentsCode = results => 
  results.map(comp => (
    {
      title: comp.name,
      html: comp.object.entries[0].object.text,
      scss: comp.object.entries[1].object.text
    }
  ))
