import { useState } from 'react';
import Search from '../Search/Search';
import ImageList from '../ImageList/ImageList';
import Overview from '../Overview/Overview';

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
    function openOverview() {
        document.getElementById('overviewModal').classList.add('is-active');
        (document.querySelectorAll('.modal-background, .delete, .modal-card-foot .button') || []).forEach(($close) => {
            const $target = $close.closest('.modal');

            $close.addEventListener('click', () => {
                document.getElementById('overviewModal').classList.remove('is-active');
            });
        });
    }

    return (
        <section className="hero is-fullheight">
            <div className="hero-head">
                <nav className="navbar ">
                    <div className="container notification">
                        <div className="navbar-brand">
                            <h1 className="is-size-1 has-text-link">Image Search</h1>
                        </div>
                        <div className="navbar-menu">
                            <div className="navbar-end">
                                <a href="https://github.com/manmode/reactrepo/tree/main/3%20image-search" target="_blank" className="navbar-item">Github</a>
                                <a onClick={openOverview} className="navbar-item">Overview</a>
                            </div>
                        </div>
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

            <Overview></Overview>

        </section>

    )
}

export default App;