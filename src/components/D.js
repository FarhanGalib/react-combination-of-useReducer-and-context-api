import React, { useContext } from 'react';
import {CounterContext} from '../App';
const D = () => {
    const countContext = useContext(CounterContext);
    return (
        <div>
            <button onClick={()=>{countContext.counterDispatch("increment")}}>Increment by 1</button>
            <button onClick={()=>{countContext.counterDispatch("decrement")}}>Decrement by 1</button>
        </div>
    );
};

export default D;