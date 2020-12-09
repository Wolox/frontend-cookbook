import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom/extend-expect';
import 'mutationobserver-shim';

configure({ adapter: new Adapter() });

jest.mock('i18next', () => ({
  t: () => ''
}));
