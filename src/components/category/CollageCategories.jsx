import './HomeCategoryStyle.css'

const CollageCategories = () => {
    // Array to hold dimensions for each image
    const imageFormats = [
        { width: 500, height: 250 },
        { width: 320, height: 250 },
        { width: 270, height: 250 },
        { width: 270, height: 250 },
        { width: 270, height: 250 }
    ];

    const Sub_Categories = [
        {
            id: 10,
            name: 'ஆன்மீகச் செய்திகள்',
            col: 'col-12 col-sm-12 col-lg-7 '
        },
        {
            id: 33,
            name: 'ஆன்மீகக் குறிப்புகள்',
            col: 'col-12 col-sm-6 col-lg-5 '
        },
        {
            id: 100,
            name: 'ஆன்மீகத் தளங்கள்',
            col: 'col-12 col-sm-6 col-lg-4 '
        },
        {
            id: 1015,
            name: 'ஆன்மீகத் தளங்கள்',
            col: 'col-12 col-sm-6 col-lg-4 '
        },
        {
            id: 1031,
            name: 'ஆன்மீகத் தளங்கள்',
            col: 'col-12 col-sm-6 col-lg-4 '
        }
    ]

    return (
        <>
            <div className="row px-0">
                {Sub_Categories.map((item, index) => {
                    const { width, height } = imageFormats[index];
                    // const imageUrl = `https://picsum.photos/id/${item.id}/${width}/${height}`;
                    const imageUrl = `https://picsum.photos/id/${item.id}/500/250`;
                    return (
                        <div className={`${item.col} px-1 my-1`}>
                            <div key={item.id} className={`position-relative overflow-hidden`}>
                                <img
                                    src={imageUrl}
                                    alt={`Random Image ${item.id}`}
                                    style={{
                                        objectFit: 'cover', width: 'auto', height: 'auto'
                                        // height: height, width: width 
                                    }}
                                    className=""
                                />

                                <div className='card-gradient position-absolute top-0 w-100 h-100 '></div>

                                {/* Badge */}
                                <small style={{ textAlign: 'center', fontSize: '12px' }} className="  position-absolute fw-semibold top-0 start-0 text-white shadow-sm image-badge rounded px-2 py-1 m-2">{item.name}</small>

                                {/* Share btn */}
                                <div className='position-absolute top-0 end-0'>
                                    <button className='btn px-1 py-1 rounded text-white m-2' style={{ fontSize: '12px' }}>
                                        <i className="fa-regular fa-share-from-square"></i>
                                    </button>
                                    {/* <ul className='list-unstyled d-flex gap-2'>
                                        <li>
                                            <a href='' className='text-white bg-primary p-1 shadow' style={{borderRadius:'100%'}} >
                                                <i className="fa-brands fa-facebook-f" style={{width:'20px', textAlign:'center'}}></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='' className='text-white p-1 shadow' style={{borderRadius:'100%', background:'#00e676'}}>
                                                <i class="fa-brands fa-whatsapp" style={{width:'20px', textAlign:'center'}}></i>
                                            </a>
                                        </li>
                                    </ul> */}
                                </div>

                                {/* Category footer */}
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
        </>
    );
};

export default CollageCategories