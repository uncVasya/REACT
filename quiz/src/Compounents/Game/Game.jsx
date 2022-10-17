// import questions from '../../App';

// console.log('questions', questions);

export default function Game({
  step, ques, onClickV, questions,
}) {
  const percentProgress = Math.round((step / questions.length) * 100);
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentProgress}%` }} className="progress__inner" />
      </div>
      <h1>{ques.title}</h1>
      <ul>
        {ques.variants.map((text, index) => (
          <li onClick={() => onClickV(index)} key={index}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}
