import React from 'react';
import '@/assets/css/DropsStyles.css'; // Make sure this is the correct path to your CSS file

function Drops01() {
    return (
        <nav className="navbar">
            <ul className="nav">
                <li className="nav-item dropdown">
                    <a href="#" className="nav-link">Dropdown</a>
                    <ul className="dropdown-menu">
                        <li><a href="#" className="dropdown-item">Action</a></li>
                        <li><a href="#" className="dropdown-item">Another action</a></li>
                        <li className="dropdown-divider"></li>
                        <li><a href="#" className="dropdown-item">Something else here</a></li>
                        {/* Nested Dropdown */}
                        <li className="dropdown-submenu">
                            <a href="#" className="dropdown-item drops-parent">More Options</a>
                            <ul className="dropdown-menu nest-drops">
                                <li><a href="#" className="dropdown-item">Sub Action 1</a></li>
                                <li><a href="#" className="dropdown-item">Sub Action 2</a></li>
                                <li><a href="#" className="dropdown-item">Sub Action 3</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

export default Drops01;
