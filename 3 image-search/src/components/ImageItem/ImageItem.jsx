export default function ImageItem({ image }) {
    return (
        <div className="column is-3">
            <figure className="image is-square" >
                <img src={image.url}></img>
            </figure >
        </div>

    );
}