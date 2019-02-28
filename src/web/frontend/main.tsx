import React, {useState} from "react";
import ReactDOM from "react-dom";

import "./style.css";

const App = () => {
    const [c, increment] = useState(0);

    return (
        <div className="App">
            <h1>{c}</h1>
            <button onClick={() => increment(c + 1)}>Press me</button>
        </div>
    )
};

ReactDOM.render(
    <App/>,
    document.getElementById("root"),
);
