import React from 'react';
import MiddleCreatePost from './MiddleCreatePost';
import MiddleVideoChat from './MiddleVideoChat';
import MiddleStoryBoard from './MiddleStoryBoard';
import CardBox from './StoryBox/CardBox';
import './TopCenterStory.css';

function TopCenterStory() {
  return (
    <React.Fragment className='wrapper'>
      <section>
        <CardBox />
      </section>
      <section>
        <MiddleCreatePost />
      </section>
      <section>
        <MiddleVideoChat />
      </section>
      <section>
        <MiddleStoryBoard />
      </section>
    </React.Fragment>
  );
}

export default TopCenterStory;
