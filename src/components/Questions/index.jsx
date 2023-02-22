import { connect } from 'react-redux';
import Questions from './questions';

// const mapStateToProps = ({ questions }) => ({
//   questions,
//   // loading: loading.some(
//   //   x => x.action === 'LOAD_PRODUCTS' || x.action === 'LOAD_CART',
//   // ),
//   // hasError: errors.some(
//   //   x => x.action === 'LOAD_PRODUCTS' || x.action === 'LOAD_CART',
//   // ),
// });

const mapDispatchToProps = dispatch => ({
  // dispatch({
  //   type: 'FINAL_ANSWERS_REQUEST',
  //   payload: answers,
  // })
});

export default connect(null, mapDispatchToProps)(Questions);
