'use client'
import React from 'react'
import { Breadcrumb } from 'rsuite';
import AngleRightIcon from '@rsuite/icons/legacy/AngleRight';
import Link from 'next/link';

const ViewAllBreadcrumb = () => {
    return (
        <Breadcrumb className='d-flex justify-content-start align-items-center fw-medium mb-0' style={{ fontSize: '14px' }} separator={<AngleRightIcon />}>
            <Breadcrumb.Item as={Link} href="/">
                Home
            </Breadcrumb.Item>
            <Breadcrumb.Item as={Link} href="/components/overview">
                ஆன்மீகம்
            </Breadcrumb.Item>
            <Breadcrumb.Item active> ஆன்மீகச் செய்திகள்</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default ViewAllBreadcrumb