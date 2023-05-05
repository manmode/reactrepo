import Animal from '../Animal/Animal';
import { useState } from 'react';
import TigerImage from '../../images/tiger.jpg';
import LionImage from '../../images/lion.jpg';
import ElephantImage from '../../images/elephant.jpg';

function App() {

    const [totalLikes, setTotalLikes] = useState(0);
    const increaseCount = () => {
        setTotalLikes(totalLikes + 1);
    }
    return (
        <div className="container text-center">
            <nav className="navbar bg-success rounded-pill my-5">
                <div className="container-fluid text-center">
                    <span className="ps-5 navbar-brand mb-0 h1 text-white">
                        <h1 className="title">
                            Favourite Animal  <span className="badge bg-danger rounded-pill">{totalLikes}</span>
                        </h1>
                    </span>
                </div>
            </nav>
            <div className="row justify-content-md-center">
                <div className='col col-sm-1'><Animal image={TigerImage} updateCounter={increaseCount}></Animal></div>
                <div className='col col-sm-1'><Animal image={LionImage} updateCounter={increaseCount}></Animal></div>
                <div className='col col-sm-1'><Animal image={ElephantImage} updateCounter={increaseCount}></Animal></div>

            </div>
        </div>

    )
}

export default App;