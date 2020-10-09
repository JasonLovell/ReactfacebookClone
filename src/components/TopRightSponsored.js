import { faGift } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './TopRightSponsored.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TopRightSponsored() {
  return (
    <React.Fragment>
      <section className='SponsorRightSection'>

        <div className='AdvertTop'>
            <div className='SponsorRightTop'>
              <img
                className='ProfileImage'
                src='https://source.unsplash.com/random'
                alt='profile'
                width='110'
                height="90"
              />
              <h4>Jason Lovell</h4>
            </div>
            <br />
            <div className='SponsorRightTop'>
              <img
                className='ProfileImage'
                src='https://source.unsplash.com/random+1'
                alt='profile'
                width='110'
                height="90"
              />
              <h4>Let's build a Financial Dashboard with React</h4>
            </div>
        </div>

        <br />
        <hr width='250px' />
        <br />

        <div className='birthdayBack'>
        <h4>Birthdays</h4>
        <div className='BirthdayRight'>
        <FontAwesomeIcon icon={faGift} size="3x" style={{marginTop:"15", color:"#409AF8"}}/>
          <h5>Jason Lovell and Someone else have their birthdays today.</h5>
        </div>
        </div>
        

        <hr width='250px' />

        <p className='ShortTextRight'>
          <h3 className='ShortText'>
            Your shortcuts
          </h3>
        </p>
        <br />
        <p className='SponsorRight'>
          <img
            className='ProfileImage'
            src='https://randomuser.me/api/portraits/men/49.jpg'
            alt='profile'
            width='40'
          />
          <h4 className='SponsorText'>Lovell FOOD</h4>
        </p>
        <br />
        <p className='SponsorRight'>
          <img
            className='ProfileImage'
            src='https://randomuser.me/api/portraits/men/19.jpg'
            alt='profile'
            width='40'
            height='40'
          />
          <h4 className='SponsorText'>basildon free 4 all</h4>
        </p>
        <br />
        <p className='SponsorRight'>
          <img
            className='ProfileImage'
            src='https://randomuser.me/api/portraits/women/88.jpg'
            alt='profile'
            width='40'
            height='40'
          />
          <h6 className='SponsorText'>
            Sell, Buy and Wanted Grays, Tilbury, Thurrock, Basildon
          </h6>
        </p>
        <br />
        <p className='SponsorRight'>
          <img
            className='ProfileImage'
            src='https://randomuser.me/api/portraits/men/98.jpg'
            alt='profile'
            width='40'
          />
          <h4 className='SponsorText'>Lovell Digital</h4>
        </p>
        <br />
        <p className='SponsorRight'>
          <img
            className='ProfileImage'
            src='https://randomuser.me/api/portraits/women/38.jpg'
            alt='profile'
            width='40'
          />
          <h6 className='SponsorText'>
            Dim Sum Saturday 28th November 2015 @ Yi Ban
          </h6>
        </p>
        <br />
        <p className='SponsorRight'>
          <img
            className='ProfileImage'
            src='https://icon-library.com/images/down-arrow-icon-png/down-arrow-icon-png-12.jpg'
            alt='profile'
            width='40'
          />
          <h4>More</h4>
        </p>
      </section>
    </React.Fragment>
  );
}

export default TopRightSponsored;
