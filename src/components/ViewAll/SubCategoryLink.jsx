import Link from 'next/link'
import React from 'react'

import { Button, ButtonToolbar } from 'rsuite';

const SubCategoryLink = () => {
    return (
        //  <div className="w-100 d-flex justify-content-start gap-4 my-2">
        //     <Link className="btn rounded " href=''> ஆன்மீகச் செய்திகள் </Link>
        //     <Link className="btn rounded " href=''> ஆன்மீகக் குறிப்புகள் </Link>
        //     <Link className="btn rounded " href=''> ஆன்மீகத் தளங்கள் </Link>

        // </div>

        <ButtonToolbar className=' d-flex flex-wrap flex-md-nowrap border-bottom border-2 pb-2'>
            <Button appearance="subtle" className='fw-bold' active>ஆன்மீகச் செய்திகள் </Button>
            <Button appearance="subtle" className='fw-bold'>ஆன்மீகக் குறிப்புகள்</Button>
            <Button appearance="subtle" className='fw-bold'>ஆன்மீகத் தளங்கள் </Button>
        </ButtonToolbar>
    );
}

export default SubCategoryLink