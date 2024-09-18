import React from 'react'
import { Breadcrumb } from 'react-bootstrap'

const ReadMoreBreadcrumb = () => {
    return (
        <Breadcrumb style={{fontSize:'14px'}}>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#">
            செய்திகள்
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#">
            இந்தியா
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{`அருமையான ஆஃபர் !! 1000 ரூபாயில் வெளிநாட்டு சுற்றுலா விசா`}</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default ReadMoreBreadcrumb