import React from 'react'

import '../styles/links.scss'

const Links = (props) => {
    const links = props.links;

    const linkList = links.map((link) => 
        <a href="https://www.instagram.com/morgan.codes">
            <li key={link.toString()}>
                {link}
            </li>
        </a>
    );

    return (
        <ul className="linkList">{linkList}</ul>
    );
}

export default Links