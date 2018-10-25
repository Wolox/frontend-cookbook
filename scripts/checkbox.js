const primaryRadioColor = document.querySelector('#primaryRadioColor');
const secondaryRadioColor = document.querySelector('#secondaryRadioColor');
const activeRadioColor = document.querySelector('#activeRadioColor');
const radioBackgroundColor = document.querySelector('#radioBackgroundColor');
const containerCheckbox = document.querySelector('.container-checkbox');

primaryRadioColor.addEventListener('change', (e) => {
  const color = e.target.value;
  console.log('entro');
  containerCheckbox.style.setProperty('--primary-color', color);
});

secondaryRadioColor.addEventListener('change', (e) => {
  const color = e.target.value;
  containerCheckbox.style.setProperty('--secondary-color', color);
});

activeRadioColor.addEventListener('change', (e) => {
  const color = e.target.value;
  containerCheckbox.style.setProperty('--active-color', color);
});

radioBackgroundColor.addEventListener('change', (e) => {
  const color = e.target.value;
  containerCheckbox.style.setProperty('--background-color', color);
});
