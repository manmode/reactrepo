import { useState } from "react";

function Search({ onSearch }) {
    const [query, setQuery] = useState('');

    function handleChange(event) {
        if (event.keyCode === 13) {
            setQuery(event.target.value);
            onSearch(event.target.value);
        }
    }
    return (
        <div>
            <input className="input is-primary" type="text" onKeyDown={handleChange} placeholder="Enter text"></input>
        </div>
    )
}

export default Search;