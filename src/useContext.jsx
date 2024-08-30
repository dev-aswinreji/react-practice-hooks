

// Context providae a way to pass data or state through the component tree without having to pass props down manually 
// through each nested component . It is desinged to share data that can be considered as global data for a tree of 
// React components, such as the current authenticated user or theme (eg. color,paddings,margins,font-size)

import { ThemeContext } from "./App";


// Context API uses Context Provider and Context, Consumer Components pass down the data but it is very cumbersome to 
// write the logn functional code to use this Context API. So useContext hook helps to make the code more readable , 
// less verbose and removes the need to introduce Consumer Component. The useContext hook is the new addition in React 16.8


// Syntax: 

// const authContext = useContext(initialValue)

// The useContext accepts the value provided by React.createContext and then re-render the component whenever its value
// changes but you can still optimize its performance by using memoization

export default function UseContext({hai}) {
    console.log(hai);
    console.clear()
    
    return (
        <p>
            {hai}
        </p>
        )
}