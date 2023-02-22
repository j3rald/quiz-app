import clsx from 'clsx';
import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';

const Choices = ['A', 'B', 'C'];

function Options({ question, selected, setSelected, setDisabledBtn }) {
  return (
    <div>
      {question && (
        <p className="text-md font-semibold text-slate-600">
          {question.question}
        </p>
      )}

      {question &&
        question.options.map((item, index) => (
          <div
            role="button"
            key={item.id}
            // className="flex items-center justify-start gap-x-2 mt-3 p-2 w-full bg-slate-200 rounded px-3 cursor-pointer"
            className={clsx(
              'flex items-center justify-start gap-x-2 mt-3 p-2 w-full bg-slate-100 rounded px-3 cursor-pointer border-md shadow',
              {
                'bg-green-500 text-white': selected?.id === item.id,
              },
            )}
            onClick={() => {
              setSelected({ ...item, questionId: question.id });
              setDisabledBtn(false);
            }}
          >
            {/* <input
              type="radio"
              id={item.id}
              name="options"
              className="bg-slate-100 mr-3"
            />
            <label htmlFor="test"> {item.value} </label> */}

            <div
              className={clsx(
                'bg-slate-100 rounded-full py-1 px-3 mr-2 shadow',
                {
                  'bg-slate-200 text-black': selected?.id === item.id,
                },
              )}
            >
              {Choices[index]}
            </div>
            <p className="text-md text-center"> {item.value} </p>
          </div>
        ))}
    </div>
  );
}

Options.propTypes = {
  setSelected: PropTypes.func.isRequired,
  setDisabledBtn: PropTypes.func.isRequired,
  // questions: PropTypes.exact({
  //   id: PropTypes.number.isRequired,
  //   question: PropTypes.string.isRequired,
  //   options: PropTypes.exact({
  //     id: PropTypes.number.isRequired,
  //     value: PropTypes.string.isRequired,
  //   }).isRequired,
  //   correctAns: PropTypes.number.isRequired,
  //   type: PropTypes.string.isRequired,
  //   weight: PropTypes.number.isRequired,
  // }).isRequired,
};

Options.defaultProps = {
  selected: null,
};

export default memo(Options);
