import ImageItem from '../ImageItem/ImageItem';
import './imageList.css'
export default function ImageList({ listOfImages }) {
    return (
        <div className="image-list">
            {
                listOfImages.map((image) => {
                    return <ImageItem key={image.url} image={image}></ImageItem>
                })
            }
        </div>
    )
} 