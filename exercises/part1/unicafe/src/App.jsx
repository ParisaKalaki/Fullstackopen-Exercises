import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};
const Feedback = (props) => {
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={props.handleGood} text="good" />
      <Button handleClick={props.handleNutral} text="neutral" />
      <Button handleClick={props.handleBad} text="bad" />
    </div>
  );
};
const StatisticsLine = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            {props.text} {props.value}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const Statistics = (props) => {
  const sum = props.good + props.neutral + props.bad;
  const avg = (props.good - props.bad) / sum;
  const positive = (props.good / sum) * 100;
  if (sum === 0) {
    return <h2>No feedback given</h2>;
  }
  return (
    <div>
      <h1>Statistics</h1>
      <StatisticsLine text="good" value={props.good} />
      <StatisticsLine text="neutral" value={props.neutral} />
      <StatisticsLine text="bad" value={props.bad} />
      <StatisticsLine text="all" value={sum} />
      <StatisticsLine text="average" value={avg} />
      <StatisticsLine text="positive" value={positive + "%"} />
    </div>
  );
};
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Feedback
        handleGood={() => setGood(good + 1)}
        handleNutral={() => setNeutral(neutral + 1)}
        handleBad={() => setBad(bad + 1)}
      />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
