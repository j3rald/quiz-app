import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Questions from '../../components/Questions/questions';
import { useDispatch } from 'react-redux';

function Home({ loadQuestions, loadResults, questions, user, results }) {
  const [index, setIndex] = useState(0);
  const [record, setRecord] = useState(false);
  // const dispatch = useDispatch();

  useEffect(() => {
    if (user.user) {
      loadResults(user.user);
    }
  }, [loadResults]);

  // Check History
  if (!record) {
    loadQuestions();
    return (
      <div className="text-center my-10">
        <h1> No History Found!</h1>
        {/* {results ? (
          results.map(x => <p> {x.userId} </p>)
        ) : (
          <h1> No History Found!</h1>
        )} */}

        <button
          type="button"
          className="bg-green-500 rounded py-2 px-3 mt-10 text-white shadow hover:bg-green-600"
          onClick={() => {
            setRecord(true);
          }}
        >
          Start Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white py-10 sm:py-10">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 ">
        <div className="mx-auto max-w-2xl sm:text-center"></div>

        <div className="mt-2 p-2 lg:mt-0">
          {/* {questions.data.map(question => (
            <Questions key={question.id} question={questions} />
          ))} */}

          {questions && (
            <Questions
              question={questions[index]}
              totalQuestion={questions.length}
              questionIndex={index}
              setQuestionIndex={setIndex}
              loadQuestions={loadQuestions}
            />
          )}
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {
  loadQuestions: PropTypes.func.isRequired,
  loadResults: PropTypes.func.isRequired,
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

export default Home;
