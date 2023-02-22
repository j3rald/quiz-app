import React from 'react';
import { Link, Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

function AuthLayout({ user }) {
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  // return (
  //   <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  //     <div className="w-full max-w-md space-y-8">
  //       <div>
  //         <img
  //           className="mx-auto h-12 w-auto"
  //           src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
  //           alt="Your Company"
  //         />
  //         <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
  //           Sign in to your account
  //         </h2>
  //         <p className="mt-2 text-center text-sm text-gray-600">
  //           Or{' '}
  //           <Link
  //             to="register"
  //             className="font-medium text-indigo-600 hover:text-indigo-500"
  //           >
  //             start your 14-day free trial
  //           </Link>
  //         </p>
  //       </div>{' '}
  //       <Outlet />
  //     </div>
  //   </div>
  // );

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>

            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
}

AuthLayout.propTypes = {
  user: PropTypes.shape({}),
};

AuthLayout.defaultProps = {
  user: null,
};

export default AuthLayout;
