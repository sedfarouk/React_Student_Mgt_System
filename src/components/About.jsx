import React from 'react';
import ug from '../images/ug.jpg'

const AboutPage = () => {
  return (
    <div className="container mt-4 mb-4">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
        <div className='text-center'><img src={ug} className='img-fluid mb-4' width='100%'/></div>
          <h2 className="text-center mb-4">About University of Ghana</h2>
          <p>The University of Ghana is a renowned institution of higher learning located in Accra, the capital city of Ghana. Established in 1948, it is the oldest and largest university in Ghana, with a rich history and a strong commitment to academic excellence.</p>

          <h3>Mission</h3>
          <p>The mission of the University of Ghana is to develop world-class human resources and capabilities to meet national development needs and global challenges through quality teaching, learning, research, and knowledge dissemination.</p>

          <h3>Vision</h3>
          <p>The vision of the University of Ghana is to become a world-class research-intensive university that is globally recognized for its leadership in academic excellence, research, and innovation.</p>

          <h3>Academic Programs</h3>
          <p>The University of Ghana offers a wide range of academic programs across various disciplines, including arts and humanities, social sciences, business, science, technology, agriculture, health sciences, and more. It provides undergraduate, postgraduate, and research programs to cater to the diverse educational needs of students.</p>

          <h3>Campus Facilities</h3>
          <p>The university boasts a beautiful and expansive campus with state-of-the-art facilities, including modern classrooms, well-equipped laboratories, libraries, sports facilities, student accommodation, and recreational spaces. The campus provides a conducive environment for learning, research, and personal growth.</p>

          <h3>Research and Innovation</h3>
          <p>The University of Ghana is committed to fostering a culture of research and innovation. It actively engages in cutting-edge research, drives innovation, and contributes to the development of knowledge in various fields. The university encourages students and faculty members to participate in research projects and collaborate with national and international partners.</p>

          <h3>Community Engagement</h3>
          <p>As a leading academic institution, the University of Ghana recognizes the importance of community engagement and social responsibility. It actively seeks to make a positive impact on society through outreach programs, community development initiatives, and partnerships with local communities and organizations.</p>

          <h3>Conclusion</h3>
          <p>The University of Ghana remains a prestigious institution that upholds high academic standards, fosters intellectual growth, and prepares students for successful careers and contributions to society. It continues to be a beacon of knowledge, research, and innovation in Ghana and beyond.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
