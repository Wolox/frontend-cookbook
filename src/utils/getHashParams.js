function getHashParams() {
  const hashParams = {};
  const r = /([^&;=]+)=?([^&;]*)/g;
  const q = window.location.hash.substring(1);

  // eslint-disable-next-line init-declarations
  let e;
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  console.log('lalskmdfaksdf');
  return hashParams;
}

export default getHashParams;
