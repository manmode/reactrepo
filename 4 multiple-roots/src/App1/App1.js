import { React, useState } from "react";

export default function App1() {
    const [appName, setName] = useState('App1');

    const handleChange = (ev) => {
        setName(ev.target.value);
    }
    return (
        <div>
            <div> This is {appName}</div>
            <input onChange={handleChange}></input>
        </div>
    );
}