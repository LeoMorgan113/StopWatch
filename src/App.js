import s from './App.module.css';
import React, {useState, useEffect} from "react";
import BtnComponent from "./components/BtnComponent";
import Clock from "./components/Clock";
import {delay} from "rxjs/operators";


function App() {
    const [time, setTime] = useState({ms: 0, s: 0, m: 0, h: 0})
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0);
    // not started = 0, started = 1, stopped = 2

    const start = () => {
        run();
        setStatus(1);
        setInterv(setInterval(run, 10));
    }
    const stop = () => {
        clearInterval(interv);
        setStatus(0);
        setTime({
            ms: 0,
            s: 0,
            m: 0,
            h: 0
        })
    }
    const wait = () => {
        clearInterval(interv);
        setStatus(2);
    }
    const reset = () => {
        clearInterval(interv);
        setStatus(0);
        setTime({
            ms: 0,
            s: 0,
            m: 0,
            h: 0
        })
    }

    const run = () => {
        if(time.ms === 100){
            time.s++;
            time.ms = 0;
        }
        if(time.s === 60){
            time.m++;
            time.s = 0;
        }
        if(time.m === 60){
            time.h++;
            time.m = 0;
        }
        time.ms++;
        return setTime({
            ms: time.ms,
            s: time.s,
            m: time.m,
            h: time.h
        })
    }
    return (
        <div className={s.main_section}>
            <div className={s.clock_holder}>
                <div className={s.stopwatch}>
                    <Clock time={time}/>
                    <BtnComponent start={start} stop={stop} wait={wait} reset={reset} status={status}/>
                </div>
            </div>
        </div>
    );
}

export default App;
