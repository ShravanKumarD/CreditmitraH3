import React from 'react'
import Header from '../../../Components/Header/Header'
import Footer from '../../../Components/Footer'

export default function DigitalMarketing(props) {
  return (
    <>
      <Header routePath={props.routePath} />
      <div className='JD-container'>
        <h1 className='designation'>Job profile: Digital Marketing Specialist </h1>
        <div className='location'>Location: Hyderabad </div>
        <h2>Job Brief</h2>
        <div className='head-line'>We are seeking a highly motivated and creative Digital Marketer to join our team and play
          a key role in developing and executing our digital marketing strategy. You will be
          responsible for a variety of tasks, including managing our social media presence, creating
          engaging content, running online advertising campaigns, and analysing the performance
          of our efforts. </div>
        <h2>Key Responsibilities</h2>
        <ul>
          <li className='JobDescription'> Develop and implement digital marketing campaigns to drive customer acquisition,
            engagement, and retention.</li>

          <li className='JobDescription'> Manage and optimise online advertising campaigns across various platforms, such as
            Google Ads, Facebook Ads, and LinkedIn Ads.</li>
          <li className='JobDescription'> Conduct keyword research and SEO analysis to improve organic search rankings.</li>
          <li className='JobDescription'> Create and manage content marketing strategies, including blog posts, social media,
            and email campaigns. </li>
          <li className='JobDescription'> Monitor and analyse website traffic and user engagement using analytics tools (e.g.,
            Google Analytics). </li>
          <li className='JobDescription'> Collaborate with the design team to create visually appealing and effective marketing
            materials.</li>
          <li className='JobDescription'> Stay updated on industry trends and emerging digital marketing technologies. </li>
          <li className='JobDescription'>easure and report on the performance of digital marketing campaigns and make data driven recommendations for improvement. </li>
        </ul>
        <h2>Qualifications</h2>
        <ul>
          <li className='JobDescription'> Degree in marketing, advertising, communications, or a related field.</li>
          <li className='JobDescription'> Strong knowledge of digital marketing tools, social media platforms and email
            marketing software. </li>
          <li className='JobDescription'> Proven experience in digital marketing, preferably in the finance or wealth management industry.</li>
          <li className='JobDescription'>Understanding of SEO best practices and experience in optimising content for search
            engines.</li>
          <li className='JobDescription'>Excellent communication skills and ability to work collaboratively with cross-functional
            teams. </li>
          <li className='JobDescription'>3+ years of experience in digital marketing.</li>
        </ul>
      </div>
      <Footer />

    </>
  )
}
