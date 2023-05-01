import { useState } from 'react';

function Animal({ image, updateCounter }) {
    const [like, setLike] = useState(0);
    const handleLinkClick = () => {
        setLike(like + 1);
        updateCounter();
    }
    return (
        <div>
            <div className="ratio ratio-1x1">
                <img src={image} ></img>

            </div>
            <button className="btn btn-success m-2" onClick={handleLinkClick}>{like}</button>
        </div>
    )
}

export default Animal;