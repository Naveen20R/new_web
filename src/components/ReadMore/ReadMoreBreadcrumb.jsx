'use client'
import React from 'react'
import { Breadcrumb } from 'rsuite';
import AngleRightIcon from '@rsuite/icons/legacy/AngleRight';
import Link from 'next/link';

const data = [
    {
        link: '#',
        name: 'Home',
        type: ''
    },
    {
        link: '#',
        name: 'ஆன்மீகம்',
        type: ''
    },
    {
        link: '#',
        name: 'ஆன்மீகச் செய்திகள்',
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
        <Breadcrumb className='d-flex justify-content-start align-items-center fw-medium mb-0' style={{ fontSize: '14px' }} separator={<AngleRightIcon />}>
            {data.map((item, idx) => (
                <Breadcrumb.Item key={idx} as={Link} href={item.link} active={item.type} >{item.name.length > 18 ? (item.name.slice(0, 18) + '...') : (item.name)}</Breadcrumb.Item>
            ))}
        </Breadcrumb>
    )
}

export default ReadMoreBreadcrumb
