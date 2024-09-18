import React from 'react'
import { Breadcrumb } from 'react-bootstrap'

const data = [
    {
        link: '#',
        name: 'Home',
        type: ''
    },
    {
        link: '#',
        name: 'செய்திகள்',
        type: ''
    },
    {
        link: '#',
        name: 'இந்தியா',
        type: ''
    },
    {
        link: '#',
        name: 'அருமையான ஆஃபர் !! 1000 ரூபாயில் வெளிநாட்டு சுற்றுலா விசா',
        type: 'active'
    },
]
const ReadMoreBreadcrumb = () => {
    return (
        <Breadcrumb style={{ fontSize: '14px' }}>
            {data.map((item, idx) => (
                <Breadcrumb.Item key={idx} href={item.link}>{item.name.length > 15 ? (item.name.slice(0, 15) + '...') : (item.name)}</Breadcrumb.Item>
            ))}
        </Breadcrumb>
    )
}

export default ReadMoreBreadcrumb