import React from 'react';
import './MiddleCreatePost.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faVideo, faPortrait, faGrin
} from '@fortawesome/free-solid-svg-icons';

function MiddleCreatePost() {
    return (
        <React.Fragment>
            <section className='CreatePostBlock'>
          <img
            className='CreatePostImg'
            src='https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/118881626_3369373789752261_450760895870403241_o.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_eui2=AeE4M023gvfJBfN8YLbvQ0n6vXjbhXmdpx29eNuFeZ2nHVCLnQUiGQ5DO1n2fXuABSASM-Pdzqq14KsGSHJOiaLs&_nc_ohc=FMd1y2Fl0OQAX9pyBRP&_nc_ht=scontent-lht6-1.xx&oh=7afbe9775902071ba1ff9227ec5bb65a&oe=5F983C9B'
            alt='Facebook-Icon'
            width='35'
          />
          <section class='CreatePostText'>
            <input className="CreatePostInput" placeholder="What's on your mind, Jason?" />
          </section>
          <hr />
          <section className="IconBlocks">
          <div className="IconText"><FontAwesomeIcon icon={faVideo} size='10x' style={{color: "red"}}/><h4>Live video</h4></div>
          <div className="IconText"><FontAwesomeIcon icon={faPortrait} size='10x' style={{color: "green"}}/><h4>Photo/video</h4></div>
          <div className="IconText"><FontAwesomeIcon icon={faGrin} size='10x' style={{color: "orange"}} /><h4>Feeling/Activity</h4></div>
          </section>
        </section>
        
        </React.Fragment>
    )
}

export default MiddleCreatePost
