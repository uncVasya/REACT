import React from 'react';
import Game from './Compounents/Game/Game';
import './index.scss';

export const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function Result({ correct }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="123" />
      <h2>
        Вы отгадали
        {' '}
        {correct}
        {' '}
        ответа из
        {' '}
        {questions.length}
      </h2>
      <a href="/">
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];
  const onClickVariant = (variant) => {
    if (question.correct === variant) {
      setCorrect(correct + 1);
    }
    setStep(step + 1);
  };

  return (
    <div className="App">
      {
        step !== questions.length ? <Game step={step} ques={question} onClickV={onClickVariant} questions={questions} /> : <Result correct={correct} />
      }
    </div>
  );
}

export default App;
