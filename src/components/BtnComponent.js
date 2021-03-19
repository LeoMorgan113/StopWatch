import React from "react";
import s from "../App.module.css";


const BtnComponent = (props) => {
    return (
        <div>
            {(props.status === 0) ?
                <div>
                    <button className={s.stopwatch_btn + " " + s.stopwatch_btn_gre}
                        onClick={props.start}>Start</button>
                    <button className={s.stopwatch_btn + " " + s.stopwatch_btn_red}
                            onClick={props.wait}>Wait</button>
                    <button className={s.stopwatch_btn + " " + s.stopwatch_btn_yel}
                            onClick={props.stop}>Reset</button>
                </div> : ""
            }
            {(props.status === 1) ?
                <div>
                    <button className={s.stopwatch_btn + " " + s.stopwatch_btn_red}
                        onClick={props.stop}>Stop</button>
                    <button className={s.stopwatch_btn + " " + s.stopwatch_btn_red}
                            onClick={props.wait}>Wait</button>
                    <button className={s.stopwatch_btn + " " + s.stopwatch_btn_yel}
                            onClick={props.reset}>Reset</button>
                </div> : ""
            }
            {(props.status === 2) ?
                <div>
                    <button className={s.stopwatch_btn + " " + s.stopwatch_btn_gre}
                            onClick={props.start}>Start</button>
                    <button className={s.stopwatch_btn + " " + s.stopwatch_btn_red}
                            onClick={props.wait}>Wait</button>
                    <button className={s.stopwatch_btn + " " + s.stopwatch_btn_yel}
                            onClick={props.reset}>Reset</button>
                </div> : ""
            }
        </div>
    );
}

export default BtnComponent;