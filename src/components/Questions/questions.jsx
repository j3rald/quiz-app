import clsx from 'clsx';
import React, { useState, memo, useEffect } from 'react';
import Options from '../Options/options';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

function Questions({
  question,
  questionIndex,
  setQuestionIndex,
  totalQuestion,
  loadQuestions,
}) {
  const [selected, setSelected] = useState(null);
  const [answers, setAnswer] = useState([]);
  const [disabledBtn, setDisabledBtn] = useState(true);
  const dispatch = useDispatch();

  const nextQuestion = () => {
    if (questionIndex < totalQuestion) {
      setQuestionIndex(x => x + 1);
      setAnswer(val => [...val, selected]);
      setDisabledBtn(true);
      setSelected(null);
      loadQuestions();
    }
  };

  const submitAnswer = () => {
    setAnswer(val => [...val, selected]);
  };

  if (answers.length === totalQuestion) {
    const user = localStorage.getItem('user');
    const res = JSON.parse(user);
    dispatch({
      type: 'FINAL_ANSWERS_REQUEST',
      payload: answers,
    });
  }

  return (
    <div className="rounded-2xl shadow bg-orange-50 py-5 mt-5 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center">
      <div className="mx-auto max-w-xs px-8 w-78 h-full">
        <Options
          question={question}
          selected={selected}
          setSelected={setSelected}
          setDisabledBtn={setDisabledBtn}
        />
      </div>
      <div className="flex items-center justify-between bg-stone-300 p-5 mt-3 ring-1 ring-inset ring-gray-900/5">
        <div className="flex h-full w-20 bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
          {/* fullbar w-16 */}
          <div
            className={clsx(
              'flex text-center bg-green-600 h-1.5 rounded-full dark:bg-green-500',
              { 'w-2': question?.id === 1 },
              { 'w-4': question?.id === 2 },
              { 'w-6': question?.id === 3 },
              { 'w-8': question?.id === 4 },
              { 'w-full': question?.id === 5 },
            )}
          />
        </div>

        <div className="flex justify-start w-full ml-2">
          {question && (
            <p className="text-sm font-bold">
              {question.id} / {totalQuestion}
            </p>
          )}
        </div>

        <div>
          {question?.id === totalQuestion ? (
            <button
              type="button"
              disabled={disabledBtn}
              className="block md:w-40 lg:w-56 rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-slate-400 disabled:cursor-wait"
              onClick={() => submitAnswer()}
            >
              Submit
            </button>
          ) : (
            <button
              type="button"
              disabled={disabledBtn}
              className="block md:w-40 lg:w-56 rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-slate-400 disabled:cursor-wait"
              onClick={() => nextQuestion()}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

Questions.propTypes = {
  loadQuestions: PropTypes.func.isRequired,
  questionIndex: PropTypes.number.isRequired,
  setQuestionIndex: PropTypes.func.isRequired,
  totalQuestion: PropTypes.number.isRequired,
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

export default memo(Questions);
