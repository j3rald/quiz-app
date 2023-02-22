import { connect } from 'react-redux';
import Login from './login';

const mapDispatchToProps = dispatch => ({
  login: values =>
    dispatch({
      type: 'LOGIN_REQUEST',
      payload: values,
    }),
});

export default connect(null, mapDispatchToProps)(Login);
