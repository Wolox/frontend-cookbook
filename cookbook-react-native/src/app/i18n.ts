import i18next from 'i18next';
import Routes from '@constants/routes';

i18next.addResources('es', 'app', {
  [Routes.Login]: 'Login',
  [Routes.SignUp]: 'SignUp',
  [Routes.Home]: 'Home'
});
