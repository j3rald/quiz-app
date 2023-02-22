import Input from '../../components/Input';

export const registerFields = [
  {
    component: Input,
    name: 'name',
    id: 'name',
    'data-value': '',
    autoComplete: 'name',
    placeholder: 'Name',
    className: 'rounded-t-md',
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
 
  {
    component: Input,
    name: 'email',
    id: 'email-address',
    type: 'email',
    'data-value': '',
    autoComplete: 'email',
    placeholder: 'Email',
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    component: Input,
    name: 'password',
    id: 'password',
    type: 'password',
    'data-value': '',
    autoComplete: 'new-password',
    className: 'rounded-b-md',
    placeholder: 'Password',
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },

];

export const registerInitialValues = registerFields.reduce(
  (p, c) => ({ ...p, [c.name]: c['data-value'] }),
  {},
);
