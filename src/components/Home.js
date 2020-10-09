import React from 'react';
import './Home.css';
import LeftTopMenu from './LeftTopMenu';
import TopCenterStory from './TopCenterStory';
import TopRightSponsored from './TopRightSponsored';

function Home() {
  return (
    <React.Fragment>
      <div className='wrapper'>
        <section className='left_block'>
          <LeftTopMenu />
        </section>
        <section className='middle_block'>
          <TopCenterStory />
        </section>
        <section className='right_block'>
          <TopRightSponsored />
        </section>
      </div>
    </React.Fragment>
  );
}

export default Home;
