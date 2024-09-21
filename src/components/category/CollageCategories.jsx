// Array of image IDs to filter (these are the random image IDs)
// const imageIds = [10, 33, 100, 1015, 51]; // You can adjust these IDs
const imageIds = [10, 33, 100]; // You can adjust these IDs

import './HomeCategoryStyle.css'

const CollageCategories = () => {
    // Array to hold dimensions for each image
    const imageFormats = [
        { width: 500, height: 250 }, // First image with 300x200
        { width: 320, height: 250 }, // Second image with 150x150 (square)
        { width: 270, height: 250 }, // Third image with 400x300
        { width: 270, height: 250 }, // Fourth image with portrait format
        { width: 270, height: 250 }  // Fifth image with landscape format
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
        },
        {
            id: 1015,
            name: 'ஆன்மீகத் தளங்கள்'
        },
        {
            id: 1031,
            name: 'ஆன்மீகத் தளங்கள்'
        }
    ]

    const image = [10, 33, 100, 1015, 51, 1031]
    const text = 'உயிர்ச்சத்து குறைவால் ஏற்படும் நோய்கள்.? உயிர்ச்சத்து அதிகரிக்க உணவு முறைகள்...!'


    return (
        <>
            <div className="d-flex flex-wrap gap-2">
                {Sub_Categories.map((item, index) => {
                    const { width, height } = imageFormats[index];
                    const imageUrl = `https://picsum.photos/id/${item.id}/${width}/${height}`;

                    return (
                        <div className=" position-relative">
                            <div key={item.id} className=" h-100 col sub-category-wrap d-flex ">
                                <img
                                    src={imageUrl}
                                    alt={`Random Image ${item.id}`}
                                    // width={width}
                                    // height={height}
                                    style={{ objectFit: 'cover', height: height, width: width }}
                                    className="sub-category-image "
                                />

                                {/* <p style={{ textAlign: 'center' }} className="position-absolute bottom-0 text-white w-75 mx-auto">Image {id} ({width}x{height})</p> */}
                                <small style={{ textAlign: 'center', fontSize: '12px' }} className="position-absolute fw-semibold top-0 start-0 text-white shadow image-badge rounded px-2 py-1 mx-1 mt-1">{item.name}</small>
                                
                                <div className='p-3 d-flex flex-column justify-content-between position-absolute bottom-0 text-white gap-2' style={{ backdropFilter: 'brightness(0.99)' }}>
                                    <a href="" className="fw-semibold fs-6 text-white" >போன் பேசும் போது... வாய்ஸ் கிளையரா இல்லையா... இந்த டிப்ஸ் கை கொடுக்கும்</a>

                                    <div className='w-100 d-flex justify-content-between text-white'>
                                        <small className='fw-semibold '>
                                            Aarumugam
                                        </small>
                                        <small className=' ' style={{ fontSize: '12px' }}>
                                            20/09/2024
                                        </small>
                                    </div>
                                </div>

                            </div>

                        </div>
                    );
                })}
            </div>

            {/* <div className=' row gap-3 col'>
                {image.map((image, idx) => (
                    <div className='d-flex flex-column gap-2 col-5 rounded px-0' key={idx} style={{ background: 'var(--tg-gray-three)' }}>
                        <img src={`https://picsum.photos/id/${image}/300/200`} alt='img' style={{ width: '100%', height: '200px' }}
                            className='rounded-top'
                        />
                        <div className='px-3 py-2 d-flex flex-column gap-3'>
                            <a href='' className='nav-links'>
                                {text}
                            </a>
                            <div className='w-100 d-flex justify-content-between'>
                                <small className='fw-semibold '>
                                    Aarumugam
                                </small>
                                <small className=' ' style={{ fontSize: '12px' }}>
                                    20/09/2024
                                </small>
                            </div>
                        </div>
                    </div>
                ))}

            </div> */}
        </>
    );
};

export default CollageCategories