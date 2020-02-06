import React from 'react'

import '../styles/tags.scss'

const Tags = (props) => {
  const tags = props.tags

  const tagList = tags.map((tag) => (
    <a href='https://www.instagram.com/morgan.codes'>
      <li key={tag.toString()}>{tag}</li>
    </a>
  ))

  return <ul className='tagList'>{tagList}</ul>
}

export default Tags
