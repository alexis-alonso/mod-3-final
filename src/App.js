import Quote from "./component/Quote";
import Stopwatch from "./component/Stopwatch";

export default function App() {
  return (
    <div className="App">
      <div id="quote-button">
        <Quote />
      </div>

      <div id="stopwatch-container">
        <Stopwatch />
      </div>
    </div>
  );
};
