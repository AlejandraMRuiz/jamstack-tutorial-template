import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Tags from '../components/tags'
import IndividualBlogpost from '../components/individualBlogpost'

import '../styles/index.scss'

import productivity from '../images/productivity.jpg'
import dailyCarry from '../images/dailycarry.jpg'
import jamstack from '../images/jamstack.jpg'

const tags = ['All', 'Tutorials', 'Lifestyle', 'Personal', 'Resources']
const blogpostInformation = [
  {
    tagList: [
      {
        name: 'Tutorials',
        url: 'https://www.instagram.com/morgan.codes',
      },
    ],
    title: 'JAMSTACK intro',
    summary:
      'Create a blazing fast static blog website with JAMstack using Gatsby, Contentful, and Netlify.',
    date: 'January 1st, 2020',
    imgHeader: jamstack,
  },
  {
    tagList: [
      {
        name: 'Lifestyle',
        url: 'https://www.instagram.com/morgan.codes',
      },
      {
        name: 'Personal',
        url: 'https://www.instagram.com/morgan.codes',
      },
    ],
    title: "What's In My Bag?",
    summary:
      'Sharing my daily necessities as a Software Developer that I carry in my ISM backpack everyday.',
    date: 'February 3rd, 2020',
    imgHeader: dailyCarry,
  },
  {
    tagList: [
      {
        name: 'Resources',
        url: 'https://www.instagram.com/morgan.codes',
      },
    ],
    title: 'Improve Your Workflow',
    summary:
      'Drastically improve your workflow and increase your productivity with these VSCode extensions.',
    date: 'March 4th, 2020',
    imgHeader: productivity,
  },
]

const IndexPage = () => (
  <Layout>
    <SEO title='JAMstack Template' />
    <div className='blogposts-main'>
      <h1 className='header'>Blogposts</h1>
      <div className='divider'></div>
      <Tags tags={tags} className='tagList' />
      <div className='blogposts-content'>
        {blogpostInformation.map((singleBlogpostInfo) => (
          <IndividualBlogpost data={singleBlogpostInfo} />
        ))}
      </div>
    </div>
  </Layout>
)

export default IndexPage
