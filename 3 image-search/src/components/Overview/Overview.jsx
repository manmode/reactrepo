export default function Overview() {
    return (
        <div className="modal" id='overviewModal'>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Image Search OverView</p>
                    <button className="delete" aria-label="close"></button>
                </header>
                <section className="modal-card-body">
                    <div className="content">
                        <ul>
                            <li>Components</li>
                            <ul>
                                <li>App
                                    <ul>
                                        <li>Search</li>
                                        <li>ImageList</li>
                                        <ul>
                                            <li>ImageItem</li>
                                        </ul>
                                    </ul>
                                </li>
                            </ul>
                            <li>passed data from child to parent</li>
                            <li>Service call using axios</li>
                            <li>used bulma.css for styling</li>
                            <li>API: <a className="is-link">https://rapidapi.com/contextualwebsearch/api/web-search</a></li>
                        </ul>
                    </div >

                </section >
                <footer className="modal-card-foot">
                    <button className="button">Close</button>
                </footer>
            </div >
        </div >
    )
}