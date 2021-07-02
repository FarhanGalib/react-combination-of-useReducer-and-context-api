import './App.css';
import A from './components/A';
import React,{useReducer} from 'react';


export const CounterContext = React.createContext();

const initialState = 0;
const reducer = (state, action) =>{
    switch(action){
        case "increment":
            return state+1;
        case "decrement":
            return state-1;
        default :
            return state;
    }
};

function App() {
  const [count, dispatch] = useReducer( reducer, initialState );
  return (
    <div className="App">
      <p>Count: {count}</p>
     <CounterContext.Provider value={{counterDispatch: dispatch}}>
       <A></A>
     </CounterContext.Provider>
    </div>
  );
}

export default App;
