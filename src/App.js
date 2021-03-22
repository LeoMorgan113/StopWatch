import s from './App.module.css';
import React, {useEffect} from "react";
import {fromEvent, interval} from "rxjs";
import {debounceTime, buffer} from "rxjs/operators";


const App = () => {
    const myRef = React.createRef()
    const start_stop = React.createRef()

    const source = interval(100 /* ms */ );

    let started = false;
    let time = 0;

    useEffect(() =>{
        const subscription$ = source.subscribe(
            x => {
                if(!started) return;
                time++;
                myRef.current.innerHTML = Math.floor(time/3600) +":" + Math.floor(time / 600) + ":" + Math.floor((time / 10) % 60) + ":" + (time % 10) + "0";
            });
        return () => subscription$.unsubscribe();
    },[started])

    useEffect(()=>{
        const start$ = fromEvent(document.getElementById('start'), 'click')
            .subscribe((e) => {
                started = !started;
                start_stop.current.innerText = 'Stop';
                if(started === false){
                    time = 0;
                    myRef.current.innerHTML = "00:00:00:00";
                    start_stop.current.innerText = 'Start'
                }
                console.log()
            });
        return () => started
    },[started])

    useEffect(() => {
        const wait$ = fromEvent(document.getElementById('wait'), 'click');

        const click$ = wait$
            .pipe(buffer(wait$.pipe(debounceTime(250))))
            .subscribe((e) => {
                started = false;
                console.log(started)

            });
    }, [started])
    console.log(started)
    useEffect(() => {
        const reset$ = fromEvent(document.getElementById('reset'), 'click')
            .subscribe((e) => {
                started = false;
                time = 0;
                myRef.current.innerHTML = "00:00:00";
            });
    },[started])


    return (
        <div className={s.main_section}>
            <div className={s.clock_holder}>
                <h1  ref={myRef} id="digital" className={s.clock_holder}>00:00:00:00</h1>
                <div className={s.stopwatch}>
                     <button className={s.stopwatch_btn + " " + s.stopwatch_btn_gre}
                             id="start" ref={start_stop}>Start</button>
                     <button className={s.stopwatch_btn + " " + s.stopwatch_btn_red}
                             id="wait">Wait</button>
                     <button className={s.stopwatch_btn + " " + s.stopwatch_btn_yel}
                             id="reset" >Reset</button>
                </div>
            </div>
        </div>
    );
}

export default App;
