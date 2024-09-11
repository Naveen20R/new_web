import MainMenuLink from '@/components/mainmenu/MainMenuLink'
import React from 'react'

function MenuLayout() {
    return (
        <div className="container my-3 d-none d-md-block">
            <div className="row row-cols-md-3 row-cols-xl-6">
                <div className="col border">
                    <MainMenuLink/>
                </div>
                <div className="col border">
                    <MainMenuLink />
                </div>
                <div className="col border">
                    <MainMenuLink />
                </div>
                <div className="col border">
                    <MainMenuLink />
                </div>
                <div className="col border">
                    <MainMenuLink />
                </div>
                <div className="col border">
                    <MainMenuLink />
                </div>
            </div>
        </div>
    )
}

export default MenuLayout