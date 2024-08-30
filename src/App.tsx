import React from "react"
import UseContext from "./useContext";
export const ThemeContext = React.createContext("");
function App (){
    let data: string = "hello world"
    return (
        <ThemeContext.Provider value={"red"}>
        <UseContext hai="helloworld"/>
        </ThemeContext.Provider>
    )
}


export default App