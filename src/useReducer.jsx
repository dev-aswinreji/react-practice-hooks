
// The useReducer is the bettter alternative to the useState hook and is generally more preffered over the useState 
// hook when we have complex state-building logic or when the next state value depends upon its previous
// value or when the components are needed to be optimized. 

import { useReducer } from "react";


// The useReducer hook takes three argumens including reducer, initial state and the function to load the 
// initial state lazily.


//  Syntax :

// const [state, dispatch] = useReducer(reducer, initialArgs, init);


const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case "add":
            return state + 1;
        case "subtract":
            return state - 1;
        case "reset":
            return 0
        default:
            throw new Error("Unexpected action")
    }
}


function UseReducer() {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={()=>dispatch("add")}>
                ADD
            </button>

            <button onClick={()=>dispatch("subtract")}>
                SUBTRACT
            </button>
            <button onClick={()=>dispatch("reset")}>
                RESET
            </button>
        </div>
    )
}

export default UseReducer