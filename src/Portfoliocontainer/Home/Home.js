import React from 'react';
import  './Home.css'
import Profile from './Profile';
import Footer from './footer/footer';

export default function Home() {
  return (
  <div className='home-container'>
    <Profile />
    <Footer />
  </div>);
}
