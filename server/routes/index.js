import authRoutes from './auth.route';
import questionRoutes from './questions.route';
import answerRoutes from './answer.route';
// import cartRouter from './cart.route';
// import productsRouter from './products.route';
import userRouter from './user.route';

export default class Routes {
  static initRoutes(app) {
    app.use('/api/user', userRouter);
    app.use('/auth', authRoutes);
    app.use('/questions', questionRoutes);
    app.use('/answer', answerRoutes);
  }
}
