export default function ImageItem({ image }) {
    return <div>
        <img alt={image.title} src={image.url}></img>
    </div>;
}