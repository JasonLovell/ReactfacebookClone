import React from 'react';
import LeftTopMenu from './LeftTopMenu';
import './Pages.css';
import PagesManageBar from './PagesManageBar';


function Pages() {
  return (
    <React.Fragment>
      <section className="PagesWrapper">
        <aside className="SideBar">
        <div className="TopTitle">
            <h1 className="TopTitle">Pages</h1>
            <LeftTopMenu />
          </div>

        </aside>
        <main className="MainContent">
          <div className="TopTitle">
            <h2>Pages you manage</h2>
            <section>
            <PagesManageBar />
            </section>              
          </div>
        </main>
        </section>
    </React.Fragment>
  );
}

export default Pages;
