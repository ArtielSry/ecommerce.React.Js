import React from 'react';

import Nav from '../../components/nav/Nav';
import Video from '../../components/video/Video';
import Title from '../../components/title/Title';
import NewsLetters from '../../components/sections/NewsLetters';
import Footer from '../../components/footer/Footer';



function Home() {
  return (
    <>
      <Nav/>
      <div className='home_container'>
        <Title title="You can tell every one We know"/>
        <Video/>
        <NewsLetters/>
      </div>
        <Footer/>
    </>
  )
}

export default Home
