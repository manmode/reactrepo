export default function ImageItem({ image }) {
    return (
        <div className="column is-2">
            <figure className="image is-128x128" >
                <img src={image.url}></img>
            </figure >
        </div>

    );
}