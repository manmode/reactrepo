import { useState } from 'react';
import Search from '../Search/Search';
import ImageList from '../ImageList/ImageList';

import { searchImage } from '../../api/searchService';
function App() {
    const [searchQuery, setSearchQuery] = useState('');
    const [images, setImages] = useState([]);
    const [totalResultsCount, setTotalResultsCount] = useState(0);
    async function onQuerySearch(newQuery) {
        setTotalResultsCount(0);
        setImages([]);
        setSearchQuery(newQuery);

        let response = await searchImage(newQuery);

        setImages(response.value)
        setTotalResultsCount(response.totalCount);
    }

    return (
        <section className="hero is-fullheight">
            <div className="hero-head">
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <h1 className="is-size-1 has-text-link">Image Search</h1>
                        </div>
                        <div className="navbar-menu"></div>
                    </div>
                </nav>
            </div>
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-multiline">
                        <div className="column is-12">
                            <Search onSearch={onQuerySearch}></Search>
                            {totalResultsCount > 0 && <p className="is-family-code">{totalResultsCount} results found for {searchQuery}</p>}
                        </div>
                        <div className="column is-full">
                            <ImageList listOfImages={images}></ImageList></div>
                    </div>

                </div>

            </div>
            <div className="hero-foot">
                <nav className="tabs">
                    <div className="container">
                        <ul>
                            <li className="is-active"><a>Github</a></li>
                        </ul>
                    </div>
                </nav>
            </div>

        </section>

    )
}

export default App;