// Array of image IDs to filter (these are the random image IDs)
// const imageIds = [10, 33, 100, 1015, 51]; // You can adjust these IDs
const imageIds = [10, 33, 100]; // You can adjust these IDs

const ImageGallery = () => {
    // Array to hold dimensions for each image
    const imageFormats = [
        { width: 250, height: 150 }, // First image with 300x200
        { width: 250, height: 150 }, // Second image with 150x150 (square)
        { width: 250, height: 150 }, // Third image with 400x300
        { width: 150, height: 150 }, // Fourth image with portrait format
        { width: 150, height: 150 }  // Fifth image with landscape format
    ];

    const Sub_Categories = [
        {
            id: 10,
            name: 'ஆன்மீகச் செய்திகள்'
        },
        {
            id: 33,
            name: 'ஆன்மீகக் குறிப்புகள்'
        },
        {
            id: 100,
            name: 'ஆன்மீகத் தளங்கள்'
        }]

    return (
        <div className="d-flex flex-wrap row">
            {Sub_Categories.map((item, index) => {
                const { width, height } = imageFormats[index];
                const imageUrl = `https://picsum.photos/id/${item.id}/${width}/${height}`;

                return (
                    <div key={item.id} className="position-relative h-100 col sub-category-wrap">
                        <img
                            src={imageUrl}
                            alt={`Random Image ${item.id}`}
                            // width={width}
                            // height={height}
                            style={{ objectFit: 'cover', height:'100px', width:'100%' }}
                            className="sub-category-image"
                        />
                        {/* <p style={{ textAlign: 'center' }} className="position-absolute bottom-0 text-white w-75 mx-auto">Image {id} ({width}x{height})</p> */}
                        <p style={{ textAlign: 'center' }} className="position-absolute bottom-0 text-white w-75 mx-auto">{item.name}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default ImageGallery