import { connect } from 'react-redux';
import Home from './home';

const mapStateToProps = ({ questions, user, results }) => ({
  questions,
  user,
  results,
  // loading: loading.some(
  //   x => x.action === 'LOAD_PRODUCTS' || x.action === 'LOAD_CART',
  // ),
  // hasError: errors.some(
  //   x => x.action === 'LOAD_PRODUCTS' || x.action === 'LOAD_CART',
  // ),
});

const mapDispatchToProps = dispatch => ({
  loadQuestions: () =>
    dispatch({
      type: 'LOAD_QUESTIONS_REQUEST',
    }),
  loadResults: value =>
    dispatch({
      type: 'LOAD_RESULT_REQUEST',
      payload: value,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
