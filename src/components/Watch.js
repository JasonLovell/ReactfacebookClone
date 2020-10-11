import React from 'react';
import MiddleStoryBoard2 from './MiddleStoryBoard2';
import './Watch.css'
import LeftTopMenu from './LeftTopMenu';
import './Pages.css';
import PagesManageBar from './PagesManageBar';


function Watch() {
  return (
    <React.Fragment>
      <section className="PagesWrapper">
        <aside className="SideBar">
        <div className="TopTitle">
            <h1 className="TopTitle">Watch</h1>
            <LeftTopMenu />
          </div>

        </aside>
        <main className="MainContent">
          <div className="TopTitle">
            <h2>Top videos for you
</h2>
            <section>
            <MiddleStoryBoard2 />
            </section>              
          </div>
        </main>
        </section>
    </React.Fragment>
  );
}

export default Watch;
