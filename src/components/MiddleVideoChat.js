import React from 'react';
import './MiddleVideoChat.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';

function MiddleVideoChat() {
  return (
    <React.Fragment>
      <section className='VideoChatBlock'>
        <div className='IconText2'>
          <FontAwesomeIcon
            icon={faVideo}
            size='10x'
            style={{ color:'red'}}
          />
          <h4>Rooms · Video chat with friends</h4>
          </div>
          <div className="CreateRoom">
          <p className="CreateRoomText">Create room</p>
        </div>
        <br />
        <div className='IconText3'>
          <img
            className='VideoChatImg'
            src='https://randomuser.me/api/portraits/men/60.jpg'
            alt='Facebook-Icon'
            width='50'
            height='50'
          />
          <img
            className='VideoChatImg'
            src='https://randomuser.me/api/portraits/women/61.jpg'
            alt='Facebook-Icon'
            width='50'
            height='50'
          />
          <img
            className='VideoChatImg'
            src='https://randomuser.me/api/portraits/men/62.jpg'
            alt='Facebook-Icon'
            width='50'
            height='50'
          />
          <img
            className='VideoChatImg'
            src='https://randomuser.me/api/portraits/men/63.jpg'
            alt='Facebook-Icon'
            width='50'
            height='50'
          />
          <img
            className='VideoChatImg'
            src='https://randomuser.me/api/portraits/lego/4.jpg'
            alt='Facebook-Icon'
            width='50'
            height='50'
          />
          <img
            className='VideoChatImg'
            src='https://randomuser.me/api/portraits/women/65.jpg'
            alt='Facebook-Icon'
            width='50'
            height='50'
          />
          <img
            className='VideoChatImg'
            src='https://randomuser.me/api/portraits/women/66.jpg'
            alt='Facebook-Icon'
            width='50'
            height='50'
          />
          <img
            className='VideoChatImg'
            src='https://randomuser.me/api/portraits/men/67.jpg'
            alt='Facebook-Icon'
            width='50'
            height='50'
          />
          <img
            className='VideoChatImg'
            src='https://randomuser.me/api/portraits/women/68.jpg'
            alt='Facebook-Icon'
            width='50'
            height='50'
          />
        </div>
      </section>
    </React.Fragment>
  );
}

export default MiddleVideoChat;
