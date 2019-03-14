export default [
  {
    title: 'Input 1',
    html: `
    <div id="input-1" class="input-container">
      <span class="input-subtitle">Input 1</span>
      <div class="input-wrapper">
        <input class="input-base" type="email" />
        <label class="input-label">Email</label>
      </div>
    </div>
    `
  },
  {
    title: 'Input 2',
    html: `
    <div id="input-2" class="input-container">
      <span class="input-subtitle">Input 2</span>
      <label class="inp" for="inp">
        <input id="inp" type="text" placeholder=" " />
        <span class="label">Label</span>
        <span class="border"></span>
      </label>
    </div>
    `
  },
  {
    title: 'Input 3',
    html: `
    <div id="input-3" class="input-container">
      <span class="input-subtitle">Input 3</span>
      <div class="Input">
        <input id="input" class="Input-text" type="text" placeholder="Your first name, e.g. Nicholas" />
        <label class="Input-label" for="input">First name</label>
      </div>
    </div>
    `
  },
  {
    title: 'Input 4',
    html: `
    <div id="input-4" class="input-container">
      <span class="input-subtitle">Input 4</span>
      <div class="Input">
        <div class="form-wrap">
          <div class="input-container">
            <label class="label4" for="mail">Email adress</label>
            <input class="input4" type="email" name="mail" autocomplete="off" />
          </div>
          <svg class="line svg4"></svg>
        </div>
        <input class="input-base" type="email" />
        <label class="input-label">Email</label>
      </div>
    </div>
    `
  }
]