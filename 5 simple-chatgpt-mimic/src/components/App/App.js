import { useState } from 'react';

import ChatWindow from '../ChatWindow/ChatWindow';
import Commands from '../Commands/Commands';


function App() {

    const [totalLikes, setTotalLikes] = useState(0);
    const increaseCount = () => {
        setTotalLikes(totalLikes + 1);
    }
    return (
        <div className="container-fluid bg-dark bg-gradient text-center">
            <nav className="navbar bg-body-transparent">
                <div className="container opacity-50">
                    <h1 className="navbar-brand text-success fs-2" href="#">Chatgpt</h1>
                </div>
            </nav>
            <div className="row min-vh-100 justify-content-md-center">
                <div className="border border-start-0 col-sm-2">
                    <Commands />
                </div>
                <div className="col-sm-8">
                    <ChatWindow />
                </div>
            </div>
        </div >

    )
}

export default App;