import ImageItem from '../ImageItem/ImageItem';
export default function ImageList({ listOfImages }) {
    return (
        <div className="container has-text-centered">
            <div class="columns is-multiline is-12">
                {
                    listOfImages.map((image) => {
                        return <ImageItem image={image}></ImageItem>
                    })
                }
            </div>
        </div>
    )
} 