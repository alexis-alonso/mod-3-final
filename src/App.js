import Quote from "./component/Quote";
// import Stopwatch from "./component/Stopwatch";
import AddDelete from "./component/AddDelete";
import Spotify from "./component/Spotify";

export default function App() {
  return (
    <div className="App">
      <div className="Spotify">
        <Spotify />
      </div>

      <div id="quote-button">
        <Quote />
      </div>

      <div id="stopwatch-container">
        <AddDelete />
      </div>
    </div>
  );
};
