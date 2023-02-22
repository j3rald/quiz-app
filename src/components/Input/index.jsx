import React, { forwardRef } from 'react';
import clsx from 'clsx';

function Input({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  meta,
  className,
  ...props
}) {
  return (
    <div className="-space-y-px rounded-md">
      <div>
        <div className="flex items-center">
          <label
            htmlFor={props.id}
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white border-none mt-4"
          >
            {props.placeholder}{' '}
          </label>

          <div className="flex justify-end mt-2 ml-2 w-full">
            {touched[field.name] && errors[field.name] && (
              <p className="text-white text-sm font-medium bg-red-600 p-1 rounded-md">
                {errors[field.name]}
              </p>
            )}
          </div>
        </div>

        <input
          id={props.id}
          type="text"
          {...field}
          {...props}
          className={clsx(
            'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
            {
              [className || '']: !!className,
            },
          )}
        />
      </div>
    </div>
  );
}
export default Input;
