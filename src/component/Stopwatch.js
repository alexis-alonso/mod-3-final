import { useState, useEffect } from "react";
import Buttons from "./Stopwatch-buttons/Stopwatch-buttons.js";
import '../component-css/stopwatch.css';

export default function Stopwatch() {
    const [seconds, setSeconds] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        // format the time
        let secs = seconds % 60;
        let hrs = Math.floor(seconds / 3600);
        let mins = Math.floor((seconds - (hrs * 3600))/ 60);
    
        // formatted to look like 2 digit #'s
        if (secs < 10) {
            secs = '0' + secs;
        }
        if (mins < 10) {
            mins = '0' + mins;
        }
        if (hrs < 10) {
            hrs = '0' + hrs;
        }

        // update the timer display
        const timeElement = document.getElementById('theTime');
        timeElement.innerText = `${hrs}:${mins}:${secs}`;
    }, [seconds]);

    function timer() {
        setSeconds(seconds => seconds + 1);
    }

    function handleClickStart() {
        console.log('Start Button clicked');
        if (intervalId) {
            return
        }
        setIntervalId(setInterval(timer, 1000));
    }

    function handleClickStop() {
        console.log('Stop Button clicked');
        clearInterval(intervalId);
        setIntervalId(null);
    }

    function handleClickReset() {
        console.log('Reset Button clicked');
        handleClickStop();
        setSeconds(0);
    }



    return (
        <div>
            <h1 id="theTime">00:00:00</h1>


            <Buttons 
                onClickStart={handleClickStart}
                onClickStop={handleClickStop}
                onClickReset={handleClickReset} />

        </div>
    )
}

// success!