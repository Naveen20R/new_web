import React from 'react'
import { Breadcrumb } from 'react-bootstrap'

const ViewAllBreadcrumb = () => {
    return (
        <Breadcrumb style={{fontSize:'14px'}}>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                ஆன்மீகம்
            </Breadcrumb.Item>
            <Breadcrumb.Item active>ஆன்மீகச் செய்திகள்</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default ViewAllBreadcrumb