import React from 'react'

import '../styles/individual-blogpost.scss'

const IndividualBlogpost = ({data}) => {
    const tags = data.tagList;

    const tagList = tags.map((tag) =>
        <a href={ tag.url }>
            <li key={ tag.name }>
                { tag.name }
            </li>
        </a>
    )

    return (
        <div className="blogpost-container">
            <div className="blogpost-image">
                <img src={ data.imgHeader } alt="blogpost-img" className="blogpost-image" />
            </div>  
            <div className="blogpost-title">
                <p>{ data.title }</p>
            </div>
            <div className="blogpost-summary">
                <p>{ data.summary }</p> 
            </div>
            <ul className="tag-list">{tagList}</ul>
            <div className="blogpost-date">
                <p>{ data.date }</p> 
            </div>
        </div>
    );
}

export default IndividualBlogpost