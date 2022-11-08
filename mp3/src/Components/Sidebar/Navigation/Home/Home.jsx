import React from 'react';
import './home.css';

function Home() {
  return (
    <div className="Home">
      <a className='gradient'></a>
      <a className='bg'></a>
      <a className='text goodM'>Good morning</a>
      <div className='rects rect5'><a className='mid'>Library</a></div>
      <div className='rects rect6'><a className='mid'>Acoustic Hits</a></div>
      <div className='rects rect7'><a className='mid'>Electronic</a></div>
      <div className='rects rect8'><a className='mid'>Romantic</a></div>
      <div className='rects rect9'><a className='mid'>Hip Hop</a></div>
      <div className='rects rect10'><a className='mid'>Global Top</a></div>
      <a className='text showToTry'>Shows to try</a>
      <div className='bigRects rect11'><a className='bmid'>Old is Gold</a></div>
      <div className='bigRects rect12'><a className='bmid'>Pop Hits</a></div>
      <div className='bigRects rect13'><a className='bmid'>90's Hits</a></div>
      <a className='text yourTopMixes'>Your Top Mixes</a>
      <div className='bigRects rect14'><a className='bmid'>KISS, Queen, My Darkest Days</a></div>
      <div className='bigRects rect15'><a className='bmid'>Nickelback, Twenty One Pilots, Three Days Grace</a></div>
      <div className='bigRects rect16'><a className='bmid'>Skillet, Evanescence, Flyleaf</a></div>
    </div>
  );
}

export default Home;
