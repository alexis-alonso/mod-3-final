import '../../component-css/buttons.css';

export default function Buttons(props) {
    return (
        <div>
            <button className="controls" id="Start" onClick={props.onClickStart}>Start</button>
            <button className="controls" id="Stop" onClick={props.onClickStop}>Stop</button>
            <button className="controls" id="Reset" onClick={props.onClickReset}>Reset</button>
        </div>
    )
}