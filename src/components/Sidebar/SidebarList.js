import React from 'react'

const SidebarList = (props) => {
    const { value, image, link } = props;
    return (
        <li className="nav-item mb-2">
            <a href={link}>
                <img src={image} className="mr-3" height="12px" alt="" />
                <span>{value}</span>
            </a>
        </li>
    )
}

export default SidebarList
