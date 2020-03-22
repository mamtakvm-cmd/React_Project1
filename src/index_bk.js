import React from 'react'
import ReactDom from 'react-dom'
import Header from './component/Header'


const App = () => {
    return(

        <div>
            <Header/>
            <h1>Welcome to React</h1>
            <h2>Happy Learning!</h2>
        </div>
    )
}

ReactDom.render(<App/>,document.getElementById("root"));